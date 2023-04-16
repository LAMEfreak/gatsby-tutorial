import * as React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { Link, graphql } from "gatsby";

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      {data.allMdx.nodes.map((post) => {
          console.log(post.frontmatter.name, post.frontmatter.slug);
        return (
          <article key={post.id}>
            <h2>
              <Link to={`/blog/${post.frontmatter.slug}`}>
                {post.frontmatter.name}
              </Link>
            </h2>
            <p>posted:{post.frontmatter.date}</p>
          </article>
        );
      })}
    </Layout>
  );
};

export const Head = () => <Seo title="My Blog Posts" />;

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          name
          slug
        }
        excerpt
        id
        parent {
          ... on File {
            id
            name
            modifiedTime(formatString: "DDDD M, YYYY")
          }
        }
      }
    }
  }
`;

export default BlogPage;
