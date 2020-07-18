import React from "react"

const Header = ({ name, info }) => (
  <div>
    <h1 className="personal-blog-font name-text text-5xl">{name}</h1>
    <span className="personal-blog-font post-info">{info}</span>
    <hr className="pt-2"/>
  </div>
)

export default Header
