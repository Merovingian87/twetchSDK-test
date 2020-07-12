import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavHeader = styled.div`
  display: flex;
  position: absolute;
  width: 375px;
  height: 86px;
  background: linear-gradient(166.71deg, #EEF0F5 4.98%, #E6E9EF 94.88%);
  box-shadow: 5px 5px 10px rgba(166, 180, 200, 0.7), -5px -5px 10px rgba(255, 255, 255, 0.8);
  border-radius: 0px;
  left: 0px;
  top: 0px;
`;

const Avatar = styled.img`
  position: absolute;
  width: 32px;
  height: 32px;
  left: 16px;
  top: 44px;
  border-radius: 50%;
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

const DropDownDiv = styled.div`
  position: absolute;
  width: 32px;
  height: 32px;
  left: 327px;
  top: 44px;

  background: linear-gradient(134.17deg, #EEF0F5 4.98%, #E6E9EF 94.88%);
  box-shadow: 4px 4px 8px rgba(166, 180, 200, 0.7), -4.8px -4.8px 8px rgba(255, 255, 255, 0.8);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DownArrow = styled.img`
  content: url('img/dropDownArrow.svg');
  width: 9.6px;
  height: 4.8px;
`;

const DownArrow2 = styled.div`
  border: 1.04px solid #686868;
  transform: matrix(0, -1, -1, 0, 0, 0);
`;

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myProfile: {},
    };
  }

  componentDidMount() {
    
  }

  render() {
    return(
      <NavHeader>
        <Avatar src={this.props.icon} alt="MyAvatarPic"/>
        <LogoOuter />
        <LogoInner />
        <LogoInner2 />
        <DropDownDiv>
          <DownArrow />
        </DropDownDiv>
      </NavHeader>
    )
  }
}

export default Nav;