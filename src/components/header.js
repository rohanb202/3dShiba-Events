import React from "react";

export default function Header() {
  return (
    <header>
      <div>
        <nav className="flex justify-around align-middle p-2">
          <div className="font-bold">SHIBA</div>
          <div className="flex justify-evenly">
            <div className="font-light  px-1 md:px-5">Discover</div>
            <div className="font-light px-1 md:px-5">Products</div>
            <div className="font-light px-1 md:px-5">Solutions</div>
            <div className="font-light px-1 md:px-5">Reach</div>            
               
          </div>
          <button className="">Order</button>         
        </nav>
      </div>
    </header>
  );
}
