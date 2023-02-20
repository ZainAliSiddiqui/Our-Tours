import React, { useState } from 'react';

const Tour = ({ id, image, name, info, price, removeTour }) => {
    const [readMore, setReadMore] = useState(false);
    return (
        <>
            <div>
                <header>
                    <img
                        className='w-full'
                        src={image} alt={name} />
                </header>
                <main
                    className='flex justify-between items-center py-2'>
                    <h4>{name}</h4>
                    <h4>{price}</h4>
                </main>
                <footer>
                    <p>
                        {
                            readMore ? info : `${info.substring(0, 200)}...`
                        }
                        <button onClick={() => setReadMore((prev) => !prev)}>
                            {readMore ? "Show less  " : " Read more"}
                        </button>
                    </p>
                    <button
                        onClick={() => removeTour(id)}>Not Intrested</button>
                </footer>
            </div>
        </>
    );
};

export default Tour;