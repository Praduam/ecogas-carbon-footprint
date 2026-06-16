function EcoScore({ score }) {
  let badge = "";

  if (score >= 80) {
    badge = "🌿 Green Champion";
  } else if (score >= 60) {
    badge = "🌱 Eco Explorer";
  } else if (score >= 40) {
    badge = "🌎 Climate Aware";
  } else {
    badge = "⚠ Needs Improvement";
  }

  return (
    <div className="card">
      <h2>Eco Score</h2>
      <h1>{score}</h1>
      <h3>{badge}</h3>
    </div>
  );
}

export default EcoScore;