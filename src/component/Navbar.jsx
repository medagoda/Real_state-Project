import { useState } from "react";
import { FaPhone, FaRegEnvelope } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { IoPersonCircleOutline } from "react-icons/io5";
import { TbHomeCheck } from "react-icons/tb";
import { useNavigate, Link } from 'react-router-dom';

const Navbar = ({ toggleModal }) => {
  const [navBarOpen, setNavBarOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/listings');
  };

  return (
    <nav className="sticky top-0 z-50">
      <div className="lg:block hidden bg-[#0ca39a] text-white py-2">
        <div className="container mx-auto lg:flex hidden items-center justify-between px-3">
          <span className="flex items-center gap-x-1 ml-12">
            <GoLocation />
            <p className="text-sm">No.28 /A, Galle Road, Hikkaduwa</p>
          </span>
          <div className="flex items-center gap-x-4">
            <span className="flex items-center gap-x-1 mr-5">
              <FaPhone />
              <p>+76 267 6314</p>
            </span>
            <span className="flex items-center gap-x-1">
              <FaRegEnvelope />
              <p>downsouth-homes@gmail.com</p>
            </span>
          </div>
        </div>
      </div>
      <div className="lg;flex lg:items-center bg-white items-baseline lg:pt-0 pt-20 lg:h-auto h-screen mt-0">
        <ul className="flex flex-col lg:flex-row items-center gap-x-14 list-none lg:ml-auto lg:transform-none lg:translate-y-[-50%] lg:gap-y-0 gap-y-8">
          <div className="flex flex-row gap-x-10 items-center">
            <li className="py-2 flex font-medium items-center leading-snug">
              <Link to="/" className="hover:bg-gradient-to-r from-teal-500 to-teal-100 rounded-full px-6 py-3 ml-4">Home</Link>
            </li>
            <li className="py-2 flex font-medium items-center leading-snug">
              <a href="#" className="hover:bg-gradient-to-r from-teal-500 to-teal-100 rounded-full px-6 py-3">About</a>
            </li>
            <li className="py-2 flex font-medium items-center leading-snug">
              <Link to="/listings" className="hover:bg-gradient-to-r from-teal-500 to-teal-100 rounded-full px-6 py-3">Listings</Link>
            </li>
            <li className="py-2 flex font-medium items-center leading-snug">
              <a href="#" className="hover:bg-gradient-to-r from-teal-500 to-teal-100 rounded-full px-6 py-3">Services</a>
            </li>
            <li className="py-2 flex font-medium items-center leading-snug">
              <a href="#" className="hover:bg-gradient-to-r from-teal-500 to-teal-100 rounded-full px-6 py-3">Blogs</a>
            </li>
          </div>
          <div className="mx-auto">
            <li className="flex font-medium items-center leading-snug">
              <button className="py-4 hoverBtn flex items-center gap-2">
                <TbHomeCheck className="bg-[#0ca39a] text-4xl rounded-full text-white" />
                <p>G & S Sons</p>
              </button>
            </li>
          </div>
          <div className="ml-35">
            <div className="flex flex-row gap-x-2">
              <li className="flex font-medium items-center leading-snug mr-3">
                <button className="hoverBtn flex items-center gap-2 rounded-full hover:bg-gradient-to-t from-slate-700 to-slate-400 py-3 px-5 hover:text-white" onClick={toggleModal}>
                  <IoPersonCircleOutline />
                  <p>Login / Register</p>
                </button>
              </li>
              <li className="flex font-medium text-white items-center leading-snug">
                <button onClick={handleNavigation} className="bg-[#0ca39a] py-3 px-5 flex rounded-full items-center gap-2 hover:bg-gradient-to-r from-teal-800 to-teal-300">
                  <TbHomeCheck className="text-sm" />
                  <p>Add listing</p>
                </button>
              </li>
            </div>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
