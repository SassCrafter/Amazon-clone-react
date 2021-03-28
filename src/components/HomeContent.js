import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Product from '../components/Product';
import { db } from '../Firebase'



function HomeContent() {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    db.collection('products').onSnapshot((snapshot) => {
      let tempProducts = [];
      tempProducts = snapshot.docs.map((doc) => {
        return ({
          id: doc.id,
          product: doc.data()
        })
      });
      setProducts(tempProducts);
    });
  }

  useEffect(() => {
    getProducts();
  }, [])
  return (
    <Container>
      {
        products.map((productData) => {
          return <Product key={productData.id} id={productData.id} product={productData.product} />
        })
      }
    </Container>
  )
}

export default HomeContent

const Container = styled.div`
  padding: 0 20px 20px;
  margin-top: -350px;
  display: flex;
  flex-wrap: wrap;
  ${'' /* flex-direction: column; */}
  justify-content: center;
  gap: 20px;
  `

const Column = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;

`
