import React from 'react'
import styled from 'styled-components'

let options = [];

function CartItem(props) {
	console.log(props);
	const {name, image, price, quantity} = props.cartItem;
	let options = [];
	for (let i = 1; i < 21; i += 1) {
		options.push(<option key={i} value={i}>Qty: {i}</option>)
	}
	return (
		<Container>
			<CartItemImage>
				<img src={image} alt="Iphone" />
			</CartItemImage>

			<CartItemInfo>
				<CartItemTop>
					<h2>{name}</h2>
				</CartItemTop>
				<CartItemBottom>
					<CartItemQuantityContainer>
						<select value={quantity}>
							{options}
						</select>
					</CartItemQuantityContainer>
					<CartItemDeleteContainer>Delete</CartItemDeleteContainer>
				</CartItemBottom>
			</CartItemInfo>

			<CartItemPrice>${price}</CartItemPrice>
		</Container>
	)
}

export default CartItem

const Container = styled.div`
	display: flex;
	padding: 20px 0;
	border-top: 3px solid #ddd;
`

const CartItemImage = styled.div`
	flex: 0.35;
	margin-right: 20px;
	max-width: 250px;

	img {
		width: 100%;
		max-height: 300px;
	}
`

const CartItemInfo = styled.div`
	flex: 0.45;
`

const CartItemTop = styled.div`
	h2 {
		margin-bottom: 10px;
		color: #007185;
		font-size: 22px;
	}
`

const CartItemBottom = styled.div`
	display: flex;
	align-items: center;
`

const CartItemQuantityContainer = styled.div`
	padding-right: 10px;
	margin-right: 10px;
	border-right: 1px solid #ddd;

	select {
		border-radius: 7px;
		background-color: #f0f2f2;
		padding: 7px 5px;
		border: none;
		box-shadow: 0 1px 5px rgba(0,0,0, 0.3);
		cursor: pointer;
		transition: box-shadow 250ms linear;

		:hover,
		:focus {
			box-shadow: 0 1px 5px rgba(0,0,0, 0.5);
		}
	}
`

const CartItemDeleteContainer = styled.div`
	color: #007185;
	cursor: pointer;

	:hover {
		text-decoration: underline;
	}
`

const CartItemPrice = styled.div`
	flex: 0.2;
	font-size: 18px;
	font-weight: 600;
	text-align: center;
`