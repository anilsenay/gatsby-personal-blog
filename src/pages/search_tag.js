import React from "react"
import { Link } from "gatsby"

import { graphql } from 'gatsby'

import Post from '../components/homepage_post'
import Header from'../components/header'
import BackIcon from '../assets/back_icon';


const Search = ({data, location}) => {

  const word = location.state !== undefined ? location.state.word : ""


  // filtering graphql query with variables is not supporting, so I have to get all data and filter in js
  const posts = data.allMarkdownRemark.nodes.filter(post => post.frontmatter.keywords.includes(word));
  const sortedPosts = posts.sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date))
  
  return (

    <div className="blog-post-container m-auto max-w-6xl lg:px-20 px-8 mt-16">
      <div className="cursor-pointer" onClick={() => window.history.back()}>
        <BackIcon width={32} fill="#e4e2ff" className="mb-10"/>
      </div>
      <Header name={`Searched tag: #${word}`} info={`Found ${sortedPosts.length} post`}/>
      {sortedPosts.map(post => {
        return (
          <div key={post.frontmatter.title}>
            <Link to="full_post" state={post}><Post data = {post}/></Link>
            <hr/>
          </div>
        )
      })}
      
    </div>
  )

}

export const query = graphql`
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

export default Search
