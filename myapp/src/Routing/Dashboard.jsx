import React from "react";

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to the dashboard!</p>
      <p>This is a protected route.</p>
      <p>You can only see this if you are authenticated.</p>
    </div>
  );
}

export default Dashboard;
