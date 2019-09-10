import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Imprint</h1>
    <p>Markus Krause</p>
    <p>Contact: <a href="mailto:markus@krause.rocks">markus@krause.rocks</a></p>
    <p>Twitter: <a href="https://twitter.com/montapro" target="_blank">@montapro</a></p>
    <p>GitHub: <a href="https://github.com/montapro" target="_blank">@montapro</a></p>
  </Layout>
)

export default SecondPage
