function Recommendation({ emission }) {
  let tips = [];

  if (emission > 3000) {
    tips.push("Use public transportation.");
    tips.push("Reduce LPG consumption.");
    tips.push("Install solar panels.");
    tips.push("Reduce air travel.");
  } else {
    tips.push("Maintain your sustainable habits.");
    tips.push("Continue recycling.");
  }

  return (
    <div className="card">
      <h2>Recommendations</h2>

      <ul>
        {tips.map((tip, index) => (
          <li key={index}>{tip}</li>
        ))}
      </ul>
    </div>
  );
}

export default Recommendation;