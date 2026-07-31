import React from "react";
import { createRoot, Root } from "react-dom/client";
import {
  AnimatePresence,
  MotionConfig,
  animate,
  motion,
  stagger,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
} from "motion/react";
import type { FrontendRenderer, FrontendState } from "@streamlit/component-v2-lib";
import "./styles.css";

type Stage = { label: string; value: number };
type SummaryData = {
  reliability: number;
  naiveAuc: number;
  comparisonAuc: number;
  comparisonGap: number;
  stages: Stage[];
  findingCount: number;
  fallback: boolean;
  verdictCopy: string;
  gapLabel: string;
  gapNote: string;
};

type Tone = "safe" | "review" | "critical";

function CountUp({
  value,
  digits = 0,
  suffix = "",
}: {
  value: number;
  digits?: number;
  suffix?: string;
}) {
  const reduceMotion = useReducedMotion();
  const progress = useMotionValue(reduceMotion ? value : 0);
  const [display, setDisplay] = React.useState(reduceMotion ? value : 0);
  useMotionValueEvent(progress, "change", setDisplay);

  React.useEffect(() => {
    if (reduceMotion) {
      progress.jump(value);
      setDisplay(value);
      return;
    }
    const controls = animate(progress, value, {
      duration: 0.72,
      ease: [0.22, 1, 0.36, 1],
    });
    return () => controls.stop();
  }, [progress, reduceMotion, value]);

  return (
    <>
      <span aria-hidden="true">
        {display.toFixed(digits)}
        {suffix}
      </span>
      <span className="ll-sr-only">
        {value.toFixed(digits)}
        {suffix}
      </span>
    </>
  );
}

function ReliabilityRing({
  value,
  tone,
}: {
  value: number;
  tone: Tone;
}) {
  const reduceMotion = useReducedMotion();
  const progress = Math.max(0, Math.min(value / 100, 1));

  return (
    <div
      className={`ll-ring ll-ring--${tone}`}
      role="progressbar"
      aria-label="Evaluation reliability"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={value}
    >
      <svg viewBox="0 0 220 220" aria-hidden="true">
        <circle className="ll-ring-track" cx="110" cy="110" r="88" />
        <motion.circle
          className="ll-ring-value"
          cx="110"
          cy="110"
          r="88"
          pathLength={1}
          initial={{ pathLength: reduceMotion ? progress : 0 }}
          animate={{ pathLength: progress }}
          transition={{ duration: reduceMotion ? 0 : 0.8, ease: [0.22, 1, 0.36, 1] }}
        />
      </svg>
      <div className="ll-ring-copy">
        <strong>
          <CountUp value={value} />
        </strong>
        <span>/ 100</span>
      </div>
    </div>
  );
}

function MetricCard({
  label,
  value,
  note,
  digits = 3,
  suffix = "",
  tone,
}: {
  label: string;
  value: number;
  note: string;
  digits?: number;
  suffix?: string;
  tone?: Tone;
}) {
  return (
    <motion.article
      className={`ll-card${tone ? ` ll-card--${tone}` : ""}`}
      variants={{
        hidden: { opacity: 0, y: 8 },
        show: { opacity: 1, y: 0 },
      }}
      layout="position"
    >
      <span className="ll-card-label">{label}</span>
      <strong>
        <CountUp value={value} digits={digits} suffix={suffix} />
      </strong>
      <small>{note}</small>
    </motion.article>
  );
}

