import { FaHome } from "react-icons/fa";



import image9 from "../assets/image9.jpg";
import image10 from "../assets/image10.jpg";
import image12 from "../assets/image12.jpg";



const WHO = () => {
    return (
        <main className="container mx-auto lg:flex px-3 mb-12 lg:pt-0 pt-8">
            <div className="lg:w-2/5 ml-10">
                <p className="text-[#0c4f37] md:text-xl text-lg font-medium">WHO ARE WE</p>
                <h1 className="lg:text-4xl text-2xl font-medium py-3">Assigning individuals in locating the appropriate real state</h1>
                <p className="lg:w-4/5 text-[#a5a5a5]">
                Finding the perfect property can be a daunting task, but with our dedicated team of real estate professionals, the process becomes seamless and stress-free. Our experts are committed to understanding your unique needs and preferences to ensure that you find the property that best suits your lifestyle and investment goals.
                </p>

                <div className="lg:block hidden">
                    <div className="bg-white shadow-2xl px-4 py-6 rounded-3xl flex items-center gap-x-3 lg:w-4/5 mt-6">
                        <FaHome className="text-4xl text-[#0c4f37] w-1/3"/>
                        <span>
                            <h1 className="text-[#0c4f37] text-lg font-medium">Tailored Property Recommendations</h1>
                            <p className="text-[#a5a5a5] w-4/5">Our agents provide tailored property recommendations based on your specific needs and preferences, ensuring a personalized and efficient search experience</p>
                        </span>
                    </div>

                    <div className="bg-white shadow-2xl px-4 py-6 rounded-3xl flex items-center gap-x-3 lg:w-4/5 mt-6">
                        <FaHome className="text-4xl text-[#0c4f37] w-1/3"/>
                        <span>
                            <h1 className="text-[#0c4f37] text-lg font-medium">Expert Local Market Insight</h1>
                            <p className="text-[#a5a5a5] w-4/5">Benefit from our agents' deep knowledge of local markets, helping you make informed decisions and find the best deals in your desired area</p>
                        </span>
                    </div>

                </div>
            </div>

            <div className="lg:w-1/2 flex items-end gap-4 lg:mt-0 mt-12 lg:h-auto h-[30rem]">
               <img src={image9} alt="#" className="rounded-3xl w-1/2 h-4/5 shadow-md object-cover"/>
               <div className="w-1/2 h-4/5 flex flex-col gap-4 relative -top-20">
               <img src={image10} alt="#" className="w-full h-3/5 rounded-3xl shadow-md object-cover"/>
               <img src={image12} alt="#" className="w-full h-2/5 rounded-3xl shadow-md object-cover"/>
               <button className="bg-gradient-to-r from-[#8bd3ce] to-[#eff9f9] rounded-full h-12 w-12 cursor-auto absolute -bottom-8 left-16">

               </button>
               </div>
            </div>
            <div className="lg:hidden block pt-4 py-16">
                <div className="bg-white shadow-2xl px-4 py-6 roun flex items-center gap-x-3 lg:w-4/5 mt-6">
                    <FaHome className="text-4xl text-[#0c4f37] w-1/3"/>
                    <span>
                    <h1 className="text-[#0c4f37] text-lg font-medium">nimesha dilshan medagoda</h1>
                    <p className="text-[#a5a5a5]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae perspiciatis quis, itaque incidunt .</p>
                    </span>
                </div>

                <div className="bg-white shadow-2xl px-4 py-6 roun flex items-center gap-x-3 lg:w-4/5 mt-6">
                    <FaHome className="text-4xl text-[#0c4f37] w-1/3"/>
                    <span>
                    <h1 className="text-[#0c4f37] text-lg font-medium">nimesha dilshan medagoda</h1>
                    <p className="text-[#a5a5a5]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae perspiciatis quis, itaque incidunt .</p>
                    </span>
                </div>
            </div>
        </main>
    );
};

export default WHO;