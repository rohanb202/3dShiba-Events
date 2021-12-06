
const Contain = (props) => {
  return (
    <div
      className={` h-64  w-64 md:w-96 md:h-80 relative m-10 `}
    >
      <img
        src={props.img}
        className="object-cover w-full h-full transform rounded-lg hover:scale-105 transition duration-500 ease-in-out "
        data-scroll
      ></img>
      <h1
        className="text-white font-primary absolute top-56 text-5xl bg-black p-2 bg-opacity-25"
        data-scroll
        
      >
        {props.text}
      </h1>
    </div>
  );
};

export default Contain;
