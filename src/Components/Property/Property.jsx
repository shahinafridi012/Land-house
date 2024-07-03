
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const Property = ({ house }) => {
    const { id, type, location, area, price, image, rating } = house;
    return (
        <Link to={`/details/${id}`}>
            <div className="container mx-auto ">
                <div className="card bg-base-100 w-96 shadow-xl ">
                    <figure>
                        <img
                            src={image}
                            alt="Property" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {type}
                            <div className="badge badge-secondary">{rating}</div>
                        </h2>
                        <button className="btn btn-outline text-sky-500">Details</button>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">{location}</div>
                            <div className="badge badge-outline">{price}</div>
                            <div className="badge badge-outline">{area}</div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

Property.propTypes = {
    house: PropTypes.shape({
        id: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        area: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        rating: PropTypes.string.isRequired,
    }).isRequired,
};

export default Property;
