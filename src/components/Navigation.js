import React from "react";
import { Nav, Navbar, Container, Button, NavDropdown } from "react-bootstrap";
import { useLogoutUserMutation } from "../services/appApi";
import { useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import logo from "../assets/logo.png";
import "./navbar.css";
//import "/navbar.css"
function Navigation() {
    const user = useSelector((state) => state.user);
    const [logoutUser] = useLogoutUserMutation();
    async function handleLogout(e) {
        e.preventDefault();
        await logoutUser(user);
        // redirect to home page
        window.location.replace("/");
    }
    return (
        <Navbar bg="dark" expand="lg">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand>
                        <img src={logo} style={{ width: 50, height: 50 }} />
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        {!user && (
                            
                            <btn className="login">
                            <LinkContainer to="/login">
                                <Nav.Link>Login</Nav.Link>
                            </LinkContainer>
                            </btn>
                           
                        )}
                        
                        {user && (
                            <NavDropdown
                                title={
                                    <>
                                        <img src='https://d2v9ipibika81v.cloudfront.net/uploads/sites/210/Profile-Icon.png' style={{ width: 30, height: 30, marginRight: 10, objectFit: "cover", borderRadius: "50%" }} />
                                        {user.name}
                                    </>
                                }
                                id="nav-dropdown"
                            >
                                <NavDropdown.Item href="#action/3.1">👤 My Profile</NavDropdown.Item>
                                
                                <NavDropdown.Item href="#action/3.3">⚙️ Settings</NavDropdown.Item>

                                <NavDropdown.Item>
                                    
                                </NavDropdown.Item>
                            </NavDropdown>
                            
                        )}
                        <Button variant="danger" onClick={handleLogout}>
                                        Logout
                                    </Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;
