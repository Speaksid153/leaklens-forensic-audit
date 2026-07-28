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

## Interpretation

Near-perfect univariate performance is labeled *suspected* leakage. Domain knowledge is required
to determine whether a field would exist at the real prediction moment. Categorical screening uses
leave-one-out encoding so a row's own label cannot manufacture its suspicious-feature score.
