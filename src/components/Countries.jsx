import React, { useEffect, useState } from "react";
import Country from "./Country";
import { addtols, getStoredCart } from "../utilities/locastorage";

const Countries = ({ search }) => {
  const [countries, setCountries] = useState([]);
  const [addtofav, setAddtofa] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cart, setCart] = useState([]);

  const handleFavorite = ({ country, search }) => {
    const allfav = [...addtofav, country];
    setAddtofa(allfav);
    addtols(country.cca3);
  };
  const filtersearching = countries.filter((cntry) =>
    cntry.name.common.toLowerCase().includes(search.toLowerCase())
  );
  useEffect(() => {
    setLoading(true);
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
        setLoading(false);
      });
  }, []);
  useEffect(() => {
    const savedCart = getStoredCart();
    let allCart = [];
    for (let cartid of savedCart) {
      const allsavedCart = countries.find((c) => c.cca3 === cartid);
      if (allsavedCart) {
        allCart.push(allsavedCart);
      }
    }
    setCart(allCart);
    console.log(cart);
  }, [countries]);

  return (
    <div className="poppins-thin">
      <p>{addtofav.length}</p>
      <p>favroite cart{cart.length}</p>
      {cart.map((c) => console.log(c))}
      <div>
        {loading ? (
          <>
            <span className="loading loading-spinner text-primary"></span>
            <span className="loading loading-spinner text-secondary"></span>
            <span className="loading loading-spinner text-accent"></span>
            <span className="loading loading-spinner text-neutral"></span>
            <span className="loading loading-spinner text-info"></span>
            <span className="loading loading-spinner text-success"></span>
            <span className="loading loading-spinner text-warning"></span>
            <span className="loading loading-spinner text-error"></span>
          </>
        ) : (
          <>
            <div className="grid lg:grid-cols-3 gap-3">
              {filtersearching.map((country) => (
                <Country
                  country={country}
                  handleFavorite={handleFavorite}
                  addtofav={addtofav}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Countries;
