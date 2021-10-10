import React from 'react';

import SkillContainer from "../components/Skills/SkillContainer";
import BlogContainer from "../components/Blog/BlogContainer";
import IntermediaryContainer from "../components/IntermediaryContainer";
import EducationContainer from "../components/Education/EducationContainer";
import MainContainer from "../components/MainContainer";
import AboutContainer from "../components/AboutContainer";
import ContactContainer from "../components/Contact/ContactContainer";
import FooterContainer from "../components/FooterContainer";

function Home(props) {
  return (
    <>
      <MainContainer />
      <EducationContainer />
      <IntermediaryContainer />
      <BlogContainer />
      <SkillContainer />
      <AboutContainer />
      <ContactContainer />
      <FooterContainer />
    </>
  );
}

export default Home;
