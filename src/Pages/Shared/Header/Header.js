import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar,  } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo.png'

const Header = () => {
    const [user] = useAuthState(auth);
    // console.log(user);

    const handleSignOut = () =>{
        signOut(auth);
    }
    //  

    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img height={50} src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            
                            <Nav.Link as={Link} to={'/home'}  >Home</Nav.Link>

                            {
                                user && <>
                                <Nav.Link as={Link} to="addservice">Add</Nav.Link>
                                <Nav.Link as={Link} to="/manage">Manage</Nav.Link>
                                </>
                            }
                        </Nav>
                        <Nav>
                        <Nav.Link as={Link} to={'/blog'}  >blog</Nav.Link>
                    <Nav.Link as={Link} to="/about">About</Nav.Link>

                            {
                                user ?
                            
                                <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           <img   width={30} className="rounded-pill" src={user.photoURL} alt="" />
     
            </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          <Nav.Link className='text-danger' as={Link} to="/orders">  <i class="fas fa-heart text-danger"></i> loved </Nav.Link>

            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li>< button className='btn bg-danger text-white btn-link  text-decoration-none' onClick={handleSignOut}>Log out</button></li>
          </ul>
        </li>
       
                                :
                                <Nav.Link as={Link} to="login">
                                Login
                            </Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;