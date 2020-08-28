import React, { useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import { useUser, useFirebaseApp } from 'reactfire';
import 'firebase/firestore';
import { Redirect } from 'react-router-dom'

const useStyles = makeStyles({
	root: {
		maxWidth: 345
	},
	media: {
		height: 140
	}
});

const ItemCard = (props) => {
    const [redirect, setRedirect] = useState(false)
	const classes = useStyles();
	const user = useUser();
	const query = useFirebaseApp().firestore().collection('users');
	const addItemToCart = async (id) => {
        if(!user){
            setRedirect(true);
        } else 
		await query.doc(user.uid).update({ cart: [ ...(await (await query.doc(user.uid).get()).data().cart), id ] });
    };
    if(redirect)
        return <Redirect to="/Login" />
	return (
		<Card className={classes.root}>
			<CardActionArea>
				<CardMedia className={classes.media} image={props.image} title={props.title} />
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						{props.title}
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						Description- {props.description}
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						Seller-{props.seller}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Typography variant="body2" color="textSecondary" component="p">
					Price - ${props.price}
				</Typography>
				<Button size="small" color="primary" onClick={() => addItemToCart(props.id)}>
					<AddIcon />
				</Button>
				<Button size="small" color="primary">
					Buy Now
				</Button>
			</CardActions>
		</Card>
	);
};
export default ItemCard;
