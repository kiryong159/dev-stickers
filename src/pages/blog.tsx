import { graphql, PageProps } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

function Blog({ data }: PageProps<Queries.BlogPostsQuery>) {
  console.log(data);
  return (
    <Layout title="welcome by blog">
      <section>
        {data.allMdx.nodes.map((post, index) => (
          <article key={index}>
            <h3>{post.frontmatter?.title}</h3>
            <h5>
              {post.frontmatter?.author} in : {post.frontmatter?.category}
            </h5>
            <h6>{post.frontmatter?.date}</h6>
            <hr />
            <p>{post.excerpt}</p>
          </article>
        ))}
      </section>
    </Layout>
  );
}

export const query = graphql`
  query BlogPosts {
    allMdx {
      nodes {
        frontmatter {
          author
          category
          title
          date(formatString: "YYYY.MM.DD")
        }
        excerpt
      }
    }
  }
`;

export const Head = () => <Seo title="Blog" />;

export default Blog;
