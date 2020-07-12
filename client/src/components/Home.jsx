import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  width: 375px;
  display: flex;
  flex-direction: column;
  background: linear-gradient(104.06deg, #E9EDF0 0.61%, #E9EDF0 100%);
  overflow: hidden; 
`;

const Header = styled.div`
  display: flex;
  position: absolute;
  width: 375px;
  height: 86px;
  background: linear-gradient(166.71deg, #EEF0F5 4.98%, #E6E9EF 94.88%);
  box-shadow: 5px 5px 10px rgba(166, 180, 200, 0.7), -5px -5px 10px rgba(255, 255, 255, 0.8);
  border-radius: 0px;
  left: 0px;
  top: 0px;
  /* justify-content: center;
  align-items: flex-end; */
`;

const LogoOuter = styled.img`
  content: url('img/basedLogo.svg');
  position: absolute;
  left: 164px;
  right: 164.77px;
  top: 44px;
  bottom: 10px;
`;

const LogoInner = styled(LogoOuter)`
  content: url('img/basedLogo2.svg');
  left: 174.37px;
  right: 174.38px;
  top: 50.91px;
  bottom: 11.58px;
`;

const LogoInner2 = styled(LogoOuter)`
  content: url('img/basedLogo3.svg');
  left: 173.7px;
  right: 173.79px;
  top: 47.5px;
  bottom: 21.98px;
`;

const BrandWrapper = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  position: absolute;
  width: 81px;
  height: 36px;
  left: 147px;
  right: 147px;
  top: 129px;
  bottom: 647px;
`;

const Brand = styled.h1`
  /* position: absolute; */
  font-family: 'Lato', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 36px;
  color: #085AF6;
  text-shadow: 2px 2px 4px rgba(166, 180, 200, 0.7), -2px -2px 7px rgba(255, 255, 255, 0.8);
`;

const SloganWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 286px;
  height: 25px;
  left: 44px;
  right: 45px;
  top: 180px;
  bottom: 607px;
`;

const Slogan = styled.h2`
  align-self: center;
  font-family: 'Arial';
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  margin: 0 !important;
  color: #000000;
`;

const ButtonDiv = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  background: #E8EBF1;
  border-radius: 6px;
  width: 222px;
  height: 32px;
  top: 220px;
  left: 76px;
  right: 77px;
  bottom: 560;
  box-shadow: 5px 5px 10px rgba(166, 180, 200, 0.7), -5px -5px 10px rgba(255, 255, 255, 0.8);
  /* &:hover {
    background-color: #d0d3d8;
  } */
`;

const ButtonDiv2 = styled(ButtonDiv)`
  top: 264px;
  bottom: 560;
`;

const ButtonText = styled(Slogan)`
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #085AF6;
`;

const Home = () => {
  return(
    <Wrapper>

      <Header>
        <LogoOuter />
        <LogoInner />
        <LogoInner2 />
      </Header>

      <BrandWrapper>
        <Brand>Based</Brand>
      </BrandWrapper>

      <SloganWrapper>
        <Slogan>Be a part of the future.</Slogan>
      </SloganWrapper>

      <Link to="/feed">
        <ButtonDiv>
          <ButtonText>Sign in with RelayX</ButtonText>
        </ButtonDiv>
      </Link>

      <Link to="/feed">
        <ButtonDiv2>
          <ButtonText>Sign in with Money Button</ButtonText>
        </ButtonDiv2>
      </Link>  

    </Wrapper>
  )
}

export default Home;
