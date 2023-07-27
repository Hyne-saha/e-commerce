import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

// import { useDispatch } from "react-redux";
// import { addCart } from "../redux/action";

function OrderDetails(){

        // document.getElementById("gotocartbtn").style.display = "none"; 
        const {id} = useParams();
        const [dataById, setData] = useState([]);
        // const [showSimilarProducts, setSimilarProducts] = useState([]);
        // const [btnvalue, setbtnhtml] = useState('Add to Cart');
        // const dispatch = useDispatch();
        
    
        useEffect(() => {
            const getDataById = async () => {
                const response = await fetch(`https://fakestoreapi.com/products/${id}`);
                // console.log(await response.json());
                const datas = await response.json();
                setData(datas);
                console.log(datas);
                // const getCate = await fetch(`https://fakestoreapi.com/products/category/${datas.category}`);
                // setSimilarProducts(await getCate.json());
    
            }
    
            getDataById();
        },[id])
    
        // const addToCart = (product) => {        
        //     dispatch(addCart(product));       
        //     document.getElementById("addbtn").style.display = "none";  
        //     document.getElementById("gotocartbtn").style.display = "inline"; 
    
    
            
        // }


    return (
        <div>
           <div className="container Productdetails" >
                <div className="row">
                    <div className="col-md-6">
                        <img src={dataById.image} width={60} height={400}/>
                    </div>
                    <div className="col-md-6">
                        <h4>{dataById.title}</h4>
                        <p>{dataById.description}</p>
                        <p>${dataById.price}</p>
                    </div>
                </div>
           </div>
        </div>
    )
}


export default OrderDetails;