import { MdMaximize } from "react-icons/md";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/11298.png";

import { VscSettings } from "react-icons/vsc";
import { IoSearch } from "react-icons/io5";
import { TbMarquee } from "react-icons/tb";
import { FaPlus } from "react-icons/fa";

const responsive = {
    module: {
        breakpoint: {max: 4000, min:0},
        items: 1,
    },
};

const RealEstate = () => {

 const CustomDot = ({onclick, active}) => {
           return (
           <li className={active ? "" : "text-white"} onclick={() => onclick()}>
            <MdMaximize className="text-5xl" />
           </li>
           );
 };

 const images = [image1, image2, image3, image4];

 const imageUrls = [image1, image2, image3, image4];

    return (
        <main className="mb-3 mt-10 ml-20">
            <div className="bg-gradient-to-t from-[#adebe7] to-[#f8fdfe] rounded-[560px] rounded-t-none">
                <div className="container mx-auto px-3 lg:flex justify-between items-center lg:h-screen">
                    <div className="lg:w-2/5">
                        
                        <h1 className="lg:text-6xl text-3xl font-medium pt-3 pb-12">Find a perfect home you love..!</h1>
                        <p className="text-[#808080] lg:text-base text-sm pb-8">Find a perfect home you love with our expert guidance. We simplify the search, providing personalized options and support every step of the way. Discover your dream home effortlessly with us.</p>

                          <Carousel className="z-20" swipeable={true} draggable={true} responsive={responsive} showDots arrows ssr={true} infinite autoPlay={true} autoPlaySpeed={2000} keyBoardControl={true} customTransition="all .5" transitionDuration={500} customDot={<CustomDot />} >
                            {images.map((img, index) => (
                                           <div key={index}>
                                               <img src={img} alt="" className="rounded-2xl"/>
                                           </div>

                            ))}
                            </Carousel>  
                    </div>

                    <form className="bg-white shadow-2xl rounded-3xl py-8 lg:w-1/3 relative lg:mt-0 mt-12 mr-20">
                               <div className="flex justify-between border-b border-[#aaaaaa] h-12 lg:px-8 px-3">
                                <button type="button" className="w-1/2 text-[#808080] focus:border-b-2 focus:text-[#0ca39a] cursor-pointer">For Sale</button>
                                <button type="button" className="w-1/2 text-[#808080] focus:border-b-2 focus:text-[#0ca39a] cursor-pointer">For Rent</button>
                               </div>

                               <div className="py-12 flex flex-col gap-8 lg:px-12 px-4">
                                <input type="text" placeholder="Battaramulla, Colombo etc" className="h-16 outline-none rounded-3xl bg-[#f6f6f6] border border-[#e5e5e5] px-6"/>
                                <select placeholder="Select Property Type" className="h-16 outline-none rounded-3xl bg-[#f6f6f6] border border-[#e5e5e5] px-6">
                                    <option>Select property type</option>
                                    <option>Apartment</option>
                                    <option>Duplex/Triplex</option>
                                    <option>Single-Family Home</option>
                                    <option>Multi-Family Home</option>
                                    <option>Vacation Home</option>
                                    <option>Luxury Home</option>
                                    <option>Rental Property</option>
                                </select>

                                <select placeholder="Select Rooms" className="h-16 outline-none rounded-3xl bg-[#f6f6f6] border border-[#e5e5e5] px-6">
                                    <option>Select Rooms</option>
                                    <option>Single Room</option>
                                    <option>Double Rooms</option>
                                    <option>Triple Rooms</option>
                                </select>

                                <span className="flex items-center cursor-pointer text-[#0ca39a] gap-x-2">
                                     <VscSettings className="text-2xl" />
                                     <p>Advance Search</p>
                                </span>

                                <button type="button" className="w-full flex justify-center items-center gap-x-2 rounded-full h-14 text-white bg-[#0ca39a]">
                                    <IoSearch />
                                    Search
                                </button>
                               </div>

                               <button className="bg-gradient-to-r from-[#8bd3ce] to-[#eff9f9] rounded-full h-12 w-12 cursor-auto absolute -top-2 -right-2">

                               </button>
                    </form>
                </div>
            </div>

        <div className="lg:hidden block container mx-auto px-3 py-8">
            <span className="lg:flex items-end gap-x-60 lg:text-left text-center">
                <button className="lg:block hidden bg-gradient-to-r from-[#8bd3ce] to-[#eff9f9] rounded-full h-24 w-24 cursor-auto"></button>
                <p className="text-[#a5a5a5]">Trusted by 1000 companis across the Global</p>
            </span>

            <div className="py-12">
                  <TbMarquee>
                    <img src="../assets/" alt="" className="mr-4 h-8"/>
                    <img src="../assets/" alt="" className="mr-4 h-8"/>
                    <img src="../assets/" alt="" className="mr-4 h-8"/>
                    <img src="../assets/" alt="" className="mr-4 h-8"/>
                    <img src="../assets/" alt="" className="mr-4 h-8"/>
                    <img src="../assets/" alt="" className="mr-4 h-8"/>
                  </TbMarquee>
            </div>
        </div>

        <div className="lg:flex justify-center lg:mt-10 gap-x-8 lg:px-0 px-3">
            <div className="bg-white rounded-full py-4 lg:px-8 px-3 flex items-center justify-center gap-x-4 shadow-2xl">
                <span className="flex items-center relative h-10 w-44">
                    {imageUrls.map((img, index) =>(
                        <div key={index} className="lg:mr-7 mr-5 h-full">
                            <img src={img} alt="" className="w-10 h-10 rounded-full object-cover absolute bg-[#F2F2F2] border border-white"/>
                        </div>
                    ))}

                    <button className="bg-black w-8 h-8 rounded-full text-white relative flex items-center justify-center">
                        <FaPlus />
                    </button>
                </span>

                <p className="w-36 md:text-xl font-medium">72k+ Happy Customers</p>
            </div>

            <div>
                <img src={image1} alt="" className="w-12 h-12 rounded-full"/>
                <p className="md:text-xl font-medium">200+ New <br />Listings Everyday !</p>
            </div>
        </div>

        <div className="lg:block container mx-auto px-3 py-16">
            <span className="lg:flex items-end gap-x-60 lg:text-left text-center">
                <button className="lg:block hidden bg-gradient-to-r from-[#8bd3ce] to-[#eff9f9] rounded-full h-24 w-24 cursor-auto"></button>
                <p className="text-[#a5a5a5]">Trusted by 1000 companis across the Global</p>
            </span>

            <div className="py-12">
                
                  
            </div>
        </div>

        </main>
    );
};

export default RealEstate;