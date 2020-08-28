import React, { useState, useEffect } from 'react';
import { useFirebaseApp, useUser } from 'reactfire'
import { Container, ListGroup, Button } from 'react-bootstrap'
import ShoppingCard from './shoppingCart/ShoppingCard'
import 'firebase/firestore';

const Dashboard = () => {
	//Make A Query for collection
	const user = useUser()
	const [ sellingItems, setSellingItems ] = useState(null)
	const query = useFirebaseApp().firestore()
	const addItemforSelling = async () => {
		const id = (await query.collection("items").add({
			description: "totam at veritatis eligendi assumenda ex quia praesentium quibusdam ducimus",
			image: "https://cdn.pixabay.com/photo/2017/10/13/15/29/black-coffee-2847957_1280.jpg",
			name: "Rustic Beach Mug",
			price: 19.99,
			userId: "SbxGC0nN00Y5UsgUlb13gaWuhvr2"
		})).id;
		let oldData = await (await query.collection('users').doc(user.uid).get()).data().items;
		query.collection('users').doc(`${user.uid}`).update({
			items: [...oldData, id]
		})
	}
	useEffect( () => {
		if(!sellingItems) {
			const getAllSellingItem = async () => {
				let cartId = await (await query.collection('users').doc(user.uid).get()).data().items;
				cartId = cartId.map(async (item) => {
					const data = await (await query.collection('items').doc(item.trim()).get()).data();
					return data;
				});
				cartId = await Promise.all(cartId);
				setSellingItems(cartId)
				console.log("I ran", sellingItems, cartId)
			}
			getAllSellingItem();
		}	
	})
	
	return (
		<div>
			<h1>This dashboard</h1>
			<Container>
				<ListGroup>
					{
						sellingItems? sellingItems.map( item => <ListGroup.Item>
							<ShoppingCard 
								title = {item.name}
								price = {item.price}
								image = {item.image}
							/>
						</ListGroup.Item>)
						: ""
					}
				</ListGroup>
			</Container>
			<Container>
				<h3>Sell New Item</h3>
				<Button onClick={addItemforSelling}>Add</Button>
			</Container>
		</div>
	);
};

export default Dashboard;
