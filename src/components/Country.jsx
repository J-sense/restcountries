import React, { useState } from "react";
import { MdFavoriteBorder } from "react-icons/md";

const Country = ({ country, handleFavorite }) => {
  const [visted, setVisited] = useState(false);
  const [addtofav, setaddtofav] = useState(false);

  const handlevisit = () => {
    setVisited(!visted);
  };
  const handleaddtoFavorite =()=>{
    setaddtofav(!addtofav)
  }
  return (
    <div>
      <div
        className={`${
          visted && "bg-success"
        } card bg-base-100 h-96 border border-zinc-600 shadow-xl hover:border`}
      >
        <figure className="px-10 pt-10">
          <img
            src={country.flags.png}
            alt="Shoes"
            className="rounded-xl object-cover h-44"
          />
        </figure>
        <div>
          <h4 className="text-start ps-10 mt-3">{country.name.common}</h4>
          <p className="text-start ps-10 mt-3">Area :{country.area}</p>
          <p className="text-start ps-10 mt-3">
            Population :{country.population}
          </p>
          <div className="flex justify-between items-center px-9 my-2">
            <button
              className="btn btn-neutral rounded px-9 "
              onClick={handlevisit}
            >
              {visted ? "Visited" : "Going"}
            </button>
            <MdFavoriteBorder
              className={`${addtofav && 'bg-red-700 border m-2  text-black'}`}
              onClick={()=>{handleaddtoFavorite();handleFavorite(country)}}
            />
          </div>
        </div>
        {/* <div className="card-body items-center text-center">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Country;
