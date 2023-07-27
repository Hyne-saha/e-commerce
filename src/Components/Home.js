import React, { useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
// import slider1 from "../images/slider1.jpg";
// import slider2 from "../images/slider2.jpg";
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';   
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";


export default function Home(){
    const [datas, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products`).then((res) => {
            console.log(res.data);
            setData(res.data);
            setLoading(false);

        }).catch(() => {
            console.log('error');
        })
    },[])

    const ShowOwlCarousel = () => {
        console.log('show');
         {/* owl carousel */}
         return(
         <div className='container' style={{marginTop: 50}}>    
         <h3 className="text-center">Buy Products</h3>  <br />       
     <OwlCarousel items={4}  
       className="owl-theme"  
       loop  
       nav  
       margin={8} autoplay ={true}>  
         {datas.map((data) => {
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
            <div className="">
            <Carousel>
                <Carousel.Item interval={1500}>
                <img
                    className="d-block w-100"
        src="../images/home1.jpg"
                    alt="Image One" height={500}
                />
                <Carousel.Caption>
                    {/* <h3>Label for first slide</h3>
                    <p>Sample Text for Image One</p> */}
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                <img
                    className="d-block w-100"
        src="../images/home2.jpg"
                    alt="Image Two" height={500}
                />
                <Carousel.Caption>
                    {/* <h3>Label for second slide</h3>
                    <p>Sample Text for Image Two</p> */}
                </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </div>


            <div>{loading ? <IsLoading /> : <ShowOwlCarousel />}</div>

           
        </div>
    )
}