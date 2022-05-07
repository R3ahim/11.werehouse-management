import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import axiosPrivate from '../../api/axiosPrivate';
import auth from '../../firebase.init';
import './Order.css'
const Order = () => {
    const [user] = useAuthState(auth);
    // console.log(user)
    const [orders, setOrders] = useState([]);
    console.log(orders)
    const navigate = useNavigate();
    useEffect( () => {
        
        const getOrders = async() =>{
            const email = user?.email;
            const url = `http://localhost:5000/order?email=${email}`;
            try{
                const {data} = await axiosPrivate.get(url);
                setOrders(data);
            }
            catch(error){
                console.log(error.message);
                if(error.response.status === 401 || error.response.status === 403){
                    signOut(auth);
                    navigate('/login')
                }
            }
        }
        getOrders();

    }, [user])
    return (
        <div className='w-50 mx-auto'>
            <h2>Your orders: {orders.length}</h2>
            {
                orders.map(boxLove =><div key={boxLove._id}>
                      <div className='review-item'>
            <div>
                <img src={boxLove.img} alt="" />
            </div>
            <div className="review-item-details-container">
                <div className="review-item-details">
                    <p className="product-name" title={boxLove.name}>
                      {boxLove.name}
                    </p>
                    <p>Price: <span className='orange-color'>${boxLove.price}</span></p>
                    <p><small>Shipping: ${boxLove.email}</small></p>
                    <p><small>Quantity: {boxLove.quantity}</small></p>
                </div>
             
            </div>
        </div>
                </div>)
            }
        </div>
    );
};

export default Order;