import * as React from "react";
import Layout from "../components/layout";

const AboutPage = () => {
  return (
    <main>
      <Layout pageTitle='About Me'>
      <p>Hi there! I'm the proud creator of this site.</p>
      </Layout>
    </main>
  );
};

export default AboutPage;

export const Head = () => <title>About Me</title>;
