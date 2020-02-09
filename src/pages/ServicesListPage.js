import React from 'react';
import ServicesList from '../components/ServicesList';
import servicesContent from './services-content';

const ServicesListPage = () => (
    <>
    <h1>Services</h1>
    <ServicesList services={servicesContent} />
    </>
);

export default ServicesListPage;