import React, { useEffect, useState } from 'react';
import { set } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../hooks/useServiceDetail';

const StockDetail = () => {
    const {serviceId} = useParams(); 
const [stockService] = useServiceDetail(serviceId);
const [stock,setStock ] = useState({});
const [quantyty,setQuantity]=useState(0)



const handleQuantity =()=>{
     const updateQuantity = stockService.quantity - 1;
     const price = updateQuantity * stockService.subPrice;
     stockService.price = price
     stockService.quantity = updateQuantity;
     const updateData = {
         name:stockService.name ,
         price:stockService.price,
         description:stockService.description,
         quantity:stockService.quantity,
      
        subName:stockService.subName,
        img:stockService.img
         
     }
     console.log(updateData)
    
  
    setQuantity(updateQuantity);
    const url  =` http://localhost:5000/stock/${serviceId} `
    fetch(url,{
        method:'PUT',
        headers:{
           'content-type': 'application/json'
        },
        body:JSON.stringify(updateData)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
    })
    


}
const hanldeInputAdd = (event)=>{
  event.preventDefault() 
  const updateQuantity =parseFloat( event.target.increaseNumber.value) + parseFloat(stockService.quantity) ;
  const price = updateQuantity * stockService.subPrice;
  stockService.price = price

  stockService.quantity = updateQuantity;
  const updateData = {
      name:stockService.name ,
      price:stockService.price,
      description:stockService.description,
      quantity:stockService.quantity,
     subName:stockService.subName,
     img:stockService.img
      
  }
  console.log(updateData)
 

 setQuantity(updateQuantity);
 const url  =` http://localhost:5000/stock/${serviceId} `
 fetch(url,{
     method:'PUT',
     headers:{
        'content-type': 'application/json'
     },
     body:JSON.stringify(updateData)
 })
 .then(res=>res.json())
 .then(data=>{
     console.log(data);
 })
 
}


useEffect(()=>{
    const url  =` http://localhost:5000/stock/${serviceId}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>setStock(data))
},[])



    return (
    <div>
        <div className='d-flex align-items-center justify-content-center'>
            <div>
                <img style={{width:'500px'}}src={stockService.img} alt="" />
            </div>
            <div className='w-100  border px-4 pt-4 pb-5'>
                <h1>{stockService.name}</h1>
               
                <h5> seller: {stockService.subName}</h5>
                <h5>main price: {stockService.subPrice}</h5>
                <h5>Quantity price: {stockService.price}$ </h5>
                <h5>quantity: {stockService.quantity} </h5>
               <p className='fs-5'>{stockService.description}</p>
               <div className='d-inline'>

               <button className='btn btn-primary' onClick={handleQuantity}>Deleverd</button> 
               <div className='mx-auto w-25'>
             <form onSubmit={hanldeInputAdd}>
             <input className='w-25' type="number" name="increaseNumber" id="" />
            <button type='submit'  className="btn btn-success">Add</button>
             </form>
        </div>
               </div>
            </div>
        </div>
                  
      
        </div>
    );
};

export default StockDetail;