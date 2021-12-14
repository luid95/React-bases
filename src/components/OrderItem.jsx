import React from 'react';
import '@styles/OrderItem.scss';
import close from '@icons/icon_close.png'

const OrderItem = ({ product }) => {
	console.log('product...');
	console.log(product);
	return (
		<div className="OrderItem">
			<figure>
				<img src={product.images} alt={product.title} />
			</figure>
			<p>{product.title}</p>
			<p>${product.price}</p>
			<img src={close} alt="close" />
		</div>
	);
}

export default OrderItem;