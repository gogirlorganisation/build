import Head from "./Head";

export default function Layout({ title, children }) {
  return (
    <>
      <Head title={title} />
      {children}
    </>
  );
}
