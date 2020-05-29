import Layout from "../components/Layout";

import { WithAuth } from "../lib/auth";
import withContexts from "../lib/with-contexts";
import Hero from "../components/DashboardHero.js";

function Dashboard() {
  return (
    <Layout title="Dashboard">
      <WithAuth authenticated={true}>
        <Hero />
      </WithAuth>
    </Layout>
  );
}

export default withContexts(Dashboard);
