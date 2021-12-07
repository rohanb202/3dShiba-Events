import { MenuIcon, XIcon } from "@heroicons/react/solid";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Head = () => {
  const [mobile, setMobile] = useState(false);
  const navHandler = () => {
    setMobile((prev) => {
      return !prev;
    });
    //console.log(mobile);
  };
  const csshandle = `md:flex items-center justify-around text-center ${
    !mobile && " hidden"
  }`;
  const xbutton = `w-8 ${!mobile && " hidden"}`;
  const menubutton = `w-8 ${mobile && " hidden"}`;

  return (
    <header className=" p-2 m-2  bg-white">
      <nav className="md:flex justify-around content-cente">
        <div className="flex justify-around">
          <div className="p-2 ">
            <h1 className="font-bold text-xl">SHIBA.</h1>
          </div>
          <div className="flex md:hidden">
            <div>
              <motion.button
                className="p-2 ml-5"
                onClick={navHandler}
                whileHover={{
                  scale: [1, 1.5, 1.5, 1, 1],
                  rotate: [0, 0, 270, 270, 0],
                  borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                }}
              >
                <MenuIcon className={menubutton}></MenuIcon>{" "}
                <XIcon className={xbutton}></XIcon>
              </motion.button>
            </div>
          </div>
        </div>
        <div className={csshandle}>
          <Link to="/Home" className="p-2 mx-5 block hover:text-yellow-400">
            Home
          </Link>
          <Link to="/Events" className="p-2 mx-5 block hover:text-yellow-400">
            Events
          </Link>
          <a className="p-2 mx-5 block hover:text-yellow-400">Pricing</a>
          <a className="p-2 mx-5 block hover:text-yellow-400">Testimonal</a>
          <div className="block md:hidden">
            <button className="border-2 border-yellow-400 hover:border-gray-500 px-5 py-2 rounded-full">
              Get Started
            </button>
          </div>
        </div>
        <div className="hidden md:block">
          <button className="border-2 border-yellow-400 hover:border-gray-500 px-5 py-2 rounded-full">
            Get Started
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Head;
