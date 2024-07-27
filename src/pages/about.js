import React from "react"
import { Layout, Header, Sticky, SEO, Content } from "../components"

const AboutPage = () => (
  <Layout>
    <SEO title="A (very) little bit about me" />
    <Header />
    <Content>
      <h1>
        Hi!
        <br />
        {`I'm`} an experienced
        <br />
        <span>AI/ML Engineer + SWE </span>
        <br />
        Based in Gwalior,
        <br />
        <span>India</span>.
      </h1>
      <h3>
              I am a pre-final year undergraduate student with immense experience in 
              <span>AI/ML engineering</span> and <span>software development</span>. 
              I have been working on various projects and have developing a strong 
              foundation in both <span>frontend</span> and <span>backend</span> technologies. 
              Besides that, I am also the founder of <span>Offbeats</span>, a youth-led 
              community and network creating experience and culture for students across India.
      </h3>
    </Content>
    <Sticky />
  </Layout>
)

export default AboutPage
