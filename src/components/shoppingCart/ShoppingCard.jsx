import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import Hooks from '../hooks/Hooks';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		maxWidth: 300
	},

	content: {
		flex: '1 0 auto'
	},
	cover: {
		width: 151
	},
	controls: {
		display: 'flex',
		alignItems: 'center',
		paddingLeft: theme.spacing(1),
		paddingBottom: theme.spacing(1)
	},
	playIcon: {
		height: 38,
		width: 38
	}
}));

export default function MediaControlCard({ title, price, image }) {
	const classes = useStyles();
	return (
		<Card className={classes.root}>
			<CardContent className={classes.content}>
				<Typography component="p" variant="p">
					{title}
				</Typography>
				<Typography variant="subtitle1" color="textSecondary">
					{price}
				</Typography>
			</CardContent>
			<CardMedia className={classes.cover} image={image} title={title} />
		</Card>
	);
}
