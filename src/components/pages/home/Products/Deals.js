import React, { useEffect, useState } from 'react';
import "./Deals.css";
import Rating from '@mui/material/Rating';
import Product from './Product'
import axios from 'axios';
export default function Deals(){
    

    const [data,setData] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:8000/products")
        .then(res=>{console.log(setData(res.data))})
        .catch(err=>{console.log(err)});
    },[]);
   return (

    <div className='homeProducts'> 
        <div className="productRow">
           {
                data.length!==0&&data.map((item)=>{
                    return (
                        
                            <div className="item">
                                
                                 <Product data={item}/>
                             </div>
                        
                    );
                })
            }
           
          
           
        </div>
       
    </div>
 
   );
}
