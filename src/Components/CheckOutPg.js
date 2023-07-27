import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
// import { Cart } from "./Cart";
import { useSelector } from "react-redux";
// import handleCart from "../Redux/reducer/handleCart";
import { cartZero } from "../redux/action";
import { useDispatch } from "react-redux";


export function CheckOutPg(){
    const {id} = useParams();
    const [Products, setProducts] = useState([]);
    const dispatch = useDispatch();
    const state = useSelector((state) => state.handleCart);
    console.log(state);
    let tott = 0;
    let qtyy = 0;
    state && state.map((items) => {
        return (tott += items.price * items.qty);
    })

    state && state.map((item2) => {
        return (qtyy += item2.qty);
    })

    console.log(qtyy);
    console.log(tott);

    const ProceedtoPay = () => {
        if((localStorage.getItem('email') == '') || (localStorage.getItem('email')) == undefined){
            alert('Please Login');
        }
        else{
            alert('Ordered Successfully!');
            localStorage.setItem('Orders', JSON.stringify(state));
            
            dispatch(cartZero());

        }
    }

   

    return ( 
        <div>
            <div className="container margin_top">
            <div className="row">
                <div className="col-md-6">
                <div className="container p-0">
                        <div className="card px-4">
                            <p className="h8 py-3">Payment Details</p>
                            <div className="row gx-3">
                                <div className="col-12">
                                    <div className="d-flex flex-column">
                                        <p className="text mb-1">Person Name</p>
                                        <input className="form-control mb-3" type="text" placeholder="Name" value="Barry Allen" />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="d-flex flex-column">
                                        <p className="text mb-1">Card Number</p>
                                        <input className="form-control mb-3" type="text" placeholder="1234 5678 435678" />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="d-flex flex-column">
                                        <p className="text mb-1">Address</p>
                                        <input className="form-control mb-3" type="text" placeholder="1234 5678 435678" />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="d-flex flex-column">
                                        <p className="text mb-1">Expiry</p>
                                        <input className="form-control mb-3" type="text" placeholder="MM/YYYY" />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="d-flex flex-column">
                                        <p className="text mb-1">CVV/CVC</p>
                                        <input className="form-control mb-3 pt-2 " type="password" placeholder="***" />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="btn btn-primary mb-3">
                                        <span className="ps-3" disabled>Pay ${Math.round(tott)}</span>
                                        <span className="fas fa-arrow-right"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                <div className="col-md-4">
                        <div className="card" >
                            <div className="card-body">
                                <h5 className="card-title">Summary</h5>
                                <p className="card-text">Items: <span>{qtyy}</span></p>
                                <p className="cart-text">Total: <span>${Math.round(tott)}</span></p>
                                {/* <Link to={"/ProductDetails/"+data.id}> */}
                                    <button type="button" className="btn btn-primary btnn" onClick={() => ProceedtoPay()}> Proceed to Pay</button>
                                {/* </Link> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

