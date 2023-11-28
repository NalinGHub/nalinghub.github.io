import React from "react";
import {
  AboutSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";
import About from "./About";

export default function IndexPage() {
  return (
    <>
      <Seo title="Nalin Mehra Personal Website" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        {/* <About/> */}
        <AboutSection sectionId="about" heading="About Me!" />
        {/* <InterestsSection sectionId="details" heading="Details" /> */}
        {/* <ProjectsSection sectionId="projects" heading="Projects!" /> */}
        <ContactSection sectionId="contact" heading="Feel free to reach out!" />
      </Page>
    </>
  );
}
