import React from 'react'
import styled from 'styled-components'

function Product(props) {
  const { name, price, rating, image } = props.product;
  return (
    <Container>
      <Title>{name}</Title>
      <Price>${price}</Price>
      <Rating>{'★'.repeat(rating)}</Rating>
      <Image src={image}/>
      <AddToCartButton>
        Add to Cart
      </AddToCartButton>
    </Container>
  )
}

export default Product

const Container = styled.div`
  background-color: white;
  opacity: 1;
  position: relative;
  max-height: 400px;
  flex: 1;
  min-width: 300px;
  padding: 20px;
  border-radius: 5px;
`

const Title = styled.span`
  display: block;
  margin-bottom: 10px;
`

const Price = styled.span`
  font-weight: 500;
`

const Rating = styled.div`
  color: orange;
  font-size: 20px;
  margin-bottom: 10px;
`

const Image = styled.img`
  display: block;
  width: 200px;
  height: 150px;
  margin: 0 auto;
  object-fit: contain;
  margin-bottom: 20px;
`

const AddToCartButton = styled.button`
  display: block;
  margin: 0 auto;
  width: 120px;
  background-color: #f8c14b;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 10px 0;
  transition: opacity 250ms linear;

  :hover {
    opacity: 0.8;
  }
`
