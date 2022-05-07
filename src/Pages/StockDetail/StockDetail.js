import React, { useEffect, useState } from 'react';
import { set } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../hooks/useServiceDetail';

const StockDetail = () => {
    const {serviceId} = useParams(); 
const [service] = useServiceDetail(serviceId);
const [stock,setStock ] = useState({});
const [quantyty,setQuantity]=useState(0)



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
            <div className='w-100  border px-4 pt-4 pb-5'>
                <h1>{service.name}</h1>
               
                <h5> seller: {service.subName}</h5>
                <h5>main price: {service.subPrice}</h5>
                <h5>Quantity price: {service.price}$ </h5>
                <h5>quantity: {service.quantity} </h5>
               <p className='fs-5'>{service.description}</p>
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