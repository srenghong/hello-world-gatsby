import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"

function HelloWorld() {
  return <h1>Hello World!</h1>
}

export default () => (
  <div>
    <HelloWorld />
    <Header headerText="this is header from index page" />
    <Link to="/about">Go to About page</Link>
  </div>
)
