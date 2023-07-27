import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function ProductList(){
    const [APIDatas, setData] = useState([]);
    const [FilteredProducts, setFilter] = useState([]);
    const [CategoriesList, setCategories]  = useState([]);
    const [loading, setLoading] = useState(false);
    

    console.log('here');

    const dispatch = useDispatch();

    const addToCart = (product) => {
        // alert(); 
        console.log('click');

        dispatch(addCart(product));
    }

    // const clickToCart = () => {
    //     console.log('clickToCart');
    // }
    
    useEffect(() => {
    const  getData = () => {
        console.log('hereee');
        axios.get(`https://fakestoreapi.com/products`).then((res) => {
            console.log(res.data);
            setData(res.data);
            setFilter(res.data);
            setLoading(true);

        })
        // const response = await fetch('https://fakestoreapi.com/products');
        // // console.log(response.json()); 
        // setData(response.json());
    }

    getData();

    const getCategories = async () => {
       const categories_res = await fetch('https://fakestoreapi.com/products/categories');
        // console.log(await categories_res.json());
       setCategories(await categories_res.json());
    //    axios.get('https://fakestoreapi.com/products/categories').then((res) => {
    //     console.log(res.data);
    //     setCategories(res.data);
    //    })

    }

    getCategories();

    
},[]);

const filterProduct = (c) => {
    const updatedList = APIDatas.filter((item) => item.category === c);
    console.log(updatedList);
    setFilter(updatedList);
}

if(loading){
    return (
        <div>
            <div className="container text-center categories">
                <button type="button" className="btn btn-primary btn-sm" onClick={() => setFilter(APIDatas)}>All</button>
                {CategoriesList.map((c) => {
                   return(
                    <button type="button"  className="btn btn-primary btn-sm" onClick={() => filterProduct(c)}>{c}</button>
                   );
                })}
            </div>   

            
            <div className="container productList">
                <div className="row">
            {/* <h1>This is product page</h1> */}
            
            {FilteredProducts.map((data) => {

                return (
                    <div className="col-md-4">
                        <div className="card" >
                        <Link to={"/ProductDetails/"+data.id} style={{textAlign : 'center'}}>
                            <img className="card-img-top" src={data.image} alt="Card image cap" height={300}/>
                            </Link>
                            <div className="card-body">
                                <h5 className="card-title">{data.title.substring(0,15)}...</h5>
                                <p className="card-text">{data.description.substring(0,70)}...</p>
                                {/* <Link to={"/ProductDetails/"+data.id}> */}
                                    <button type="button" className="btn btn-primary btnn" onClick={() => addToCart(data)}> Add Cart</button>
                                {/* </Link> */}
                                <Link to={"/CheckOutPg/"+data.id}>
                                <button className="btn bg-light" onClick={() => addToCart(data)}>Buy Now</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                )
            })}
            </div>
            </div>

        </div>
    )
    }
    else{
        console.log(loading);
        return (
            <div className="container productList">
            <div className="row">
                <div className="col-md-4">
                    <div className="card" >
                        <Skeleton height={520}></Skeleton>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card" >
                        <Skeleton height={520}></Skeleton>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card" >
                        <Skeleton height={520}></Skeleton>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card" >
                        <Skeleton height={520}></Skeleton>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card" >
                        <Skeleton height={520}></Skeleton>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card" >
                        <Skeleton height={520}></Skeleton>
                    </div>
                </div>
            </div>
            </div>
        )

    }



    
}