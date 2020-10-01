import React from 'react'
import {Link} from 'react-router-dom'
import {Navbar , Nav , NavItem , NavbarBrand , Container} from 'reactstrap'
const Heading =()=>{
	return (
		<Navbar color="dark" dark style={{borderRadius:"8px"}}>
			<Container >
				<NavbarBrand style={{color : 'white'}} href="/"><strong>My Tasks</strong></NavbarBrand>
				<Nav>
					<NavItem>
						<Link  className="btn btn-primary"to="/add"><strong>Add Task</strong></Link>
					</NavItem>
				</Nav>
			</Container>
		</Navbar>
		)
}

export default Heading