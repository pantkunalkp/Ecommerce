import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom' 

const LoggedOutHeader = () => {
	return (
		<Navbar bg="light" className="header"  expand="lg">
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<NavLink to="/">Explore</NavLink>
				</Nav>
				<Form inline>
					<FormControl type="text" placeholder="Search" className="mr-sm-2" />
					<Button variant="outline-success">
						
                        <NavLink to="/Login">Login</NavLink>
					</Button>
					<Button variant="outline-success">
                        <NavLink to="/Signup">Sign Up</NavLink>
					</Button>
				</Form>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default LoggedOutHeader;
