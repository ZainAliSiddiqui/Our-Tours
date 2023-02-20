import React from 'react';
import Tour from './Tour';
const Tours = ({ tours, removeTour }) => {
    return (
        <>
            <div>
                <header className='mb-[6rem]'>
                    <h1
                        className='text-center text-[2rem] -tracking-tighter font-extrabold text-[#102a42]'>
                        Our Tours
                    </h1>
                    <div
                        className='w-[6rem] h-[0.25rem] bg-[#49a6e9] ml-auto mr-auto'>
                    </div>
                </header>
                <div>
                    {tours.map((tour) => {
                        return (
                            <Tour key={tour.id} {...tour} removeTour={removeTour} />
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default Tours;