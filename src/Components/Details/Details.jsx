import { useLoaderData, useParams } from "react-router-dom";
import { IoCheckmarkDone } from "react-icons/io5";
import { FaBath, FaBed, FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
const Details = () => {

    const details = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const detail = details.properties.find(property => property.id === idInt);

    const { type, location, area, price, image, amenities, bedrooms, bathrooms, swimImage, gymImage } = detail;

    return (
        <div className="container mx-auto p-3 rounded-xl">
            {/* main content here  */}
            <div>
                {/* house  */}
                <div className="space-y-2">
                    <h1 className="text-sky-500">Home > Details > {type}</h1>
                    <h1 className="text-3xl font-bold mb-2">Exclusive Master Room for Female Residents in Dubai Marina</h1>
                    <h1 className="text-xl ">{type} Marina Crown, Al Shorta Street, Dubai Marina, Dubai, United Arab Emirates</h1>
                    <img className="rounded-xl" src={image} alt="" />
                </div>
                {/* facilities */}
                <div className=" mx-auto bg-zinc-50 rounded-2xl">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 ">
                        <div className="col-span-3 mt-5 bg-[#F3F3F3] rounded-2xl p-5">
                            <h1 className="text-xl font-semibold">Property: <span className="text-sky-400">{type}</span></h1>
                            <hr />
                            <div className="flex space-x-3 text-center p-5">
                                <h1 className="text-2xl flex  "><FaBed className="mr-1 text-lime-500"></FaBed>{bedrooms}</h1>
                                <h1 className="text-2xl flex">
                                    <FaBath className="mr-1 text-lime-500"></FaBath>{bathrooms}
                                </h1>
                            </div>
                            <div >
                                <div className="text-2xl flex justify-around uppercase text-bold">
                                    <h1>swimming Pool</h1>
                                    <h1>GYM/WORK-OUT</h1>
                                </div>
                                <div className="flex gap-2">

                                    <img className="w-3/6  rounded-xl" src={swimImage} alt="" />
                                    <img className="w-3/6  rounded-xl" src={gymImage} alt="" />
                                </div>
                                <div className="mt-2 space-y-3 p-3">
                                    <p>“Marina Vista Oasis: Exclusive Master Room for Female Residents in Dubai Marina”

                                        Indulge in unparalleled comfort and luxury with our exclusive Master Room, tailored for female residents seeking a serene retreat in the heart of Dubai Marina.</p>

                                    <p>Nestled within the prestigious Marina Crown Tower, this spacious Master Room offers a private haven within our female-only apartment community. Enjoy the privacy of your own bathroom, shared with only one more tenant, ensuring convenience without sacrificing personal space.</p>

                                    <p>      Wake up to breathtaking views of the vibrant streets below through the large window, allowing natural light to flood your living space and offering a picturesque backdrop of the bustling cityscape.
                                    </p>
                                    <p>  Experience year-round comfort with central cooling and heating, ensuring a pleasant living environment regardless of the season. Take a dip in the on-site swimming pool, unwind in style, and enjoy the luxurious amenities at your fingertips.</p>

                                    <p> Prepare delicious meals in the shared kitchen equipped with essential appliances, fostering a sense of camaraderie as you cook and dine with fellow residents.

                                        Forget about the hassle of cleaning and maintenance, as complimentary services are provided to keep your living space pristine and well-maintained.</p>

                                    <p>    Stay connected with complimentary WiFi throughout the property, allowing you to stay in touch with loved ones and browse the web with ease.</p>

                                    <p>   Convenient transportation options await just steps away, with the tram station of Mina Seyahi and Shobha Metro station nearby. Additionally, the Carrefour Market, pharmacy, and pizzeria located below ensure all your daily needs are within easy reach.
                                    </p>
                                    <p>   Experience the epitome of luxury living at Marina Vista Oasis. Welcome to your new home.</p>

                                    <p>Additional Details
                                        Couple: Not Allowed</p>
                                </div>
                                <hr />
                                <div>
                                    <h1 className="text-2xl font-bold text-sky-500">Additional Details:</h1>
                                    <div className="p-5">
                                        <h1 >couple:Not Allow</h1>
                                        <h1>Bills: Included</h1>
                                    </div>
                                    <hr />
                                    <div>
                                        <h1 className="text-2xl font-bold text-sky-500">Features:</h1>
                                        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 ">
                                            <h1 className="text-1xl font-bold text-black flex "><IoCheckmarkDone className="text-green-500 text-3xl"></IoCheckmarkDone>{amenities[0]}</h1>
                                            <h1 className="text-1xl font-bold text-black flex "><IoCheckmarkDone className="text-green-500 text-3xl"></IoCheckmarkDone>{amenities[1]}</h1>
                                            <h1 className="text-1xl font-bold text-black flex "><IoCheckmarkDone className="text-green-500 text-3xl"></IoCheckmarkDone>{amenities[2]}</h1>
                                            <h1 className="text-1xl font-bold text-black flex "><IoCheckmarkDone className="text-green-500 text-3xl"></IoCheckmarkDone>{amenities[3]}</h1>
                                            <h1 className="text-1xl font-bold text-black flex "><IoCheckmarkDone className="text-green-500 text-3xl"></IoCheckmarkDone>{amenities[4]}</h1>


                                        </div>
                                        <hr />
                                        <div className="mt-5">
                                            <h1 className="text-2xl font-bold text-sky-500">Property On map </h1>
                                            <iframe className="rounded-2xl lg:w-[1000px] mx-auto mt-1 "
                                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28908.37497211843!2d55.1192998158001!3d25.083342896679703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b5402c126e3%3A0xb9511e6655c46d7c!2sDubai%20Marina%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sbd!4v1719875496850!5m2!1sen!2sbd"
                                                width="330"
                                                height="450"
                                                style={{ border: 0 }}
                                                allowFullScreen
                                                loading="lazy"
                                                referrerPolicy="no-referrer-when-downgrade"
                                            ></iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:col-span-1">
                            <div className="mx-auto">
                                <div className="p-4 space-y-3">
                                    <h2 className="text-2xl font-bold text-sky-500 ">Login With</h2>
                                    <button className="btn btn-outline text-blue-500 w-full">
                                        <FaGoogle></FaGoogle>
                                        Login With Google
                                    </button>
                                    <button className="btn btn-outline text-black w-full">
                                        <FaGithub></FaGithub>
                                        Login With Github
                                    </button>

                                </div>
                                <div className="p-4  ">
                                    <h2 className="text-2xl font-bold text-sky-500 ">Find Us On</h2>
                                    <a className="flex items-center space-x-2 rounded border rounded-t-lg p-x-5 p-y-5 text-lg p-2 mt-2 " href="">
                                        <span className="ml-4"> Facebook</span>
                                        <FaFacebook></FaFacebook>
                                    </a>
                                    <a className="flex items-center space-x-2 border-x  p-x-5 p-y-5 text-lg p-2  " href="">
                                        <span className="ml-4"> Facebook</span>
                                        <FaTwitter></FaTwitter>
                                    </a>
                                    <a className="flex items-center space-x-2 rounded border rounded-b-lg p-x-5 p-y-5  text-lg p-2  " href="">
                                        <span className="ml-4"> Instagram</span>
                                        <FaInstagram></FaInstagram>
                                    </a>
                                </div>
                                <div className="mt-10">
                                    <div className="card bg-base-100 image-full w-96 shadow-xl">
                                        <figure>
                                            <img
                                                src={image}
                                                alt="Shoes" />
                                        </figure>
                                        <div className="card-body">
                                            <h2 className="card-title">{type}</h2>
                                            <p>{location}</p>
                                            <p>{price}</p>
                                            <p>To get Discount Login Right Now</p>
                                            <button className="btn btn-outline text-white ">Login</button>
                                            <div className="card-actions justify-end">
                                                <button className="btn btn-outline text-sky-500">Buy Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="card bg-base-100 w-96 shadow-xl mt-10">
                                        <div className="card-body">
                                            <h2 className="card-title">{type}</h2>
                                            <p>{location}</p>
                                            <p>{price}</p>
                                            <p>To get Discount Login Right Now</p>
                                            <button className="btn btn-outline text-sky-500"> Get Rent</button>

                                        </div>
                                        <figure>
                                            <img
                                                src={image}
                                                alt="Shoes" />

                                        </figure>
                                    </div>
                                </div>
                                <div>
                                    <div className="card mt-10 bg-[#25D366] w-96">
                                        <div className="card-body">
                                            <h2 className="card-title text-white">Chat with our Coustomer care to understand </h2>
                                            
                                            <div className="card-actions justify-end">
                                                <button className="btn  text-[#25D366]">Chat Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-10">
                                    <form className="card-body space-y-5">
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Email</span>
                                            </label>
                                            <input type="email" placeholder="email" className="input input-bordered" required />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Password</span>
                                            </label>
                                            <input type="password" placeholder="password" className="input input-bordered" required />
                                            <label className="label">
                                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                            </label>
                                        </div>
                                        <div className="form-control mt-6">
                                            <button className="btn btn-primary">Login</button>
                                        </div>
                                    </form>
                                </div>
                             <div>
                                
                             </div>

                            </div>
                        </div>

                    </div>




                </div>
                {/* map */}
                <div>

                </div>
                {/* login */}
                <div>

                </div>

                {/* end here */}



            </div>
        </div >
    );
};

export default Details;