function AuditSummary({ data }: { data: SummaryData }) {
  const reduceMotion = useReducedMotion();
  const status = data.fallback
    ? "Split infeasible"
    : data.reliability >= 80
      ? "Defensible"
      : data.reliability >= 60
        ? "Review required"
        : "Compromised";
  const tone: Tone = data.fallback
    ? "review"
    : data.reliability >= 80
      ? "safe"
      : data.reliability >= 60
        ? "review"
        : "critical";
  const comparisonLabel = data.fallback
    ? "Conservative baseline"
    : "Trusted ROC-AUC";
  const comparisonNote = data.fallback
    ? "Duplicate-safe holdout unavailable"
    : "After defensible controls";
  const summaryKey = [
    data.reliability,
    data.naiveAuc,
    data.comparisonAuc,
    data.findingCount,
    Number(data.fallback),
  ].join("-");

  const group = {
    hidden: {},
    show: {
      transition: {
        delayChildren: reduceMotion ? 0 : stagger(0.055, { startDelay: 0.06 }),
      },
    },
  };

  return (
    <MotionConfig
      reducedMotion="user"
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
    >
      <AnimatePresence mode="wait">
        <motion.section
          key={summaryKey}
          className="ll-shell"
          aria-label="Audit result summary"
          initial={{ opacity: 0, y: reduceMotion ? 0 : 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: reduceMotion ? 0 : -4 }}
        >
          <div className="ll-summary-grid">
            <motion.article
              className={`ll-score-card ll-score-card--${tone}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="ll-score-head">
                <span>Reliability score</span>
                <span className={`ll-status ll-status--${tone}`}>{status}</span>
              </div>
              <ReliabilityRing value={data.reliability} tone={tone} />
              <p>{data.verdictCopy}</p>
            </motion.article>

            <motion.div
              className="ll-metrics"
              variants={group}
              initial="hidden"
              animate="show"
            >
              <MetricCard
                label="Naive ROC-AUC"
                value={data.naiveAuc}
                note="Unfiltered evaluation metric"
              />
              <MetricCard
                label={comparisonLabel}
                value={data.comparisonAuc}
                note={comparisonNote}
                tone={tone === "critical" ? "critical" : undefined}
              />
              <MetricCard
                label={data.gapLabel}
                value={data.comparisonGap}
                note={data.gapNote}
                tone={data.comparisonGap > 0.1 ? "critical" : undefined}
              />
              <MetricCard
                label="Findings"
                value={data.findingCount}
                digits={0}
                note={`${data.findingCount} detector${data.findingCount === 1 ? "" : "s"} triggered`}
                tone={data.findingCount > 0 ? tone : "safe"}
              />
            </motion.div>
          </div>

          <motion.section
            className="ll-journey"
            initial={{ opacity: 0, y: reduceMotion ? 0 : 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: reduceMotion ? 0 : 0.18 }}
          >
            <div className="ll-journey-head">
              <div>
                <span>Evaluation score survival</span>
                <small>ROC-AUC after each forensic control</small>
              </div>
              <span className={`ll-status ll-status--${tone}`}>{status}</span>
            </div>
            <div className="ll-stage-list">
              {data.stages.map((stage, index) => (
                <div className="ll-stage" key={`${stage.label}-${index}`}>
                  <div className="ll-stage-meta">
                    <span>{stage.label}</span>
                    <b>{stage.value.toFixed(3)}</b>
                  </div>
                  <div
                    className="ll-track"
                    role="progressbar"
                    aria-label={`${stage.label} ROC-AUC`}
                    aria-valuemin={0}
                    aria-valuemax={1}
                    aria-valuenow={stage.value}
                  >
                    <motion.div
                      initial={{ scaleX: reduceMotion ? stage.value : 0 }}
                      animate={{ scaleX: stage.value }}
                      transition={{
                        duration: reduceMotion ? 0 : 0.65,
                        delay: reduceMotion ? 0 : 0.22 + index * 0.08,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
        </motion.section>
      </AnimatePresence>
    </MotionConfig>
  );
}

type MountedRoot = { container: HTMLDivElement; root: Root };
const roots = new WeakMap<HTMLElement | ShadowRoot, MountedRoot>();

const renderSummary: FrontendRenderer<FrontendState, SummaryData> = ({
  data,
  parentElement,
}) => {
  let mounted = roots.get(parentElement);
  if (!mounted) {
    const container = document.createElement("div");
    container.className = "ll-root";
    parentElement.appendChild(container);
    mounted = { container, root: createRoot(container) };
    roots.set(parentElement, mounted);
  }
  mounted.root.render(<AuditSummary data={data} />);
};

export default renderSummary;
