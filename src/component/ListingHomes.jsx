import image5 from "../assets/image5.jpg"
import image6 from "../assets/image6.jpg"
import image7 from "../assets/image7.jpg"
import image8 from "../assets/image8.jpg"
import image10 from "../assets/image10.jpg"
import image11 from "../assets/image11.jpg"
import image13 from "../assets/image13.jpg"
import image14 from "../assets/image14.jpg"
import image15 from "../assets/image15.jpg"
import image16 from "../assets/image16.jpg"
import image17 from "../assets/image17.jpg"
import image18 from "../assets/image18.jpg"



import { PiBed } from "react-icons/pi";
import { LuBath, LuSliders } from "react-icons/lu";
import { GoLocation } from "react-icons/go";
import { FaPhone, FaRegEnvelope } from "react-icons/fa";
import { TbHomeCheck } from "react-icons/tb";
import { IoSearch } from "react-icons/io5";
import { BsArrowLeft, BsArrowRight, BsSliders } from "react-icons/bs"

const ListingHomes = () => {
    return (
        <main className="bg-white">

         <h1 className="text-left text-3xl font-semibold ml-10 mt-5">Our Recent <span className="text-[#0ca39a] text-3xl font-semibold">Listings</span></h1>

          
          <div className="flex gap-x-4 lg:w-2/5 lg:pt-0 pt-6 ml-10 mt-5">
                    <button className="text-[#0ca39a] rounded-full border border-[#0ca39a] px-6 py-2 hover:bg-[#0ca39a] hover:text-white focus:bg-[#0ca39a] focus:text-white">All</button>
                    <button className="text-[#0ca39a] rounded-full border border-[#0ca39a] px-6 py-2 hover:bg-[#0ca39a] hover:text-white focus:bg-[#0ca39a] focus:text-white">Sell</button>
                    <button className="text-[#0ca39a] rounded-full border border-[#0ca39a] px-6 py-2 hover:bg-[#0ca39a] hover:text-white focus:bg-[#0ca39a] focus:text-white">Rent</button>
                </div>

                <div className="flex flex-row mt-10 mb-8 ml-10 gap-6">
                <div className="flex flex-col">
                    <p className="mb-2">Select a City</p>
                <input type="text" placeholder="Battaramulla, etc" className="outline-none rounded-3xl bg-[#e6edeb] border border-[#e5e5e5] px-4 h-12"/>

                </div>

                <div className="flex flex-col">
                    <p className="mb-2">Price (LKR)</p>
                     <select placeholder="Select Property Type" className="h-12 outline-none rounded-3xl bg-[#e6edeb] border border-[#e5e5e5] px-6">
                        <option value="">Default</option>
                        <option value="">High to Low</option>
                        <option value="">Low to High</option>
                        
                        </select>

                </div>

                <div className="flex flex-col">
                    <p className="mb-2">Area (Perch)</p>
                    <select placeholder="Select Property Type" className="h-12 outline-none rounded-3xl bg-[#e6edeb] border border-[#e5e5e5] px-6">
                        <option value="">10.0 - 20.0 </option>
                        <option value="">20.0 - 30.0</option>
                        <option value="">30.0 - 40.0</option>
                        <option value="">More than 40.0</option>

                        </select>
                </div>

                <div className="flex flex-col">
                    <p className="mb-2">Property Type</p>
                    <select placeholder="Select Property Type" className="h-12 outline-none rounded-3xl bg-[#e6edeb] border border-[#e5e5e5] px-6">
                        <option value="">One Story House</option>
                        <option value="">Two Story House</option>
                        <option value="">Three Story House</option>
                        <option value="">Villa</option>
                        <option value="">Cabana</option>
                        
                        </select>
                </div>

                <div className="flex flex-row-reverse gap-x-20 ml-20">
                                            
                <button className="py-3 px-4 flex rounded-full items-center gap-2 bg-blue-600 h-12 w-32 text-white border">
                                <IoSearch  className="text-sm"/>
                                <p>Search</p>
                            </button>                
                         
                            <button className="py-3 px-7 bg-red-500 flex rounded-full items-center h-12 w-40 gap-2 text-white border">
                                <p>Clear filters</p>
                            </button>
                         
                
                </div>

                


        </div>
          
         
        <div className="bg-[#e6edeb] pb-40 mt-8 pt-4">
            
                <div className='grid grid-cols-4 gap-8 mx-10 my-10'>
                    
                        <div className='transform transition-transform duration-75 hover:scale-110 mb-10 p-5 cursor-pointer'>
                        <img src={image17} alt="#" className="rounded-3xl h-full w-full object-cover"/>
                        <p className="text-2xl font-medium">52.5Million</p>
                        <p className="text-lg font-medium">No.137 Galle Road, Hikkaduwa</p>
                        <p className="text-sm">13.5 Perches, Two Story</p>


                        <div className="flex items-center gap-x-2 text-sm">
                            <span className="flex items-center gap-x-2  bg-blue-400">
                                <PiBed className="text-xl"/> 5 Beds
                            </span>
                            <span className="flex items-center gap-x-2 bg-yellow-300">
                                <LuBath className="text-xl"/> 3 Baths
                            </span>
                              <button className="bg-[#0ca39a] hover:bg-gradient-to-r from-teal-800 to-teal-300 rounded-full p-2 text-white hover:bg-teal-800" href="www.xhamster.com">
                                Add to cart
                                </button>                          
                        </div>

                        </div>

                        

                        <div className='transform transition-transform duration-75 hover:scale-110 mb-10 p-5 cursor-pointer'>
                        <img src={image6} alt="#" className="rounded-3xl h-full w-full object-cover"/>
                        <p className="text-2xl font-medium">18.9 Million</p>
                        <p className="text-lg font-medium">No 15, Galle Road, Baddegama</p>
                        <p className="text-sm">9.84 Perch, One story</p>


                        <div className="flex items-center gap-x-2 text-sm">
                            <span className="flex items-center gap-x-2 bg-blue-400">
                                <PiBed className="text-xl"/> 3 Beds
                            </span>
                            <span className="flex items-center gap-x-2 bg-yellow-300">
                                <LuBath className="text-xl"/> 2 Baths
                            </span>
                              <button className="bg-[#0ca39a] hover:bg-gradient-to-r from-teal-800 to-teal-300 rounded-full p-2 text-white hover:bg-teal-800" href="www.xhamster.com">
                                Add to cart
                                </button>                          
                        </div>

                        </div>

                        <div className='transform transition-transform duration-75 hover:scale-110 mb-10 p-5 cursor-pointer'>
                        <img src={image7} alt="#" className="rounded-3xl h-full w-full object-cover"/>
                        <p className="text-2xl font-medium">10 Million</p>
                        <p className="text-lg font-medium">No 13/A, Christ,Ambalangoda</p>
                        <p className="text-sm">103 Write Court Bourien, WA 98165</p>


                        <div className="flex items-center gap-x-2 text-sm">
                            <span className="flex items-center gap-x-2 bg-blue-400">
                                <PiBed className="text-xl"/> 4 Beds
                            </span>
                            <span className="flex items-center gap-x-2 bg-yellow-300">
                                <LuBath className="text-xl"/> 3 Baths
                            </span>
                              <button className="bg-[#0ca39a] hover:bg-gradient-to-r from-teal-800 to-teal-300 rounded-full p-2 text-white hover:bg-teal-800" href="www.xhamster.com">
                                Add to cart
                                </button>                          
                        </div>

                        </div>

                        <div className='transform transition-transform duration-75 hover:scale-110 mb-10 p-5 cursor-pointer'>
                        <img src={image8} alt="#" className="rounded-3xl h-full w-full object-cover"/>
                        <p className="text-2xl font-medium">33.5 Million</p>
                        <p className="text-lg font-medium">Kumburu Villa</p>
                        <p className="text-sm">Some Packages available</p>


                        <div className="flex items-center gap-x-2 text-sm">
                            <span className="flex items-center gap-x-2 bg-blue-400">
                                <PiBed className="text-xl"/> 4 Beds
                            </span>
                            <span className="flex items-center gap-x-2 bg-yellow-300">
                                <LuBath className="text-xl"/> 3 Baths
                            </span>
                              <button className="bg-[#0ca39a] hover:bg-gradient-to-r from-teal-800 to-teal-300 rounded-full p-2 text-white hover:bg-teal-800" href="www.xhamster.com">
                                Add to cart
                                </button>                          
                        </div>

                        </div>

                        <div className='transform transition-transform duration-75 hover:scale-110 mb-10 mt-10 p-5 cursor-pointer'>
                        <img src={image10} alt="#" className="rounded-3xl h-full w-full object-cover"/>
                        <p className="text-2xl font-medium">73 Million</p>
                        <p className="text-lg font-medium">River Zones</p>
                        <p className="text-sm">103 Write Court Bourien, WA 98165</p>


                        <div className="flex items-center gap-x-2 text-sm">
                            <span className="flex items-center gap-x-2 bg-blue-400">
                                <PiBed className="text-xl"/> 4 Beds
                            </span>
                            <span className="flex items-center gap-x-2 bg-yellow-300">
                                <LuBath className="text-xl"/> 3 Baths
                            </span>
                              <button className="bg-[#0ca39a] hover:bg-gradient-to-r from-teal-800 to-teal-300 rounded-full p-2 text-white hover:bg-teal-800" href="www.xhamster.com">
                                Add to cart
                                </button>                          
                        </div>

                        </div>

                        <div className='transform transition-transform duration-75 hover:scale-110 mt-10 mb-10 p-5 cursor-pointer'>
                        <img src={image11} alt="#" className="rounded-3xl h-full w-full object-cover"/>
                        <p className="text-2xl font-medium">$ 5,970</p>
                        <p className="text-lg font-medium">Tranqui Heaven in the Woods</p>
                        <p className="text-sm">103 Write Court Bourien, WA 98165</p>


                        <div className="flex items-center gap-x-2 text-sm">
                            <span className="flex items-center gap-x-2 bg-blue-400">
                                <PiBed className="text-xl"/> 4 Beds
                            </span>
                            <span className="flex items-center gap-x-2 bg-yellow-300">
                                <LuBath className="text-xl"/> 3 Baths
                            </span>
                              <button className="bg-[#0ca39a] hover:bg-gradient-to-r from-teal-800 to-teal-300 rounded-full p-2 text-white hover:bg-teal-800" href="www.xhamster.com">
                                Add to cart
                                </button>                          
                        </div>

                        </div>

                        <div className='transform transition-transform duration-75 hover:scale-110 mt-10 mb-10 p-5 cursor-pointer'>
                        <img src={image5} alt="#" className="rounded-3xl h-full w-full object-cover"/>
                        <p className="text-2xl font-medium">$ 5,650</p>
                        <p className="text-lg font-medium">Serenity Cabin Getaway</p>
                        <p className="text-sm">45 Peaceful Lane, Aspen, CO 81611</p>


                        <div className="flex items-center gap-x-2 text-sm">
                            <span className="flex items-center gap-x-2 bg-blue-400">
                                <PiBed className="text-xl"/> 4 Beds
                            </span>
                            <span className="flex items-center gap-x-2 bg-yellow-300">
                                <LuBath className="text-xl"/> 2 Baths
                            </span>
                              <button className="bg-[#0ca39a] hover:bg-gradient-to-r from-teal-800 to-teal-300 rounded-full p-2 text-white hover:bg-teal-800" href="www.xhamster.com">
                                Add to cart
                                </button>                          
                        </div>

                        </div>

                        <div className='transform transition-transform duration-75 hover:scale-110 mt-10 mb-10 p-5 cursor-pointer'>
                        <img src={image13} alt="#" className="rounded-3xl h-full w-full object-cover"/>
                        <p className="text-2xl font-medium">$ 7,970</p>
                        <p className="text-lg font-medium">Oceanview Paradise Retreat</p>
                        <p className="text-sm">789 Shoreline Drive, Malibu, CA 90265</p>


                        <div className="flex items-center gap-x-2 text-sm">
                            <span className="flex items-center gap-x-2 bg-blue-400">
                                <PiBed className="text-xl"/> 4 Beds
                            </span>
                            <span className="flex items-center gap-x-2 bg-yellow-300">
                                <LuBath className="text-xl"/> 2 Baths
                            </span>
                              <button className="bg-[#0ca39a] hover:bg-gradient-to-r from-teal-800 to-teal-300 rounded-full p-2 text-white hover:bg-teal-800" href="www.xhamster.com">
                                Add to cart
                                </button>                          
                        </div>

                        </div>

                        <div className='transform transition-transform duration-75 hover:scale-110 mt-10 mb-10 p-5 cursor-pointer'>
                        <img src={image14} alt="#" className="rounded-3xl h-full w-full object-cover"/>
                        <p className="text-2xl font-medium">$ 3,878</p>
                        <p className="text-lg font-medium">Rustic Mountain Hideaway</p>
                        <p className="text-sm">123 Summit Road, Telluride, CO 81435</p>


                        <div className="flex items-center gap-x-2 text-sm">
                            <span className="flex items-center gap-x-2 bg-blue-400">
                                <PiBed className="text-xl"/> 4 Beds
                            </span>
                            <span className="flex items-center gap-x-2 bg-yellow-300">
                                <LuBath className="text-xl"/> 3 Baths
                            </span>
                              <button className="bg-[#0ca39a] hover:bg-gradient-to-r from-teal-800 to-teal-300 rounded-full p-2 text-white hover:bg-teal-800" href="www.xhamster.com">
                                Add to cart
                                </button>                          
                        </div>

                        </div>

                        <div className='transform transition-transform duration-75 hover:scale-110 mt-10 mb-10 p-5 cursor-pointer'>
                        <img src={image15} alt="#" className="rounded-3xl h-full w-full object-cover"/>
                        <p className="text-2xl font-medium">$ 6,670</p>
                        <p className="text-lg font-medium">Lakeside Haven Escape</p>
                        <p className="text-sm">321 Water's Edge, Lake Placid, NY 12946</p>


                        <div className="flex items-center gap-x-2 text-sm">
                            <span className="flex items-center gap-x-2 bg-blue-400">
                                <PiBed className="text-xl"/> 1 Beds
                            </span>
                            <span className="flex items-center gap-x-2 bg-yellow-300">
                                <LuBath className="text-xl"/> 1 Baths
                            </span>
                              <button className="bg-[#0ca39a] hover:bg-gradient-to-r from-teal-800 to-teal-300 rounded-full p-2 text-white hover:bg-teal-800" href="">
                                Add to cart
                                </button>                          
                        </div>

                        </div>

                        <div className='transform transition-transform duration-75 hover:scale-110 mt-10 mb-10 p-5 cursor-pointer'>
                        <img src={image16} alt="#" className="rounded-3xl h-full w-full object-cover"/>
                        <p className="text-2xl font-medium">$ 7,170</p>
                        <p className="text-lg font-medium">Desert Oasis Villa</p>
                        <p className="text-sm">987 Sand Dune Blvd, Scottsdale, AZ 85251</p>


                        <div className="flex items-center gap-x-2 text-sm">
                            <span className="flex items-center gap-x-2 bg-blue-400">
                                <PiBed className="text-xl"/> 2 Beds
                            </span>
                            <span className="flex items-center gap-x-2 bg-yellow-300">
                                <LuBath className="text-xl"/> 1 Baths
                            </span>
                              <button className="bg-[#0ca39a] hover:bg-gradient-to-r from-teal-800 to-teal-300 rounded-full p-2 text-white hover:bg-teal-800" href="">
                                Add to cart
                                </button>                          
                        </div>

                        </div>

                        <div className='transform transition-transform duration-75 hover:scale-110 mt-10 mb-10 p-5 cursor-pointer'>
                        <img src={image18} alt="#" className="rounded-3xl h-full w-full object-cover"/>
                        <p className="text-2xl font-medium">$ 6,980</p>
                        <p className="text-lg font-medium">Coastal Breeze Cottage</p>
                        <p className="text-sm">456 Seaside Ave, Cape Cod, MA 02601</p>


                        <div className="flex items-center gap-x-2 text-sm">
                            <span className="flex items-center gap-x-2 bg-blue-400">
                                <PiBed className="text-xl"/> 5 Beds
                            </span>
                            <span className="flex items-center gap-x-2 bg-yellow-300">
                                <LuBath className="text-xl"/> 3 Baths
                            </span>
                              <button className="bg-[#0ca39a] hover:bg-gradient-to-r from-teal-800 to-teal-300 rounded-full p-2 text-white hover:bg-teal-800" href="">
                                Add to cart
                                </button>                          
                        </div>

                        </div>

                        
                </div>

                
            
        </div>
            
        <div className="flex flex-row bg-[#e6edeb] text-center justify-center gap-8 mb-10 pb-8">
             
              <div className="text-2xl font-semibold bg-slate-50 rounded-full py-2 px-5 hover:bg-slate-500 hover:text-white cursor-pointer">
                <BsArrowLeft />
              </div>
               
               <button className="text-lg rounded-lg bg-emerald-700 text-white px-3 py-1 transition delay-150 duration-300 ease-in-out hover:scale-125">
                1 
               </button>

               <button className="text-lg rounded-lg bg-emerald-700 text-white px-3 py-1 transition delay-150 duration-300 ease-in-out hover:scale-125">
                2 
               </button>

               <button className="text-lg rounded-lg bg-emerald-700 text-white px-3 py-1 transition delay-150 duration-300 ease-in-out hover:scale-125">
                3 
               </button>

               <button className="text-lg rounded-lg bg-emerald-700 text-white px-3 py-1 transition delay-150 duration-300 ease-in-out hover:scale-125">
                4 
               </button>

               <button className="text-lg rounded-lg bg-emerald-700 text-white px-3 py-1 transition delay-150 duration-300 ease-in-out hover:scale-125">
                5 
               </button>

               <button className="text-lg rounded-lg bg-emerald-700 text-white px-3 py-1 transition delay-150 duration-300 ease-in-out hover:scale-125">
                Next 
               </button>

               <p>...</p>

               <button className="text-lg rounded-lg bg-emerald-700 text-white px-3 py-1 transition delay-150 duration-300 ease-in-out hover:scale-125">
                Last 
               </button>

               <div className="text-2xl font-semibold bg-slate-50 rounded-full py-2 px-5 hover:bg-slate-500 hover:text-white cursor-pointer">
                <BsArrowRight />
              </div>
        </div>
        
        </main>
    );
};

export default ListingHomes;