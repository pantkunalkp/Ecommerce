import React, { useState, useEffect } from 'react';
import ItemCard from '../components/itemCard/ItemCard';
import { useFirebaseApp } from 'reactfire';
import 'firebase/firestore';
import Loading from '../components/Loading.jsx';
import { Container, Col } from 'react-bootstrap';
const Explore = () => {
	const [ items, setItems ] = useState(null);
	const [ id, setId ] = useState(null);
    const query = useFirebaseApp().firestore().collection('items');
    
	useEffect(() => {
		if (!items) {
			const getItems = async () => {
				let it = await (await query.get()).docs.map(async (item) => await item.id);
				it = await Promise.all(it);
				setId(it);
				it = it.map(async (item) => await (await query.doc(item).get()).data());
				it = await Promise.all(it);
				setItems(it);
			};
			getItems();
		}
    });
    
	if (items === null || id === null) {
		return <Loading />;
	} else
		return (
			<Container style={{ display: 'flex', flexWrap: 'wrap' }}>
				{items.map((item, index) => (
					<Col xs={12} sm={6} md={4} className="card-item">
						<ItemCard
							title={item.name}
							price={item.price}
							image={item.image}
							seller={item.userId}
							id={id[index]}
							description={item.description}
						/>
					</Col>
				))}
			</Container>
		);
};

export default Explore;
