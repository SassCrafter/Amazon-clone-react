import React from 'react'
import styled from 'styled-components'
import HomeBanner from '../components/HomeBanner';
import HomeContent from '../components/HomeContent';


function Home() {

  return (
    <Container>
      <HomeBanner />
      <HomeContent/>
    </Container>
  )
}

export default Home


const Container = styled.div`
  max-width: 1500px;
  margin: 0 auto;
`
