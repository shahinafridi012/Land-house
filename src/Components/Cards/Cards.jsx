

import PropTypes from 'prop-types';

const Cards = ({ house }) => {
    const { type, rent, price, rating, image } = house;

    return (
        <div className="mx-auto space-x-5 text-black ">
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                        src={image}
                        alt={type}
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {type}
                        <div className="badge badge-secondary">{rating}</div>
                    </h2>
                  
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">{price}</div>
                        <div className="badge badge-outline">{rent}</div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

Cards.propTypes = {
    house: PropTypes.shape({
        type: PropTypes.string.isRequired,
        rent: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        facilities: PropTypes.arrayOf(PropTypes.string).isRequired,
        rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        image: PropTypes.string.isRequired,
    }).isRequired,
};

export default Cards;
