
import Profile_1 from '../../../assets/infinite-views-79NjpXDOJU8-unsplash.jpg';
import Profile_3 from '../../../assets/lotus-design-n-print-Alp8v3dpGh0-unsplash.jpg';
import Profile_2 from '../../../assets/mostafa-safadel-cHjAxnJk_wQ-unsplash.jpg';
import '../../Styles/Styles.css';
import { FaGift } from "react-icons/fa";
// Swipper
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';



const Slider = () => {
    return (
        <div>


            <>
                <Swiper
                    pagination={{
                        type: 'fraction',
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div
                            className="hero min-h-[70vh] mb-10"
                            style={{
                                backgroundImage: `url(${Profile_1})`,
                            }}>
                            <div className='space-y-5 p-5 '>
                                <h1 className='text-5xl font-serif font-bold text-gray-500 '>Buy / Sell Property on the Go <br />.
                                    Anywhere, Anytime.</h1>
                                <h1 className='text-red-800 text-2xl font-bold flex text-center '>
                                    <FaGift className='text-red-600 text-5xl ml-10    '></FaGift>    Register now and get Discount 10% until 22 february.

                                </h1>
                                <div className='flex'>
                                    <div> <input type="text" placeholder="Email" className="input rounded-r-none required w-full max-w-xs" /></div>
                                    <div><button className="btn btn-outline uppercase text-white rounded-l-none"><Link to='/register'>Started</Link></button></div>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link to='/offer'>
                            <div
                                className="hero min-h-[70vh]"
                                style={{
                                    backgroundImage: `url(${Profile_3})`,
                                }}>

                                <div className="hero-content text-neutral-content text-center">
                                    <div className="max-w-md">
                                        <h1 className="mb-5 text-5xl font-bold text-white"> A stunning photo of a featured property.</h1>
                                        <p className="mb-5">
                                            Discover Your Dream Home with a brief description
                                        </p>
                                        <button className="btn btn-outline text-sky-500">Explore Amenities</button>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div
                            className="hero min-h-[70vh]"
                            style={{
                                backgroundImage: `url(${Profile_2})`,
                            }}>

                            <div className="hero-content text-neutral-content text-center">
                                <div className="">
                                    <h1 className="mb-5 text-5xl font-bold"> Promotional graphic or a photo of the new developmen</h1>
                                    <p className="mb-5">
                                        New Development Now Open with details of the offer.
                                    </p>
                                    <button className="btn btn-outline text-white">Register Now</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>


                </Swiper>
            </>
        </div>
    );
};

export default Slider;
