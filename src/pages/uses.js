import React from "react"
import { Layout, Header, Sticky, SEO, Content } from "../components"

const UsesPage = () => (
  <Layout>
    <SEO title="Uses - the stuff I use everyday" />
    <Header />
    <Content>
      <h1>
        <span>/USES</span>
        <br />
        Stuff I use on a daily basis.
      </h1>
      <h3>Hardware</h3>
      <ul>
        <li>ASUS TUF-15</li>
        <li>BOAT Airdopes 131</li>
      </ul>
      <h3>Development</h3>
      <ul>
        <li>
          VSCode is my preferred IDE. I do dabble around in Flutterflow and
          IDX by Google when working on some projects.
        </li>
        <li>
          GitLab or GitHub for repos. Terminal or GitKraken for working with
          Git.
        </li>
        <li>Figma for the occasional UI design</li>
        <li>Postman for testing REST API endpoints</li>
        <li>Discord for communication</li>
      </ul>
    </Content>
    <Sticky />
  </Layout>
)

export default UsesPage
