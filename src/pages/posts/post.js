import React from "react"
import { Link, graphql } from "gatsby"

import DateIcon from "../../assets/date_icon"
import TagIcon from "../../assets/tag_icon"
import BackIcon from "../../assets/back_icon"

export default function Post({ data }) {
  const post = data.markdownRemark

  if (data === null) {
    return (
      <div className="blog-post-container m-auto max-w-6xl md:px-4 lg:px-20 px-8 mt-16 flex-column text-center">
        <h1>Page Not Found</h1>

        <Link to="/">
          <div className="inline-flex border-2 border-dashed green-border p-2">
            <BackIcon width={24} fill="#e4e2ff" className="mr-5" />
            <span>If you lost, click here to go homepage </span>
          </div>
        </Link>
      </div>
    )
  }

  return (
    <div className="blog-post-container m-auto max-w-6xl md:px-4 lg:px-20 px-8 mt-16">
      <div className="cursor-pointer" onClick={() => window.history.back()}>
        <BackIcon width={32} fill="#e4e2ff" className="mb-10" />
      </div>
      <div className="blog-post" key={post.frontmatter.title}>
        <h1 className="text-5xl">{post.frontmatter.title}</h1>
        <div className="post-info flex items-center flex-wrap leading-8 lg:leading-none ">
          <DateIcon width={20} fill="#17b06b" />
          <span className="ml-2 text-sm mt-1">
            {new Date(post.frontmatter.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
          <span className="ml-2  mt-1">·</span>
          <span className="ml-2 text-sm mt-1">
            ~{parseInt(post.wordCount.words / 200) + 1} min read
          </span>
          <span className="text-sm mt-1 flex flex-1 lg:justify-end">
            <TagIcon width={20} fill="#17b06b" />
            {post.frontmatter.keywords?.split(", ").map(keyword => (
              <Link to="/search_tag" state={{ word: keyword }} key={keyword}>
                <span className="ml-2 underline">#{keyword}</span>
              </Link>
            ))}
          </span>
        </div>
        <hr />
        <div
          className="blog-post-content mt-8"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </div>
  )
}

export const query = graphql`
  query($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        slug
        keywords
        date
      }
      excerpt
      wordCount {
        words
      }
    }
  }
`
