import { useEffect, useState } from "react";

const useServiceDetail = serviceId =>{
    const [stockService, setStockService] = useState({});

    useEffect( () =>{
        const url = `http://localhost:5000/stockService/${serviceId}`;
        console.log(url);
        fetch(url)
        .then(res=> res.json())
        .then(data => setStockService(data));

    }, [serviceId]);
    return [stockService]
}

export default useServiceDetail;