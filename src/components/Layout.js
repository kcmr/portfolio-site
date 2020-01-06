import React from "react"
import Header from "./Header"

export default ({ children }) => (
  <div>
    <Header title="Hola mundo desde Gatsby"></Header>
    {children}
  </div>
)
