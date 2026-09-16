# LeakLens methodology

## Principle

LeakLens does not certify that a model is safe or fair. It produces reproducible statistical
evidence about common evaluation failures and compares a naive experiment with a safer one.

## Findings

Every detector emits the same typed contract: detector name, severity, title, explanation,
recommendation, evidence, affected columns, and whether an automatic comparison is defensible.

## Evaluation safety

All imputation, scaling, and encoding are fitted inside a Scikit-learn pipeline after the split.
The test partition never determines preprocessing parameters. Available split strategies are:

1. stratified random split for independent rows;
2. group-aware split for repeated entities;
3. chronological split for forward-looking deployment;
4. entity-disjoint chronological split when both constraints apply.

The combined strategy assigns the latest non-overlapping entity cohorts to the test partition. If
entity time ranges overlap, strict temporal ordering and entity disjointness cannot both be achieved
without discarding data. LeakLens rejects that configuration rather than silently weakening the
evaluation contract.

When corrected feature duplicates cannot form class-valid, group-disjoint partitions, LeakLens
does not present a contaminated random split as trustworthy. It reports the infeasibility and
shows a non-memorizing prevalence baseline as a conservative reference.

## Interpretation

Near-perfect univariate performance is labeled *suspected* leakage. Domain knowledge is required
to determine whether a field would exist at the real prediction moment. Categorical screening uses
leave-one-out encoding so a row's own label cannot manufacture its suspicious-feature score.

## Reproducibility and remediation

Each diagnostic carries a versioned provenance manifest: dataset SHA-256, experiment semantics,
seed, holdout size, engine version, and scientific-runtime versions. The optional candidate
controlled CSV applies only the exclusions already shown in the audit and must still pass domain
review before it is used for modelling.
