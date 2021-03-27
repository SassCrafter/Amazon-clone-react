import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import RoomIcon from '@material-ui/icons/Room';

function Header() {
  return (
    <Container>
      <HeaderLogo>
        <Link to="/">
          <img src='/images/logo.png'/>
        </Link>
      </HeaderLogo>

      <HeaderOptionAddress>
        <RoomIcon />
        <HeaderOption>
          <OptionLineOne>Hello</OptionLineOne>
          <OptionLineTwo>Select your address</OptionLineTwo>
        </HeaderOption>
      </HeaderOptionAddress>

      <HeaderSearch>
        <HeaderSearchInput type='text'/>
        <HeaderSearchIconContainer>
          <SearchIcon />
        </HeaderSearchIconContainer>
      </HeaderSearch>

      <HeaderNavItems>

        <HeaderOption>
          <OptionLineOne>Hello, Dima</OptionLineOne>
          <OptionLineTwo>Account & Lists</OptionLineTwo>
        </HeaderOption>

        <HeaderOption>
          <OptionLineOne>Returns</OptionLineOne>
          <OptionLineTwo>& Orders</OptionLineTwo>
        </HeaderOption>


        <HeaderOptionCart>
          <Link to='/pages/Cart'>
            <HeaderOptionCartIcon>
              <ShoppingBasketIcon />
            </HeaderOptionCartIcon>
            <HeaderOptionCartCount>4</HeaderOptionCartCount>
          </Link>
        </HeaderOptionCart>

      </HeaderNavItems>
    </Container>
  )
}

export default Header;

const Container = styled.div`
  padding: 0 10px;
  height: 60px;
  background-color: #0f1111;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
`

const HeaderLogo = styled.div`
  ${'' /* margin-left: 11px; */}
  img {
    width: 100px;
  }
`

const HeaderOptionAddress = styled.div`
  padding-left: 5px;
  display: flex;
  align-items: center;
`


const OptionLineOne = styled.div`

`

const OptionLineTwo = styled.div`
  font-weight: 700;
`

const HeaderSearch = styled.div`
  display: flex;
  flex-grow: 1;
  height: 40px;
  margin-left: 5px;
  border-radius: 5px;
  overflow: hidden;

  :focus-within {
    box-shadow:  0 0 5px 2px #f90;
  }
`

const HeaderSearchInput = styled.input`
  outline: none;
  border: 0;
  border-right: 1px solid #000;
  height: 100%;
  flex-grow: 1;
`

const HeaderSearchIconContainer = styled.div`
  width: 45px;
  height: 100%;
  color: #000;
  background-color: #febd59;
  display: flex;
  align-items: center;
  justify-content: center;
`

const HeaderNavItems = styled.div`
  display: flex;
`

const HeaderOption = styled.div`
  padding: 10px 9px;
`

const HeaderOptionCart = styled.div`
  a {
    height: 100%;
    display: flex;
    align-items: center;
    color: inherit;
    text-decoration: none;
  }
`

const HeaderOptionCartIcon = styled.div``

const HeaderOptionCartCount = styled.div`
  padding-left: 5px;
`
