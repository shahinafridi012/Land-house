import { useEffect, useState } from "react";
import Property from "../Property/Property";


const Expolore = () => {

    const [house, SetHouse] = useState([]);
    useEffect(() => {
        fetch('Json.json')
            .then(res => res.json())
            .then(data => SetHouse(data.properties
            ))
    }, [])
    return (
        <div className="text-center ">
            <h1 className="text-6xl font-extrabold text-black mb-10">Explore All the Property <br /> in the UAE</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto gap-5">
                {
                house.map(house =><Property key={house.id} house={house}></Property>)
                }
            </div>
        </div>
    );
};

export default Expolore;