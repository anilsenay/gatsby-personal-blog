import React from 'react'
import { graphql } from 'gatsby';

export default function FullPost({data}) {
    const posts = data.allMarkdownRemark.nodes;

    return (
  
      <div className="blog-post-container m-auto max-w-6xl px-8 mt-24">
        {posts.map(node => {
          return <div className="blog-post" key={node.frontmatter.title}>
            <h1 className="text-5xl">{node.frontmatter.title}</h1>
            <h2>{node.frontmatter.date}</h2>
            <hr/>
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: node.html }}
            />
          </div>
        })}
  
      </div>
    )
}

export const pageQuery = graphql`
{
  allMarkdownRemark {
    nodes {
      frontmatter {
        date
        slug
        title
      }
      excerpt
      html
    }
  }
}
`
