import React from 'react';
import styled from 'styled-components';

const ServiceWrapper: React.FC = ({ children }) => {
  return (
    <Layout>
      <Wrapper>
        <Container>{children}</Container>
      </Wrapper>
    </Layout>
  );
};

export default ServiceWrapper;

const Layout = styled.div`
  display: flex;
`;

const Wrapper = styled.div`
  width: 90%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: relative;
  margin: 0 auto;

  @media screen and (max-width: 1100px) {
    width: 100%;
  }
`;

const Container = styled.main`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  position: relative;

  @media screen and (max-width: 1100px) {
    margin-right: 25px;
  }

  @media screen and (max-width: 900px) {
    margin-right: 0;
  }

  @media screen and (max-width: 600px) {
    margin-right: 0;
    max-width: 100%;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
`;
