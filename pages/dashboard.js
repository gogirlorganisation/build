import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { useToasts } from "react-toast-notifications";

import { WithAuth } from "../lib/auth";
import firebase from "../lib/firebase";

export default function Dashboard() {
  const router = useRouter();
  const { addToast } = useToasts();

  return (
    <Layout title="Dashboard">
      <WithAuth authenticated={true}>
        <button
          onClick={async () => {
            await firebase.auth().signOut();
            router.push("/");
          }}
        >
          Logout
        </button>
      </WithAuth>
    </Layout>
  );
}
