import React from 'react'
import styled from 'styled-components'
function HomeBanner() {
  return (
    <Container>
    </Container>
  )
}

export default HomeBanner

const Container = styled.div`
  min-height: 600px;
  background-image: url('/images/banner.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  mask-image: linear-gradient(to bottom, rgba(0,0,0, 1), rgba(0,0,0,0));
`


const Title = styled.h1`
  color: steelblue;
  font-size: 50px;
`
