import { useEffect, useState } from "react";
import Discount from "../Discount/Discount";


const Offer = () => {
    const [offer, setOffer] = useState([]);
    useEffect(()=>{
        fetch('offer.json')
        .then(res => res.json())
        .then(data => setOffer(data))
    },[])
    return (
        <div>
            {
                offer.map(offer => <Discount key={offer.id} offer={offer}></Discount> )
            }
        </div>
    );
};

export default Offer;