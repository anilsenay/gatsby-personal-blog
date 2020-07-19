import React from "react"
import { Link } from "gatsby"

import { graphql } from 'gatsby'

import Post from '../components/homepage_post'
import Header from'../components/header'


const IndexPage = ({data}) => {
  const posts = data.allMarkdownRemark.nodes;
  const sortedPosts = posts.sort((a, b) => new Date(a.frontmatter.date) - new Date(b.frontmatter.date))

  return (

    <div className="blog-post-container m-auto max-w-6xl lg:px-20 px-8 mt-24">
      <Header name="Anıl Şenay" info="Personal Blog"/>
      {sortedPosts.map(post => {
        return (
          <div>
            <Link to="full_post" state={post}><Post data = {post}/></Link>
            <hr/>
          </div>
        )
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
        keywords
      }
      excerpt(pruneLength: 300)
      html
      wordCount {
        words
      }
    }
  }
}
`

export default IndexPage
