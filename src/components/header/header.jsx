import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Button
} from 'reactstrap';
import ModalExample from '../modal/modal';
import {
    setLocalStorage,
    getLocalStorage,
} from '../../action/index';

class Header extends Component {
    constructor(props) {
        super(props); {
            this.state = {
                
            }
        }
    }

    componentDidMount() {
       
    }



    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">react-Trello</NavbarBrand>
                    <NavbarToggler />
                    <Collapse navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <span>{this.props.actualUser.name}</span>

                                <Button color="primary" onClick={this.props.logOff} >Выйти</Button>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
                <ModalExample isOpen={this.props.isOpen} signIn={this.props.signIn} />
            </div>
        );
    }
}

export default Header;