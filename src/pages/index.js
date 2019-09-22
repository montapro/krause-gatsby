import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>My name ist Markus Krause.</p>
    <p>I'm a frontend developer from Herdecke in Germany.</p>
    <Link to="/imprint/">Imprint</Link>
  </Layout>
)

export default IndexPage
