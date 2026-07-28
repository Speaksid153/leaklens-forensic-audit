"""Materialize deterministic demo CSVs for local use and deployment."""

from pathlib import Path

from leaklens.demo_data import DEMO_FACTORIES


def main() -> None:
    output = Path("demo_data")
    output.mkdir(exist_ok=True)
    for name, factory in DEMO_FACTORIES.items():
        frame = factory()
        path = output / f"{name}.csv"
        frame.to_csv(path, index=False)
        print(f"wrote {path} ({len(frame)} rows)")


if __name__ == "__main__":
    main()

