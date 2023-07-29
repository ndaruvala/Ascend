import React from "react";
import Navbar from "../components/molecules/Navbar";
import Sidebar from "../components/molecules/Sidebar";
import DashboardView from "../components/organisms/DashboardView";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-24 grid-rows-12 h-screen">
      <Navbar />
      <Sidebar />
      <DashboardView />
    </div>
  );
};

export default Dashboard;
