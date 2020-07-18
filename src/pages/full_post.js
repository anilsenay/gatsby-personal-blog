import React from 'react'
import { Link } from "gatsby"

import DateIcon from '../assets/date_icon'
import TagIcon from '../assets/tag_icon';
import BackIcon from '../assets/back_icon';

export default function FullPost({location}) {

    const data = location.state;

    if(data === null){
        return (
            <div className="blog-post-container m-auto max-w-6xl md:px-4 lg:px-20 px-8 mt-16 flex-column text-center">
                <h1>Page Not Found</h1>
                
                <Link to="/">
                    <div className="inline-flex border-2 border-dashed green-border p-2">
                        <BackIcon width={24} fill="#e4e2ff" className="mr-5"/> 
                        <span>If you lost, click here to go homepage </span>
                    </div>
                </Link>
            </div>

          )
    }

    return (
  
      <div className="blog-post-container m-auto max-w-6xl md:px-4 lg:px-20 px-8 mt-16">
        <Link to="/"><BackIcon width={32} fill="#e4e2ff" className="mb-10"/></Link>
        <div className="blog-post" key={data.frontmatter.title}>
            <h1 className="text-5xl">{data.frontmatter.title}</h1>
            <div className="post-info flex items-center flex-wrap leading-8 lg:leading-none "> 
                <DateIcon width={20} fill="#17b06b"/>
                <span className="ml-2 text-sm mt-1">{new Date(data.frontmatter.date).toLocaleDateString(window.navigator.language.toString() || "en-US", { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                <span className="ml-2  mt-1">·</span>
                <span className="ml-2 text-sm mt-1">~{parseInt(data.wordCount.words / 200) + 1} min read</span>
                <span className="text-sm mt-1 flex flex-1 lg:justify-end">
                    <TagIcon width={20} fill="#17b06b"/>
                    {
                        data.frontmatter.keywords?.split(", ").map(keyword => <Link to="/search_tag" state={{word: keyword}} ><a className="ml-2 underline">#{keyword}</a></Link>)
                    }
                </span>
            </div>
            <hr/>
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: data.html }}
            />
        </div>

  
      </div>
    )
}

