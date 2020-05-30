import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/DashboardHero.js";
import Lessons from "../components/Lesson.js";
import Leaderboard from "../components/Leaderboard";
import Badges from "../components/Badges";
import Sponsors from "../components/Sponsors";

function Dashboard() {
  return (
    <Layout title="Dashboard">
      <Hero />
      <Lessons />
      <Leaderboard />
      <Badges />
      <Sponsors />
    </Layout>
  );
}

export default Dashboard;
