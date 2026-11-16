import { Outlet } from "react-router-dom";

function Dashboard() {
  return (
    
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to your dashboard!</p>

      <hr />

      <Outlet />

    </div>
  );
}

export default Dashboard;