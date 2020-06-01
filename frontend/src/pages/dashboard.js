import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/DashboardHero.js";
import Lessons from "../components/Lesson.js";
import Badges from "../components/Badges";
import Sponsors from "../components/Sponsors";
import withAuth from "../lib/with-auth";

function Dashboard() {
  return (
    <Layout title="Dashboard">
      <Hero />
      <Lessons />
      <Badges />
      <Sponsors />
    </Layout>
  );
}

export default withAuth(Dashboard, true, "/");
