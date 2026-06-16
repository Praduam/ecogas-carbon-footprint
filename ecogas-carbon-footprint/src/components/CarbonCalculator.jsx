import { useState } from "react";
import EcoScore from "./EcoScore";
import Recommendation from "./Recommendation";

function CarbonCalculator() {
  const [result, setResult] = useState(null);

  const calculate = (e) => {
    e.preventDefault();

    const lpg =
      Number(document.getElementById("lpg").value) || 0;

    const electricity =
      Number(document.getElementById("electricity").value) || 0;

    const car =
      Number(document.getElementById("car").value) || 0;

    const flights =
      Number(document.getElementById("flights").value) || 0;

    const total =
      lpg * 170 +
      electricity * 0.5 +
      car * 0.21 +
      flights * 250;

    const ecoScore = Math.max(
      0,
      Math.min(100, 100 - total / 50)
    );

    setResult({
      total,
      ecoScore
    });
  };

  return (
    <div className="card">
      <h2>Carbon Footprint Calculator</h2>

      <form onSubmit={calculate}>
        <label>LPG Cylinders / Month</label>
        <input id="lpg" type="number" />

        <label>Electricity Usage (kWh)</label>
        <input id="electricity" type="number" />

        <label>Car Travel (km/month)</label>
        <input id="car" type="number" />

        <label>Flights Per Year</label>
        <input id="flights" type="number" />

        <button type="submit">
          Calculate
        </button>
      </form>

      {result && (
        <>
          <div className="card">
            <h2>Total Emissions</h2>
            <h1>{result.total.toFixed(2)} kg CO₂</h1>
          </div>

          <EcoScore score={result.ecoScore.toFixed(0)} />

          <Recommendation emission={result.total} />
        </>
      )}
    </div>
  );
}

export default CarbonCalculator;