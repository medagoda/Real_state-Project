import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaPhone } from "react-icons/fa";
import { IoArrowForward } from "react-icons/io5";
import { TbHomeCheck } from "react-icons/tb";

const Footer = () => {
    return (
        <footer>
            <section className="'flex flex-col bg-[#e6edeb] pt-8">
                <div className="container mx-auto lg:flex items-start justify-between pb-8">
                    <div className="lg:flex justify-between px-3 w-full py-12 lg:text-left text-gray-700">
                        <div className="lg:block flex flex-col items-center justify-center">
                            <span className="flex items-center gap-x-2">
                                <button className="bg-[#0ca39a] text-white rounded-full w-14 h-10">
                                    <TbHomeCheck className="w-1/2 h-1/2 m-auto"/>
                                </button>
                                <p className="font-medium text-xl">
                                    G & S Sons
                                </p>
                            </span>
                            <p className="xl:text-base text-sm py-4 w-4/5 lg:text-left text-center">
                            No.28 /A, Galle Road, Hikkaduwa
                            </p>
                            <span className="flex items-center gap-x-2 pt-4">
                                <FaPhone />
                                <p>+76 267 6314</p>
                            </span>
                            <span className="flex items-center gap-x-2 pt-2">
                                <FaEnvelope />
                                <p>downsouth-homes@gmail.com</p>

                            </span>
                        </div>

                        <div>
                            <p className="font-semibold lg:mb-4 lg:mt-0 mt-6 uppercase">Quick Links</p>
                            <ul>
                                <li className="xl:text-base text-sm mt-2 cursor-pointer">Home</li>
                                <li className="xl:text-base text-sm mt-2 cursor-pointer">About</li>
                                <li className="xl:text-base text-sm mt-2 cursor-pointer">Listings</li>
                                <li className="xl:text-base text-sm mt-2 cursor-pointer">Blogs</li>
                                <li className="xl:text-base text-sm mt-2 cursor-pointer">Become an agent</li>
                            </ul>
                        </div>

                        <div>
                            <p className="font-semibold lg:mb-4 lg:mt-0 mt-6 uppercase">Discovery</p>
                            <ul>
                            <li className="xl:text-base text-sm mt-2 cursor-pointer">Kandy</li>
                                <li className="xl:text-base text-sm mt-2 cursor-pointer">Colombo</li>
                                <li className="xl:text-base text-sm mt-2 cursor-pointer">Galle</li>
                                <li className="xl:text-base text-sm mt-2 cursor-pointer">Matara</li>
                                <li className="xl:text-base text-sm mt-2 cursor-pointer">Kaluthara</li> 
                            </ul>
                        </div>

                        <div className="lg:w-1/3">
                            <p className="font-semibold lg:mb-4 lg:mt-0 mt-6 uppercase lg:text-left text-center lg:pb-0 pb-2">Subscribe to our NewsLetter !</p>
                            <div className="relative h-14 flex justify-center items-center">
                                <input type="email" placeholder="Email Address" className="h-full w-full rounded-full px-3" />
                                <button className="bg-[#0ca39a] text-white rounded-full w-12 h-12 flex justify-center items-center text-xl absolute right-1">
                                    <IoArrowForward />
                                </button>
                            </div>
                            <p className="font-semibold py-6 text-lg lg:text-left text-center">Follow us on</p>
                            <span className="text-[#0ca39a] flex items-center gap-4 text-2xl lg:justify-normal justify-center">
                                <FaLinkedin className="cursor-pointer"/>
                                <FaFacebook className="cursor-pointer"/>
                                <FaInstagram className="cursor-pointer"/>
                            </span>
                        </div>

                    </div>
                </div>
            </section>

            <section className="bg-black text-[#7b7a7a] xl:text-base text-sm">
                <div className="container mx-auto px-3 lg:flex justify-between items-center lg:h-14 lg:text-left text-center">
                    <p>@ 2023 G & S Sons - All Rights Reserved</p>
                    <ul className="flex lg:flex-row flex-wrap lg:justify-normal justify-center items-center gap-x-4">
                        <li className="cursor-pointer">Terms and Conditions |</li>
                        <li className="cursor-pointer">Privacy Policy |</li>
                        <li className="cursor-pointer">Disclaimer</li>
                       
                    </ul>
                </div>

            </section>
        </footer>
    );
};

export default Footer;