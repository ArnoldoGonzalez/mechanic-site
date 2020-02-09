import React from 'react';
import ServicesList from '../components/ServicesList';
import NotFoundPage from './NotFoundPage';
import servicesContent from './services-content';

const ServicesPage = ({ match }) => {
    const name = match.params.name;
    const services = servicesContent.find(services => services.name === name);

    if(!services) return <NotFoundPage />

    const otherServices = servicesContent.filter(service => service.name !== name);

    return (
        <>
            <h1>Easy Tune Up Mechanic Shop {name} Services</h1>
            <h2>{services.title}</h2>
            {services.content.map((paragraph, key) => (
                <p key={key}>{paragraph}</p>
            ))}
            <h3>Other Services:</h3>
            <ServicesList services={otherServices} />
        </>
    );
};

export default ServicesPage;