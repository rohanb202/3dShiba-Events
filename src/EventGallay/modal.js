import { XIcon } from "@heroicons/react/solid";
import { motion } from "framer-motion";

const Modal = (props) => {
  return (
    <motion.div
      className=" relative w-full h-full  bg-black bg-opacity-40 z-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ease:"circIn"}}
      data-scroll-container
    >
      <div className="bg-black h-screen grid gap-10 md:grid-cols-2 justify-items-center place-content-center ">
        <motion.button
          className="text-white absolute w-10 m-2 p-2 right-2 top-2"
          onClick={() => props.onState(false)}
          whileHover={{
            scale: [1, 1.5, 1.5, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          }}
        >
          <XIcon className="text-white shadow-md text-center" />
        </motion.button>
        <motion.div
          className=" m-2 w-80 rounded-md p-2 md:p-5 md:w-full md:h-screen bg-white md:col-start-1"
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ delay:0.3}}
        >
          <motion.img
            src={props.main.img}
            className="rounded-md object-cover h-full w-full "
           
          ></motion.img>
        </motion.div>
        <motion.div
          className="row-start-2 md:row-start-1 md:p-10 md:m-10 md:col-start-2"
          initial={{ x: "200vw" }}
          animate={{ x: 0 }}
          transition={{ delay:0.3}}
        >
          <h1 className="text-white font-primary text-center text-3xl md:text-7xl ">
            {props.main.text}
          </h1>
          <p className="text-white text-center p-2 m-2 md:p-10 md:text-xl font-Nunito">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Modal;