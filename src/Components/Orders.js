import React from "react";
import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { Connect } from "react-redux";


class Orders extends React.Component{
    constructor(){
        super();

        this.state = {
            IsLoading : true,
            orders : localStorage.getItem('Orders'),
            IsOrders: true
            
        };
        
        // console.log(JSON.parse(this.state.orders));
        
        console.log(this.state.orderDatas);
       
    }

    // componentWillMount(){
    //     if(JSON.parse(this.state.orders)){
    //         alert('yes');
    //     }
    // }

    

    render(){
        return (
            <div>
                <h2 className="text-center" style={{marginTop: 50}}>Your Orders</h2> <br />
                <div className="container ordersList">
                    
                    {JSON.parse(this.state.orders).map((datas) => {
                        return(
                            <Link to={"/OrderDetails/"+datas.id}   >  
                            <div className="row item">   
                                            
                                    <div className="col-md-3 image">
                                    <img src={datas.image} alt="" height={50}/>
                                    </div>
                                
                                    <div className="col-md-5 description">
                                    <span>{datas.title}</span><br />
                                    <span className="order_category">Category: {datas.category}</span>
                                    </div>
                                
                                    <div className="total-price col-md-4" style={{textAlign: "right"}}>${datas.price}</div>
                                
                            </div>
                            </Link>
                        )
                    })}
                    

                </div>
            </div>
        )
    }
}

export default Orders;