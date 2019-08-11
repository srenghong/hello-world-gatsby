import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"

export default () => (
  <div>
    <h1>This is about page.</h1>
    <Header headerText="this is header from about page" />
    <Link to="/">Go to Home page</Link>
  </div>
)
