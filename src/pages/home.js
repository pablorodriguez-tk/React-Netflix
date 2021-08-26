import React from 'react';
import FaqsContainer from '../containers/faqs';
import FooterContainer from '../containers/footer';
import JumbotronContainer from '../containers/jumbotron';

const home = () => {
  return (
    <>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
};

export default home;
