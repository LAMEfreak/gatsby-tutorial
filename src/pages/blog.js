import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { graphql } from "gatsby";

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      
        {data.allMdx.nodes.map((post) => {
          return <article key={post.id}>
            <h2>{post.frontmatter.name}</h2>
            <p>{post.excerpt}</p>
            <p>posted:{post.frontmatter.date}</p>
          </article>;
        })}
      
    </Layout>
  );
};

export const Head = () => <Seo title="My Blog Posts" />;

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        id
        excerpt
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          name
        }
        parent {
          ... on File {
            id
            name
            modifiedTime(formatString: "dddd m, yyyy")
          }
        }
      }
    }
  }
`;

export default BlogPage;
