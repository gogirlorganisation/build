import Layout from "../components/Layout";

import { WithAuth } from "../lib/auth";
import withContexts from "../lib/with-contexts";
import Hero from "../components/DashboardHero.js";
import Lessons from "../components/Lesson.js";
import Leaderboard from "../components/Leaderboard";
import Badges from "../components/Badges";
import Sponsors from "../components/Sponsors";



function Dashboard() {
  return (
    <Layout title="Dashboard">
      <WithAuth authenticated={true}>
        <Hero />
        <Lessons/>
        <Leaderboard/>
        <Badges/>
        <Sponsors/>
      </WithAuth>
    </Layout>
  );
}

export default withContexts(Dashboard);
