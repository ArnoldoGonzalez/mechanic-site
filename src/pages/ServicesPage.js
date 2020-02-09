import React from 'react';
import servicesContent from './services-content';

const ServicesPage = ({ match }) => {
    const name = match.params.name;
    const services = servicesContent.find(services => services.name === name);

    if(!services) return <h1>{name} service is not offered.</h1>

    return (
        <>
            <h1>Easy Tune Up Mechanic Shop {name} Services</h1>
            <h2>{services.title}</h2>
            {services.content.map((paragraph, key) => (
                <p key={key}>{paragraph}</p>
            ))}
        </>
    );
};

export default ServicesPage;