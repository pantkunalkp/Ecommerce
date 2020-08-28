import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom' 
import Cart from '../Cart.jsx';

const LoggedInHeader = ({ user, auth }) => {
	return (
		<Navbar bg="light" className="header" expand="lg">
			<Navbar.Brand to="/Dashboard">{user.displayName}</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<NavLink to="/dashboard">Dashboard</NavLink>
					<NavLink to="/">Explore</NavLink>
				</Nav>
				<Form inline>
					<FormControl type="text" placeholder="Search" className="mr-sm-2" />
				</Form>
				<Nav>
					<Cart user={user} />
					<NavLink to="/selling">Want to Sell Something? </NavLink>
					<NavLink to="/settings">Setting</NavLink>
					<Button
						variant="outline-success"
						onClick={() => {
							auth.signOut();
						}}
					>
						Logout
					</Button>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default LoggedInHeader;
