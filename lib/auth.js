import React from "react";
import { useRouter } from "next/router";
import firebase from "./firebase";

export const GoogleProvider = new firebase.auth.GoogleAuthProvider();
export const FacebookProvider = new firebase.auth.FacebookAuthProvider();

export function WithAuth(props) {
  const router = useRouter();

  React.useEffect(() => {
    if (!firebase.auth().currentUser && props.authenticated) {
      router.push("/");
    }
    if (firebase.auth().currentUser && !props.authenticated) {
      router.push("/dashboard");
    }
  }, []);

  return props.children;
}
