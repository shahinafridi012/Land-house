

import PropTypes from 'prop-types';

const Discount = ({ offer }) => {
    const { id, propertyType, originalPrice, discountedPrice, discount, imageURL } = offer;
    return (
        <div>
            <div className="hero bg-base-200 ">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src={imageURL}
                        className="lg:max-w-sm rounded-lg shadow-2xl"
                        alt={propertyType}
                    />
                    <div>
                        <h1>propertyID: F#&13{id}</h1>
                        <h1 className="text-5xl font-bold">{propertyType}</h1>
                        <h1>{originalPrice} - {discount}</h1>
                        <h1>{discountedPrice}</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <h1>Rent: No</h1>
                        <button className="btn btn-outline text-sky-500">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Discount.propTypes = {
    offer: PropTypes.shape({
        id: PropTypes.number.isRequired,
        propertyType: PropTypes.string.isRequired,
        originalPrice: PropTypes.string.isRequired,
        discountedPrice: PropTypes.string.isRequired,
        discount: PropTypes.string.isRequired,
        imageURL: PropTypes.string.isRequired,
    }).isRequired,
};

export default Discount;
