import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  
  return (

    <div className="blog-post-container">
      <Link to="/full_post"><button className="p-4 m-4 border-2 border-radius">Go Posts</button></Link>
    </div>
  )
}

export default IndexPage
