import React, { useEffect, useState } from 'react';
import Service from './Service';
import { useLoaderData } from 'react-router-dom';

const Services = () => {
    let [services, setServices] = useState([]);

    useEffect(() =>{
        fetch("/services.json")
        .then((res)=>res.json())
        .then((res) =>setServices(res));
    },[]);
    // const data =useLoaderData();
    // console.log(data);
    return (
        <div className="py-20">
           <h2 className="pb-8 text-center font-bold lg:text-3xl">
        Services That We Offer
      </h2> 
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5">
      {
        services.map((service) =>(<Service
        key={service.id} service={service} >

        </Service>))
      }
      </div>
        </div>
    );
};

export default Services;