import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import { graphql } from "gatsby"

const IndexPage = ({data}) => {

  const posts = data.allMarkdownRemark.nodes;

  return (

    <div className="blog-post-container">
      {posts.map(node => {
        return <div className="blog-post" key={node.frontmatter.title}>
          <h1>{node.frontmatter.title}</h1>
          <h2>{node.frontmatter.date}</h2>
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

export default IndexPage
