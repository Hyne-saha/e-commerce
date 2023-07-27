import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { addCart, delItem } from "../redux/action";
import { Link } from "react-router-dom";
// import {  } from "../redux/action";

export function Cart(){
    
    const state = useSelector((state) => state.handleCart);
    console.log(state);
    const dispatch = useDispatch();
    let price = 0;
    let totalItems = 0;
    let totalPrice = 0;
    const removeItem = (item) => {
        dispatch(delItem(item));
        console.log('del');
    }
    const addItem = (item) => {
        console.log(item);
        dispatch(addCart(item));
    }

    if(state != ''){

   return(
        <div className="container">
            
        <div className="row">
        <div className="col-md-6">
        <div className="shopping-cart">
            {/* <!-- Title --> */}
            <div className="title">
                Shopping Bag
            </div>
            
            {/* <!-- Product #1 --> */}
            {state.map((item) => {
                price = item.qty * item.price;
                totalPrice += item.qty * item.price;
                totalItems += item.qty; 
                return(                    
                <div className="item">
                <div className="buttons">
                {/* <span className="delete-btn">x</span> */}
                <span className="like-btn"></span>
                </div>
            
                <div className="image">
                <img src={item.image} alt="" height={50}/>
                </div>
            
                <div className="description">
                <span>{item.title}</span>
                <span>{item.category}</span>
                {/* <span>White</span> */}
                </div>
            
                <div className="quantity">
                <button className="plus-btn" type="button" name="button" onClick={() => addItem(item)}>
                    +
                </button>
                <input type="text" name="name" value={item.qty} />
                <button className="minus-btn" type="button" name="button" onClick={() => removeItem(item)}>
                    -
                </button>
                </div>
            
                <div className="total-price">${Math.round(price)}</div>
            </div>
                )
            })}
            
            
            
            </div>            
            </div>

            <div className="col-md-4" style={{marginTop:80}}>
                        <div className="card" >
                            <div className="card-body">
                                <h5 className="card-title">Summary</h5>
                                <p className="card-text">Items: <span>{totalItems}</span></p>
                                <p className="cart-text">Total: <span>${Math.round(totalPrice)}</span></p>
                                <Link to={"/CheckOutPg/"}>
                                    <button type="button" className="btn btn-primary btnn"> Proceed to Pay</button>
                                </Link>
                            </div>
                        </div>
                    </div> 
            </div>


            </div>
    )

}
else{
    return(
    <div className="container">
        <h3 className="text-center" style={{marginTop:50}}>Your shopping cart is empty!</h3>
        <div className="col-md-12 text-center">
        <Link to={"/ProductList"}>
            <a href="/ProductList" className="text-center">Continue Shopping</a>
        </Link>
        </div>
    </div>
    )
}
        
}

