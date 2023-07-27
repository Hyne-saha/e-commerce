import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";  

export default function ProductDetails(){
    // document.getElementById("gotocartbtn").style.display = "none"; 
    const {id} = useParams();
    const [dataById, setData] = useState([]);
    const [showSimilarProducts, setSimilarProducts] = useState([]);
    const [btnvalue, setbtnhtml] = useState('Add to Cart');
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    

    useEffect(() => {
        const getDataById = async () => {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            // console.log(await response.json());
            const datas = await response.json();
            setData(datas);
            const getCate = await fetch(`https://fakestoreapi.com/products/category/${datas.category}`);
            setSimilarProducts(await getCate.json());
            setLoading(false);

        }

        getDataById();
    },[id])

    const addToCart = (product) => {        
        dispatch(addCart(product));       
        document.getElementById("addbtn").style.display = "none";  
        document.getElementById("gotocartbtn").style.display = "inline";         
    }

    const ShowOwlCarousel = () => {
        console.log('show');
         {/* owl carousel */}
         return(
         <div className='container' style={{marginTop: 50}}>    
         <h3 className="text-center">Similar Products</h3>  <br />       
     <OwlCarousel items={4}  
       className="owl-theme"  
       loop  
       nav  
       margin={8} autoplay ={true}>  
         {showSimilarProducts.map((data) => {
             return(
                 <div className="carouselimg_div"><img  className="img" src= {data.image} height={350}/></div>  
             )
         })}

   </OwlCarousel>  
   </div>  
         )
    }

    const IsLoading = () => {
        return(
        <div className="container productList">
        <div className="row">
            <div className="col-md-3">
                <div className="card" >
                    <Skeleton height={350}></Skeleton>
                </div>
            </div>
            <div className="col-md-3">
                <div className="card" >
                    <Skeleton height={350}></Skeleton>
                </div>
            </div>
            <div className="col-md-3">
                <div className="card" >
                    <Skeleton height={350}></Skeleton>
                </div>
            </div>
            <div className="col-md-3">
                <div className="card" >
                    <Skeleton height={350}></Skeleton>
                </div>
            </div>
            {/* <div className="col-md-4">
                <div className="card" >
                    <Skeleton height={520}></Skeleton>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card" >
                    <Skeleton height={520}></Skeleton>
                </div>
            </div> */}
        </div>
        </div>
        )
    }


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

                        <button type="button" className="btn btn-primary changeBtn" id="addbtn" onClick={() => addToCart(dataById)} >Add Cart</button>
                        <Link to={"/cart/"} className="gotocartlink" >
                            <button type="button" className="btn btn-primary gotocart" id="gotocartbtn" onClick={() => addToCart(dataById)} style={{display: "none"}}>Go To Cart</button>
                        </Link>
                        <Link to={"/CheckOutPg/"} disabled>
                            <button type="button" className="btn"  onClick={() => addToCart(dataById)}>Buy Now</button>
                        </Link>
                    </div>
                </div>
           </div>

           <div>{loading ? <IsLoading /> : <ShowOwlCarousel />}</div>
        </div>

    )
}