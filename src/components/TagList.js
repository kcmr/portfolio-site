import React from "react"

export default ({ tags }) => (
  <ul>
    {tags.map((tag, index) => (
      <li key={index}>{tag}</li>
    ))}
  </ul>
)
