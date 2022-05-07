import { useEffect, useState } from "react";

const useStockService = () =>{
    const [stockServices, setStockServices] = useState([]);

    useEffect( ()=>{
        fetch('http://localhost:5000/stockService')
        .then(res => res.json())
        .then(data => setStockServices(data));
    }, []);
    return [stockServices, setStockServices]
}

export default useStockService;
