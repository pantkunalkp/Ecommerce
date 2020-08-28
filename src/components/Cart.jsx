import React, { useState } from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useFirebaseApp } from 'reactfire';
import Skeleton from '@material-ui/lab/Skeleton';
import ShoppingCard from '../components/shoppingCart/ShoppingCard'
const Cart = ({ user }) => {
	const query = useFirebaseApp().firestore();
	const [ anchorEl, setAnchorEl ] = useState(null);
    const [ cartData, setCartData ] = useState(null);
    
	const handleClick = async (event) => {
		setAnchorEl(event.currentTarget);
		console.log(user.uid)
		let cartId = await (await query.collection('users').doc(user.uid).get()).data().cart;
		cartId = cartId.map(async (item) => {
			const data = await (await query.collection('items').doc(item.trim()).get()).data();
			return data;
		});
		cartId = await Promise.all(cartId);
		setCartData(cartId);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};
	return (
		<>
			<ShoppingCartIcon onClick={handleClick} style={{color: "#52b344", marginTop: 5}} />
			<Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
				{cartData ? (
					cartData.map((item) => <MenuItem onClick={handleClose}><ShoppingCard 
						title = {item.name}
						price = {item.price}
						image = {item.image}
					/></MenuItem>)
				) : (
					<div style={{ width: 300 }}>
						<Skeleton />
                        <Skeleton />
                        <Skeleton />
					</div>
				)}
			</Menu>
		</>
	);
};

export default Cart;
