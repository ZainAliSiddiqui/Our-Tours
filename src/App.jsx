import React, { useState, useEffect } from 'react';
import Tours from './Components/Tours';
import Loading from "./Components/Loading";
const App = () => {
    const url = 'https://course-api.com/react-tours-project';
    const [loading, setLoading] = useState(false);
    const [tours, setTours] = useState([]);
    const removeTour = (id) => {
        const newTours = tours.filter((tour) => tour.id !== id);
        setTours(newTours);
    };
    const fetchTours = async () => {
        setLoading(true);
        try {
            const response = await fetch(url);
            const tours = await response.json();
            setTours(tours);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        fetchTours();
        setLoading(false);
    }, []);
    if (loading) {
        return (
            <Loading />
        );
    }
    return (
        <>
            <main className='w-[90vw] max-w-[1170px] my-[5rem] mx-auto'>
                <Tours tours={tours} removeTour={removeTour} />
            </main>
        </>
    );
};

export default App;