import React, { useEffect, useState } from 'react';
import { ToastBody } from 'react-bootstrap';
import { set } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../hooks/useServiceDetail';

const StockDetail = () => {
    const {serviceId} = useParams(); 
const [service] = useServiceDetail(serviceId);
const [stock,setStock ] = useState({});
const [quantyty,setQuantity]=useState(0)
const [inCreaseQuantit , setinCreaseQuantit] = useState(0)


const handleQuantity =()=>{
     const updateQuantity = service.quantity - 1;
     const price = updateQuantity * service.subPrice;
      service.price = price
     service.quantity = updateQuantity;
     const updateData = {
         name:service.name ,
         price:service.price,
         description:service.description,
         quantity:service.quantity,
      
        subName:service.subName,
        img:service.img
         
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
  const updateQuantity =parseFloat( event.target.increaseNumber.value) + parseFloat(service.quantity) ;
  const price = updateQuantity * service.subPrice;
  service.price = price

  service.quantity = updateQuantity;
  const updateData = {
      name:service.name ,
      price:service.price,
      description:service.description,
      quantity:service.quantity,
     subName:service.subName,
     img:service.img
      
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
                <img style={{width:'500px'}}src={service.img} alt="" />
            </div>
            <div className='w-100'>
                <h1>{service.name}</h1>
                <h2>for your privacey it's the best choice</h2>
                <h3> seller: {service.subName}</h3>
                <h4>price: {service.price}$ </h4>
                <h4>quantity: {service.quantity} </h4>
               <p className='fs-5'>{service.description}</p>
               <button className='btn btn-primary' onClick={handleQuantity}>Deleverd</button> 
            </div>
        </div>
                  
        <div className='mx-auto w-50'>
            <h1>Restoke item</h1>
             <form onSubmit={hanldeInputAdd}>
             <input type="number" name="increaseNumber" id="" />
            <button type='submit'  className="btn btn-success">Add</button>
             </form>
        </div>
        </div>
    );
};

export default StockDetail;