import React, { useState } from 'react';
import MainLayout from './MainLayout';
import { useLoaderData } from 'react-router';
import CoffeeCard from './CoffeeCard';

const Home = () => {
    const initialsCoffees = useLoaderData();
    const [coffees, setCoffees] = useState(initialsCoffees);


    return (
        <div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 w-10/12 mx-auto mt-11'>
                {
                    coffees.map(coffee => <CoffeeCard 
                        key={coffee._id}
                        coffees={coffees}
                        setCoffees={setCoffees}
                         coffee={coffee}
                         ></CoffeeCard>)
                }
            </div>
        </div>
    );
};

export default Home;