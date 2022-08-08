import React from "react";
import "./index.css";


export default function About(){

  const skills = [
    { label: "Languages:", options: "Python, C++, Hack (PHP), Javascript, HTML, CSS" },
    { label: "Libraries:", options: "React, Redux" },
    { label: "Testing:", options: "Jest, React Testing Library, Cypress" },
    { label: "Frameworks:", options: "Gatsby, Express" },
    { label: "Version Control:", options: "Git, Mercurial (Hg)" },
    { label: "Backend:", options: "Node JS, MongoDB, MySQL" },
    {
      label: "Others:",
      options: "TypeScript, Storybook, Salesforce Lightning",
    },
    { label: "Tech Stack:", options: "MERN STACK" },
  ];

  return (
    <>
      <section id="about" className="style-module--Section">
        <div className="style-module--ContentWrapper">
          <h3 className="style-module--Heading">About Me</h3>
          <p>
            Hey! My name is Nalin Mehra. I'm from Tampa, Florida and I am currently completing my {" "}
            <strong>Bachelors in Computer Science</strong> at the
            University of Florida. I plan on graudating in the summer of 2023 and begin 
            working as a Softwawre Engineer!
            So far, I have previously interned with:
            <ul>
                <li><strong>Meta</strong> AI Infrastructure - Privacy Enforcement</li>
                <li><strong>American Express</strong> Enterprise Data Architecture and Artificial Intelligence </li>
                <li><strong>Raytheon Technologies</strong> Radar Processing and Testing</li>
            </ul> 
          </p>
          <p>Here are some technologies I've worked with before:</p>

          <ul>
            {skills.map((item, key) => {
              return (
                <li key={key}>
                  <p>
                    <strong>{item.label}</strong> {item.options}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}