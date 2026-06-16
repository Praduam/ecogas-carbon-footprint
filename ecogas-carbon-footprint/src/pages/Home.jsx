import CarbonCalculator from "../components/CarbonCalculator";

function Home() {
  return (
    <div className="container">
      <div className="card">
        <h1>EcoGas Carbon Footprint Awareness Platform</h1>

        <p>
          Track your household emissions,
          understand your carbon footprint,
          and receive personalized sustainability
          recommendations.
        </p>
      </div>

      <CarbonCalculator />
    </div>
  );
}

export default Home;