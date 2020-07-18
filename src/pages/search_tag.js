import React from "react"
import { Link, navigate } from "gatsby"

import { graphql } from 'gatsby'

import Post from '../components/homepage_post'
import Header from'../components/header'
import BackIcon from '../assets/back_icon';


const Search = ({data, location}) => {

  const word = location.state.word
  const posts = data.allMarkdownRemark.nodes.filter(post => post.frontmatter.keywords.includes(word));
  console.log(posts)
  
  return (

    <div className="blog-post-container m-auto max-w-6xl lg:px-20 px-8 mt-24">
      <div onClick={() => window.history.back()}>
      <BackIcon width={32} fill="#e4e2ff" className="mb-10"/>
      </div>
      <Header name={`Searched tag: #${word}`} info={`Found ${posts.length} post`}/>
      {posts.map(post => {
        return (
          <div>
            <Link to="/full_post" state={post}><Post data = {post}/></Link>
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
