import React, { useEffect, useState } from 'react';
import Service from '../StockServic/StockService';
import './StockServices.css';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect( ()=>{
        fetch('http://localhost:5000/stockService')
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])

  const sliceStockService =  services.slice(0, 6);

    return (
        <div  className='container'>
              
            
            <div className="row">
            <h1 className=' text-center mt-5'> Our Services</h1>
            <div className="services-container">
            {
                sliceStockService.map(service => <Service
                    key={service._id}
                    service={service}
                >
                </Service>)
            }
            </div>
            </div>
        </div>
    );
};

export default Services;