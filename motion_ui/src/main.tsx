import React from "react";
import { createRoot, Root } from "react-dom/client";
import { useMotionValue, useMotionValueEvent, useReducedMotion, animate, motion } from "motion/react";
import type { FrontendRenderer, FrontendState } from "@streamlit/component-v2-lib";
import "./styles.css";

type Stage = { label: string; value: number };
type SummaryData = {
  reliability: number;
  naiveAuc: number;
  trustedAuc: number;
  inflation: number;
  stages: Stage[];
  findingCount: number;
};

function CountUp({ value, digits = 0, suffix = "" }: { value: number; digits?: number; suffix?: string }) {
  const reduceMotion = useReducedMotion();
  const progress = useMotionValue(reduceMotion ? value : 0);
  const [display, setDisplay] = React.useState(reduceMotion ? value : 0);
  useMotionValueEvent(progress, "change", setDisplay);

  React.useEffect(() => {
    if (reduceMotion) {
      progress.set(value);
      return;
    }
    const controls = animate(progress, value, { duration: 0.8, ease: "easeOut" });
    return () => controls.stop();
  }, [progress, reduceMotion, value]);

  return <>{display.toFixed(digits)}{suffix}</>;
}

function AuditSummary({ data }: { data: SummaryData }) {
  const reduceMotion = useReducedMotion();
  const enter = reduceMotion ? {} : { opacity: 0, y: 10 };
  const transition = (index: number) => ({ duration: 0.4, delay: reduceMotion ? 0 : index * 0.06 });
  const status = data.reliability >= 80 ? "Defensible" : data.reliability >= 60 ? "Review" : "Compromised";

  return (
    <section className="ll-shell" aria-label="Animated audit summary">
      <div className="ll-verdict">
        <div>
          <span className="ll-kicker">Evaluation integrity</span>
          <h2>{status}</h2>
          <p>{data.findingCount} forensic finding{data.findingCount === 1 ? "" : "s"} changed how the headline score should be read.</p>
        </div>
        <div className="ll-score" aria-label={`Reliability ${data.reliability} out of 100`}>
          <CountUp value={data.reliability} suffix="/100" />
        </div>
      </div>

      <div className="ll-metrics">
        {[
          ["Naive ROC-AUC", data.naiveAuc, "The tempting headline"],
          ["Trusted ROC-AUC", data.trustedAuc, "After defensible controls"],
          ["Exposed inflation", data.inflation, "Performance that did not survive"],
        ].map(([label, value, note], index) => (
          <motion.article key={String(label)} className="ll-card" initial={enter} animate={{ opacity: 1, y: 0 }} transition={transition(index)}>
            <span>{String(label)}</span>
            <strong><CountUp value={Number(value)} digits={3} /></strong>
            <small>{String(note)}</small>
          </motion.article>
        ))}
      </div>

      <div className="ll-journey">
        <div className="ll-journey-head"><span>Score survival path</span><small>ROC-AUC by evaluation stage</small></div>
        {data.stages.map((stage, index) => (
          <div className="ll-stage" key={`${stage.label}-${index}`}>
            <div><span>{stage.label}</span><b>{stage.value.toFixed(3)}</b></div>
            <div className="ll-track"><motion.div initial={{ width: reduceMotion ? `${stage.value * 100}%` : 0 }} animate={{ width: `${stage.value * 100}%` }} transition={{ duration: 0.7, delay: reduceMotion ? 0 : 0.15 + index * 0.09, ease: "easeOut" }} /></div>
          </div>
        ))}
      </div>
    </section>
  );
}

type MountedRoot = { container: HTMLDivElement; root: Root };
const roots = new WeakMap<HTMLElement | ShadowRoot, MountedRoot>();

const renderSummary: FrontendRenderer<FrontendState, SummaryData> = ({ data, parentElement }) => {
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
