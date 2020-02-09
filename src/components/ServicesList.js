import React from 'react';
import { Link } from 'react-router-dom';

const ServicesList = ({ services }) => (
    <>
    {services.map((service, key) => (
        <Link key={key} to={`/services/${service.name}`}>
            <h3>{service.title}</h3>
            <p>{service.content[0].substring(0, 150)}...</p>
        </Link>
    ))}
    </>
);

export default ServicesList;