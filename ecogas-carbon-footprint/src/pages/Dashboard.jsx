import Dashboard from "../components/Dashboard";

function DashboardPage({ data }) {
  return (
    <div className="container">
      <Dashboard data={data} />
    </div>
  );
}

export default DashboardPage;