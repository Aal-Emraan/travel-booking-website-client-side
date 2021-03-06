import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import Tours from '../FeaturedTours/Tours';

const AllTours = () => {
    const [tours, setTours] = useState([]);

    useEffect(()=> {
        fetch('https://dry-beach-57081.herokuapp.com/tours')
        .then(res => res.json())
        .then(data => setTours(data))

    },[]);

    if(tours.length === 0){
        return <Spinner animation="grow" variant="primary" />
    }

    // const {tours} = useFetchItems();

    // const [tours, setTours] = useState([]);

    // useEffect(()=>{
    //     fetch('./featuredplans.json')
    //     .then(res => res.json())
    //     .then(data => setTours(data))
    // }
    //     ,[]);
    // console.log(tours);
    return (
        <div className="my-5">
            <h1 className="font-normal font-serif mt-5 text-4xl">All Tours</h1>
            <Row xs={1} md={3} className="g-4 container mx-auto">
                {tours.map(plans => <Tours key={plans._id} plans={plans}></Tours>)}
            </Row>
            
        </div>
    );
};

export default AllTours;