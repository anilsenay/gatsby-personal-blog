// I need this custom Link component because I need to add style to Link.
// The <a> tag has color as green so this makes all children's colors green in Link.
// I declared color as inherit so children will not have green color anymore

import React from "react"
import { Link as GatsbyLink } from "gatsby"

export default function Link({ children, ...props }) {
  return (
    <GatsbyLink style={{ color: "inherit" }} {...props}>
      {children}
    </GatsbyLink>
  )
}
