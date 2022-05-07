import { useEffect, useState } from "react";

const useStockService = () =>{
    const [services, setServices] = useState([]);

    useEffect( ()=>{
        fetch('http://localhost:5000/stockService')
        .then(res => res.json())
        .then(data => setServices(data));
    }, []);
    return [services, setServices]
}

export default useStockService;
