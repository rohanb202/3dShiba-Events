import { motion } from "framer-motion";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useState } from "react";

const textVariant={
  initial:{
    x:0

  },
  hover:{
      
      y:-130,      
    transition:{
        delay:0.1
    }
  }
}
const textVariant2={
  initial:{
    x:0,

  },
  hover:{
      
      y:-100,

  }
}


const Contain = (props) => {
  const [modalOP, setmodalOP] = useState(true);
  const modalLoader=()=>{
    setmodalOP(true); 
    //console.log(modalOP);   
    //console.log(props.id);
    props.onModalSt({state:modalOP,id:props.id});
    

  }


  return (
    <>   
    <motion.div className={`w-80 h-80 relative block p-5`}  initial="initial" whileHover="hover" animate="initial" >
      <LazyLoadImage        
        src={props.img}
        className="object-cover w-full h-full transform hover:scale-105 transition duration-500 ease-in-out rounded-lg "
        onClick={modalLoader}        
        data-scroll
      />
      <motion.h1
        className="text-white font-primary relative text-center bottom-10 text-3xl bg-black p-2 bg-opacity-25 hidden md:block"
        data-scroll
        variants={textVariant} 
        onClick={modalLoader}        
      >
        {props.text}
      </motion.h1>
      <motion.h1
        className="text-white font-primary  relative text-center bottom-10 text-3xl bg-black p-2 bg-opacity-25 md:hidden"
        data-scroll
        variants={textVariant2} 
        onClick={modalLoader}       
        
      >
        {props.text}
      </motion.h1>
    </motion.div>
    </>
  );
};

export default Contain;