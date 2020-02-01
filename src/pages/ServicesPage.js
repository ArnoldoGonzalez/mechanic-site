import React from 'react';

const ServicesPage = ({ match }) => {
    const name = match.params.name;

    return (
        <>
            <h1>Easy Tune Up Mechanic Shop {name} Services</h1>
            <p>Easy Tune Up has been in business for more than 4 years. We Provide excellent customer service and our staff are highly qualified to handle any mechanical or electrical problem with foreign and domestic vehicles.</p>
        </>
    );
};

export default ServicesPage;