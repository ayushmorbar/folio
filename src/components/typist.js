import React from "react"
import Typist from "react-typist"

const things_I_like = [
  "Machine Learning",
  "Deep Learning",
  "Data Science",
  "Artificial Intelligence",
  "Software Engineering",
  "Frontend Development",
  "Backend Development",
  "Open Source",
  "Community Building",
]

const TypistComponent = () => (
  <Typist>
    <Typist.Delay ms={600} />
    {things_I_like.map((thing, index) => {
      return (
        <strong key={thing}>
          {thing}
          <Typist.Backspace count={things_I_like[index].length} delay={1000} />
        </strong>
      )
    })}
    <strong>Javascript.</strong>
  </Typist>
)

TypistComponent.propTypes = {}

export { TypistComponent as Typist }
