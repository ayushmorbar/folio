import React from "react"
import styled from "styled-components"
import theme from "../utils/theme"
import { Layout, Nav, SEO, Typist, Header } from "../components"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Ayush Morbar - AI/ML and SWE" />
      <Header />
      <Section>
        <Nav to="/about/">
          <span>Who am I?</span>
        </Nav>
        <h1>Ayush Morbar</h1>
        <h2>
          Developer who likes building stuff with
          <br />
          <Typist />
        </h2>

        <Footer>
          <p>
            © {new Date().getFullYear()} - Ayush Morbar
            <br />
              {" "}
            <a
              href="https://www.linkedin.com/in/ayushmorbar/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>{" "}
            • {" "}
            <a
              href="https://www.instagram.com/ayushmorbar/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>{" "}
            • {" "}
            <a
              href="https://github.com/ayushmorbar/"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </p>
        </Footer>
      </Section>
    </Layout>
  )
}
export default IndexPage

// Component Styles
const Section = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  text-align: center;
  padding: 1.5rem 3rem;
  h1 {
    color: ${theme.colors.green};
  }
  h2 {
    span {
      color: white;
    }
    .Cursor {
      visibility: hidden;
    }
  }
`

const Footer = styled.footer`
  padding-top: 2rem;
  a {
    color: ${theme.colors.green};
    text-decoration-line: underline;
    text-decoration-style: dotted;
  }
`
