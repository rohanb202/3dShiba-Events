import Container from "./Container";
import LocomotiveScroll from "locomotive-scroll";
import "./loco.css";
//import Contain from "./Contain";
import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
//import Loader from "./loader";

const img1 =
  "https://images.pexels.com/photos/10266847/pexels-photo-10266847.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
const img2 =
  "https://images.unsplash.com/photo-1638008062242-5f1fbf684d3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80";
const img3 =
  "https://images.pexels.com/photos/2421025/pexels-photo-2421025.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
const img4 =
  "https://images.pexels.com/photos/9865946/pexels-photo-9865946.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";
const img5 =
  "https://images.pexels.com/photos/10259249/pexels-photo-10259249.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
const img6 =
  "https://images.pexels.com/photos/10190285/pexels-photo-10190285.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
const img7 =
  "https://images.pexels.com/photos/4388292/pexels-photo-4388292.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
const img8 =
  "https://images.pexels.com/photos/9980579/pexels-photo-9980579.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
const img9 =
  "https://images.pexels.com/photos/10261029/pexels-photo-10261029.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
const img10 =
  "https://images.pexels.com/photos/10223608/pexels-photo-10223608.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
const img11 =
  "https://images.pexels.com/photos/10043934/pexels-photo-10043934.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
const img12 =
  "https://images.pexels.com/photos/10080749/pexels-photo-10080749.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
const img13 =
  "https://images.pexels.com/photos/10220585/pexels-photo-10220585.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
const img14 =
  "https://images.pexels.com/photos/9532175/pexels-photo-9532175.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
const img15 =
  "https://images.pexels.com/photos/10285374/pexels-photo-10285374.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
const img16 =
  "https://images.pexels.com/photos/9737563/pexels-photo-9737563.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
const img17 =
  "https://images.pexels.com/photos/10154884/pexels-photo-10154884.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
const img18 =
  "https://images.pexels.com/photos/9726802/pexels-photo-9726802.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
const data = [
  {
    id: 1,
    img: img1,
    text: "flower",
  },
  {
    id: 2,
    img: img2,
    text: "gray",
  },
  {
    id: 3,
    img: img3,
    text: "dubai",
  }
  ,
  {
    id: 4,
    img: img4,
    text: "forever",
  }
  ,
  {
    id: 5,
    img: img5,
    text: "time",
  }
  ,
  {
    id: 6,
    img: img6,
    text: "white",
  }
];
const data2 = [
  {
    id: 7,
    img: img7,
    text: "edge",
  },
  {
    id: 8,
    img: img8,
    text: "popcorn",
  },
  {
    id: 9,
    img: img9,
    text: "type",
  }
  ,
  {
    id: 10,
    img: img10,
    text: "building",
  }
  ,
  {
    id: 11,
    img: img11,
    text: "sunshine",
  }
  ,
  {
    id: 12,
    img: img12,
    text: "filed",
  }
];
const data3 = [
  {
    id: 13,
    img: img13,
    text: "blue",
  },
  {
    id: 14,
    img: img14,
    text: "cotton",
  },
  {
    id: 15,
    img: img15,
    text: "trees",
  }
  ,
  {
    id: 16,
    img: img16,
    text: "caring",
  }
  ,
  {
    id: 17,
    img: img17,
    text: "bottle",
  }
  ,
  {
    id: 18,
    img: img18,
    text: "valley",
  }
];
const dataMain=[  {
  id: 1,
  img: img1,
  text: "flower",
},
{
  id: 2,
  img: img2,
  text: "gray",
},
{
  id: 3,
  img: img3,
  text: "dubai",
}
,
{
  id: 4,
  img: img4,
  text: "forever",
}
,
{
  id: 5,
  img: img5,
  text: "time",
}
,
{
  id: 6,
  img: img6,
  text: "white",
},{
  
  id: 7,
  img: img7,
  text: "edge",
},
{
  id: 8,
  img: img8,
  text: "popcorn",
},
{
  id: 9,
  img: img9,
  text: "type",
}
,
{
  id: 10,
  img: img10,
  text: "building",
}
,
{
  id: 11,
  img: img11,
  text: "sunshine",
}
,
{
  id: 12,
  img: img12,
  text: "filed",
},{

  id: 13,
  img: img13,
  text: "blue",
},
{
  id: 14,
  img: img14,
  text: "cotton",
},
{
  id: 15,
  img: img15,
  text: "trees",
}
,
{
  id: 16,
  img: img16,
  text: "caring",
}
,
{
  id: 17,
  img: img17,
  text: "bottle",
}
,
{
  id: 18,
  img: img18,
  text: "valley",
}]
const clamp = (value, min, max) =>
  value <= min ? min : value >= max ? max : value;




function App(props) {
  const ref = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const scroll = useRef({
    cache: 0,
    current: 0,
  });
  //const [sc, setsc] = useState(null);
  useEffect(() => {
    const scrollElement = new LocomotiveScroll({
      el: ref.current,
      smooth: true,
      smartphone: {
        smooth: true,
      },
      
      multiplier: 0.5,
      getDirection: true,
      getSpeed: true,
    });
    scrollElement.on("scroll", (obj) => {
      scroll.current.current = obj.scroll.y;
      const distance = scroll.current.current - scroll.current.cache;
      scroll.current.cache = scroll.current.current;

      ref1.current.style.transform = `skewY(${clamp(distance, -10, 10)}deg)`;
      ref2.current.style.transform = `skewY(${clamp(distance, -10, 10)}deg)`;
      ref3.current.style.transform = `skewY(${clamp(-distance, -10, 10)}deg)`;
    });
  },[null]);
  
  const modalSt=(data)=>{      
    props.onData({state:data.state,main:dataMain[data.id-1]});
  }
  

  const imgData = data.map((item) => (
    <Container id={item.id} img={item.img} text={item.text} ex={1} onModalSt={modalSt}></Container>
  ));
  const imgData2 = data2.map((item) => (
    <Container id={item.id} img={item.img} text={item.text} ex={2} onModalSt={modalSt}  ></Container>
  ));
  const imgData3 = data3.map((item) => (
    <Container id={item.id} img={item.img} text={item.text} ex={3} onModalSt={modalSt} ></Container>
  ));
 
  
  return (
    <>
     
     
      <div className="bg-black" ref={ref} data-scroll-section >
        
      
        <motion.div className="relative text-center p-5 z-10 bg-black xl:h-60 xl:flex xl:justify-center items-center">
          <motion.h1
            className="text-white text-6xl font-primary p-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, ease: "circIn" }}
          >
            Browse
          </motion.h1>
          <motion.h1
            className="text-gray-400 text-6xl font-primary p-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, ease: "circIn" }}
          >
            Events
          </motion.h1>
        </motion.div>
        
        
        
        <div className="p-10 m-2 grid justify-center items-center grid-col-1 xl:grid-col-3 gap-10">
          <div className="xl:col-start-1" ref={ref1}>
            {imgData}
          </div>
          <div
            className=" hidden  xl:block xl:col-start-2 "
            ref={ref2}
            data-scroll
            data-scroll-speed="-14"
            
          >
            {imgData2}
          </div>
          <div className="xl:hidden" ref={ref2} data-scroll>
            {imgData2}
          </div>
          <div className=" xl:col-start-3" ref={ref3} data-scroll>
            {imgData3}
          </div>
        </div>      
      </div>
      
    </>
  );
}

export default App;