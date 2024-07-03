
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../Styles/Styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

const Coustomer = () => {
    return (
        <div>
            <>
                <Swiper
                    pagination={{
                        dynamicBullets: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide><div className='text-center mt-10 space-y-5 container mx-auto p-5 mb-10'>
                        <h1 className='text-6xl font-bold'>What our customers think</h1>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input
                                type="radio"
                                name="rating-2"
                                className="mask mask-star-2 bg-orange-400"
                                defaultChecked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <p>
                            For the 8 years I have worked with PW I have been consistently impressed with their innovative ideas and dedication. They have helped us nurture our business from start-up to established island portal and provided us with industry insights to both maximise our growth and onboard new technology. The team is always reliable and on time, often working out of hours to complete tasks. They have also assisted greatly with our marketing, SEO, new product launch and new idea generation. I would not hesitate to recommend the team to help your business grow and flourish</p>
                    </div>

                    </SwiperSlide>
                    <SwiperSlide><div className='text-center mt-10 space-y-5 container mx-auto p-5 mb-10'>
                        <h1 className='text-6xl font-bold'>What our customers think</h1>
                        <div className="collapse collapse-arrow bg-base-200">
                            <input type="radio" name="my-accordion-2" defaultChecked />
                            <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
                            <div className="collapse-content">
                                <p>hello</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow bg-base-200">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
                            <div className="collapse-content">
                                <p>hello</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow bg-base-200">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
                            <div className="collapse-content">
                                <p>hello</p>
                            </div>
                        </div>
                    </div>

                    </SwiperSlide>
                    <SwiperSlide><div className='text-center mt-10 space-y-5 container mx-auto p-5 mb-10'>
                        <h1 className='text-6xl font-bold'>What our customers think</h1>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input
                                type="radio"
                                name="rating-2"
                                className="mask mask-star-2 bg-orange-400"
                                defaultChecked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <p>
                            For the 8 years I have worked with PW I have been consistently impressed with their innovative ideas and dedication. They have helped us nurture our business from start-up to established island portal and provided us with industry insights to both maximise our growth and onboard new technology. The team is always reliable and on time, often working out of hours to complete tasks. They have also assisted greatly with our marketing, SEO, new product launch and new idea generation. I would not hesitate to recommend the team to help your business grow and flourish</p>
                    </div>

                    </SwiperSlide>


                </Swiper>
            </>
        </div>
    );
};

export default Coustomer;