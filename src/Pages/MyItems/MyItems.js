import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useStockService from '../../hooks/userStockService';

const MyItems = () => {
    const [stockServices, setstockServices] = useStockService();
    const [user] = useAuthState(auth)
    const emailStockServis = stockServices.filter(service => service.email===user.email)
   
    const navigate = useNavigate()
const navigateEdit = id =>{
        navigate(`/edit/${id}`)
    }
    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure?');
        if(proceed){
            const url = `https://lit-inlet-45861.herokuapp.com/stockService/${id}`;
            fetch(url, {
            method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = stockServices.filter(service => service._id !== id);
                setstockServices(remaining);
            })
        }
    }
    return (
        <div id="services" className='container'>
 <div  className='dash-header'>
            <h2>Daily Treeding info</h2>
            <p>Our daily order minimum 50m car. it is the biggest achimnet for us </p>
            <p>Its the begest car company ever in the world</p>
            
        </div>
                          
              <div className="row">
              <div className="services-container">
            

        {
            emailStockServis.map(manageInv=> 
           
         
            <div className='service'>
        <img className='img-mange' src={manageInv.img} alt="" />
        <h2>{manageInv.name}</h2>
        <div className='d-flex'>
           <p className='mx-4 fs-4'>Price: {manageInv.subPrice}</p> 
           <p className='mx-3 fs-4'>Quantity: {manageInv.quantity}</p>
           </div>
           <p>Contract: {manageInv.email}</p>
            <p><small>{manageInv.description}</small></p>
        <button onClick={()=>navigateEdit(manageInv._id)}  className='btn btn-primary'>Edit</button>
        <button onClick={() => handleDelete(manageInv._id)}  className='btn btn-danger mx-2'>Dellete</button>
    </div>
          
           )
        }
        </div>
        </div>
    </div>
    );
};

export default MyItems;