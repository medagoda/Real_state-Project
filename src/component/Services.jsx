import { FaHouse } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { PiBed } from "react-icons/pi";


const Services = () => {
    return (
        <main className="bg-[#f2f2f2] mt-20 lg:py-5">
            <div className="container mx-auto px-3 text-center">
                <p className="uppercase text-xl py-8">Our Services</p>
                <p className="lg:text-4xl text-2xl font-medium">Discover your ideal home easily...</p>

                <div className="flex lg:flex-row flex-col mx-10 gap-x-12 gap-y-8 py-20">
                    <div className="bg-white rounded-3xl lg:h-96 h-80 flex flex-col justify-center items-center lg:w-1/3 shadow-2xl">
                        <button className="bg-[#0c4f37] text-white rounded-full w-20 h-20 shadow-2xl"><IoSearch className="mx-auto text-3xl"/></button>
                        <p className="text-lg font-medium py-4">Buy a New Home</p>
                        <p className="w-2/3 mx-auto text-[#a5a5a5]">Find your dream home effortlessly. Our expert agents guide you through every step, ensuring a smooth and satisfying buying experience </p>
                    </div>
                    <div className="bg-white rounded-3xl lg:h-96 h-80 flex flex-col justify-center items-center lg:w-1/3 shadow-2xl">
                        <button className="bg-[#3da73d] text-white rounded-full w-20 h-20 shadow-2xl">
                            <FaHouse className="mx-auto text-3xl"/>
                        </button>
                        <p className="text-lg font-medium py-4">Sell a House</p>
                        <p className="w-2/3 mx-auto text-[#a5a5a5]">Sell your house quickly and profitably with our professional assistance. We handle everything, from listing to closing, for a stress-free process </p>
                    </div>
                    <div className="bg-white rounded-3xl lg:h-96 h-80 flex flex-col justify-center items-center lg:w-1/3 shadow-2xl">
                        <button className="bg-[#0c4f37] text-white rounded-full w-20 h-20 shadow-2xl">
                            <PiBed className="mx-auto text-3xl"/>
                        </button>
                        <p className="text-lg font-medium py-4">Rent a House</p>
                        <p className="w-2/3 mx-auto text-[#a5a5a5]">Discover the perfect rental home with our comprehensive listings and personalized support. We make finding your ideal rental easy and hassle-free</p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Services;