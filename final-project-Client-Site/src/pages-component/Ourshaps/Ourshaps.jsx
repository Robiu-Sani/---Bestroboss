import { Helmet } from "react-helmet-async";
import banner from "../../images/banner2.jpg";
import { useEffect, useState } from "react";
import ItemCard from "../ItemCard/ItemCard";

export default function Ourshaps() {
  const [menu, setMenu] = useState([]);
  const [CardMenu, setCardMenu] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setMenu(data);
        setCardMenu(data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);

  const handleclick = (e) => {
    const data = e.target.name;
    setCardMenu(menu.filter((item) => item.category === data));
  };

  return (
    <div className="w-full">
      <Helmet>
        <title>Bistroboss || Our shop </title>
      </Helmet>
      <div className="w-full">
        <div
          className="w-full flex justify-center items-center h-[100vh] bgattach"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${banner})`,
          }}
        >
          <div className="py-10 px-3 bg-[rgba(0,0,0,0.5)] md:px-20 xl:px-[120px] md:py-20">
            <h1 className="logo-text text-center md:text-7xl text-3xl text-white">
              OUR SHOP
            </h1>
            <h3 className="text-xl mt-5 logo-text text-white text-center">
              WOULD YOU LIKE TO TRY A DiSH?
            </h3>
          </div>
        </div>
        <div className="container mx-auto py-5 px-2">
          <div className="flex justify-center mb-10 items-center gap-4">
            <input
              type="button"
              value={"SALAD"}
              name="salad"
              onClick={handleclick}
              className="shopbutton"
            />
            <input
              type="button"
              value={"PIZZA"}
              name="pizza"
              onClick={handleclick}
              className="shopbutton"
            />
            <input
              type="button"
              value={"SOUPS"}
              name="soup"
              onClick={handleclick}
              className="shopbutton"
            />
            <input
              type="button"
              value={"DESSERTS"}
              name="dessert"
              onClick={handleclick}
              className="shopbutton"
            />
            <input
              type="button"
              value={"DRINKS"}
              name="drinks"
              onClick={handleclick}
              className="shopbutton"
            />
          </div>
          <div className="w-full grid grid-cols-1 mb-10  sm:grid-cols-2 md:grid-cols-3 gap-5">
            {CardMenu.map((item) => (
              <ItemCard key={item._id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
