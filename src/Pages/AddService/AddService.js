import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit } = useForm();
    
    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/stockService`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(result =>{
            console.log(result);
        } )
    };


    return (
        <div className='w-50 mx-auto'>
            <h2>Please add a service</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <div  className='form-group'>

           
                <input className='mb-2 form-control' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <input className='mb-2 form-control' placeholder='subName' {...register("subName", { required: true, maxLength: 20 })} />
                <textarea className='mb-2 form-control' placeholder='Description' {...register("description")} />
                <input className='mb-2 form-control' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-2 form-control' placeholder='subprice' type="number" {...register("subPrice")} />
                <input className='mb-2 form-control' placeholder='Photo URL' type="text" {...register("img")} />
                <input className='mb-2 form-control' placeholder='quantity' type="number" {...register("quantity")} />
                <input className='btn btn-primary' type="submit" value="Add Service" />
                </div>
            </form>
        </div>
    );
};

export default AddService;

