import React from "react";
import { NavLink } from "react-router-dom";
import ProductList from "./Components/ProductList";
import { useSelector } from "react-redux";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import { Checkbox } from 'semantic-ui-react'
// import logo1 from './images/logo1.png';


export default function Menu() {
    const state = useSelector(state => state.handleCart);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [checkbox, setCheckBox] = useState(false);
    // let alert_msg = '';
    // let alert_txt = '';
    const [alert_msg, setAlertMsg] = useState('');
    const [alert_txt, setAlertTxt] = useState('');
    const [display_alert, setDisplayAlert] = useState('display_none');
    // let display_alert = 'display_none';

    console.log(checkbox);

    const submitLogin = () => {
        console.log(email);
        if((email == '') || (email == undefined)){
            setAlertMsg('danger');
            setAlertTxt('Please enter your email');
            setDisplayAlert('display_block');
            return;
        }
        if((email !== undefined) || (email != '')){
            let lastAtPos = email.lastIndexOf('@');
            let lastDotPos = email.lastIndexOf('.');
            if((lastAtPos < 1) || (lastDotPos < lastAtPos)){
                setDisplayAlert('display_block');
                setAlertMsg('danger');
            setAlertTxt('Please enter valid email');
            return;
            }          

        }
        if((password == '') || (password == undefined)){
            setDisplayAlert('display_block');
            console.log('empty');
            setAlertMsg('danger');
            setAlertTxt('Please enter your password');
            return;
        }

        console.log(checkbox);
        localStorage.setItem('email', email);
        localStorage.setItem('pass', password);
        localStorage.setItem('checkbox', checkbox);
        setDisplayAlert('display_block');
        setAlertMsg('success');
        setAlertTxt('Logged In Successfully');
        setShow(false);
        setDisplayAlert('display_none');

    }
    return ( <div>
        <nav className="navbar navbar-expand-sm bg-light navbar-light menuComponent">
        
        <a className="navbar-brand" href="#">
            <img src="../images/logo1.png" alt="logo" width={10}/>
        </a>        
        
        <ul className="navbar-nav justify-content-center">
            <NavLink to='/' className="nav-item">
                <a className="nav-link" href="home">Home</a>
            </NavLink>

            <NavLink to='/ProductList' className="nav-item">
                <a className="nav-link" href="ProductList">Products</a>
            </NavLink>

            <NavLink to='/Orders' className="nav-item">
                <a className="nav-link" href="Orders">Orders</a>
            </NavLink>

            <NavLink to='/Contact' className="nav-item">
                <a className="nav-link" href="Contact">Contact</a>
            </NavLink>
        </ul>

        <ul className="navbar-nav justify-content-center menuBtns">            

            {/* <NavLink to='/login'> */}
                <button type="button" className="btn btn-primary btn-md"  onClick={handleShow}>Login</button>
            {/* </NavLink> */}

            <NavLink to='/Cart'>
                <button type="button" className="btn btn-primary btn-md">Cart {state.length}</button>
            </NavLink>

        </ul>
        </nav>


{/* login modal */}
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
            </Modal.Header>
        <Modal.Body>
            <form className="LoginForm">
            <div className={display_alert+" alert alert-"+alert_msg} role="alert" >{alert_txt}
            </div>
                <div className="form-group">
                    <label for="login_email">Email address</label>
                    <input type="email" className="form-control" id="login_email" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label for="login_pass">Password</label>
                    <input type="password" className="form-control" id="login_pass" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="login_check" onChange={(e) => setCheckBox(!checkbox)}/>
                    {/* <Checkbox></Checkbox> */}
                    <label className="form-check-label" for="login_check">Check me out</label>
                </div>
                {/* <button type="submit" class="btn btn-primary">Submit</button> */}
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => submitLogin()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    )
}