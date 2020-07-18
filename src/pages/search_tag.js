import React from "react"
import { Link, navigate } from "gatsby"

import { graphql } from 'gatsby'

import Post from '../components/homepage_post'
import Header from'../components/header'
import BackIcon from '../assets/back_icon';


const Search = ({data, location}) => {

  const word = location.state !== undefined ? location.state.word : ""


  // filtering graphql query with variables is not supporting, so I have to get all data and filter in js
  const posts = data.allMarkdownRemark.nodes.filter(post => post.frontmatter.keywords.includes(word));
  
  return (

    <div className="blog-post-container m-auto max-w-6xl lg:px-20 px-8 mt-24">
      <div className="cursor-pointer" onClick={() => window.history.back()}>
        <BackIcon width={32} fill="#e4e2ff" className="mb-10"/>
      </div>
      <Header name={`Searched tag: #${word}`} info={`Found ${posts.length} post`}/>
      {posts.map(post => {
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
