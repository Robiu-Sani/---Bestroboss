import { useEffect, useState } from "react";
import banner from "../../images/banner3.jpg";
import banner2 from "../../images/chef-service.jpg";
import SectionName from "../Home/SectionName";
import MenuItem from "../MenuItem";
import { Helmet } from "react-helmet-async";

export default function OurMenu() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => setMenu(data))
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);

  const Offered = menu.filter((item) => item.category === "offered");
  const Dessert = menu.filter((item) => item.category === "dessert");
  const Pizza = menu.filter((item) => item.category === "pizza");
  const Salad = menu.filter((item) => item.category === "salad");
  const Drinks = menu.filter((item) => item.category === "drinks");
  const Soup = menu.filter((item) => item.category === "soup");

  return (
    <div className="w-full">
      <Helmet>
        <title>Bistroboss || Our menu</title>
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
              OUR MENU
            </h1>
            <h3 className="text-xl mt-5 logo-text text-white text-center">
              WOULD YOU LIKE TO TRY A DISH?
            </h3>
          </div>
        </div>
        <div className="container mx-auto p-4 py-10">
          <SectionName
            title="---Don't miss---"
            name="TODAY'S OFFER"
          ></SectionName>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
            {Offered.map((item) => (
              <MenuItem key={item._id} menu={item} />
            ))}
          </div>
          <div className="flex justify-center items-center mt-10 py-8">
            <button className="customBtn hover:text-white hover:bg-gray-700">
              ORDER YOUR FAVOURITE FOOD
            </button>
          </div>
        </div>

        <div className="w-full">
          <div
            className="w-full h-auto sm:h-[550px] flex justify-center bgattach items-center p-10"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${banner2})`,
            }}
          >
            <div className="p-5 w-auto py-10 bg-[rgba(0,0,0,0.5)] md:w-[700px]">
              <h1 className="logo-text text-white text-4xl mb-5 text-center">
                DESSERTS
              </h1>
              <p className="text-white text-center">
                Desserts are sweet courses typically served at the end of a
                meal, enjoyed for their rich flavors and diverse textures. They
                come in a vast array of types, each with unique ingredients,
                preparation methods, and cultural significance.
              </p>
            </div>
          </div>
          <SectionName
            title="---Don't miss---"
            name="TODAY'S OFFER"
          ></SectionName>
          <div className="container mx-auto grid p-4 grid-cols-1 md:grid-cols-2 gap-8">
            {Dessert.map((item) => (
              <MenuItem key={item._id} menu={item} />
            ))}
          </div>
          <div className="flex justify-center items-center mt-10 py-8">
            <button className="customBtn hover:text-white hover:bg-gray-700">
              ORDER YOUR FAVOURITE FOOD
            </button>
          </div>
        </div>

        <div className="w-full">
          <div
            className="w-full h-auto sm:h-[550px] bgattach flex justify-center items-center p-10"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${banner2})`,
            }}
          >
            <div className="p-5 w-auto py-10 bg-[rgba(0,0,0,0.5)] md:w-[700px]">
              <h1 className="logo-text text-white text-4xl mb-5 text-center">
                PIZZA
              </h1>
              <p className="text-white text-center">
                Pizza is a popular dish originating from Italy, known for its
                versatility and universal appeal. It consists of a flat, round
                base of leavened wheat-based dough, topped with various
                ingredients and baked at a high temperature.
              </p>
            </div>
          </div>
          <SectionName
            title="---Don't miss---"
            name="TODAY'S OFFER"
          ></SectionName>
          <div className="container mx-auto grid p-4 grid-cols-1 md:grid-cols-2 gap-8">
            {Pizza.map((item) => (
              <MenuItem key={item._id} menu={item} />
            ))}
          </div>
          <div className="flex justify-center items-center mt-10 py-8">
            <button className="customBtn hover:text-white hover:bg-gray-700">
              ORDER YOUR FAVOURITE FOOD
            </button>
          </div>
        </div>

        <div className="w-full">
          <div
            className="w-full h-auto bgattach sm:h-[550px] flex justify-center items-center p-10"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${banner2})`,
            }}
          >
            <div className="p-5 w-auto py-10 bg-[rgba(0,0,0,0.5)] md:w-[700px]">
              <h1 className="logo-text text-white text-4xl mb-5 text-center">
                SALADS
              </h1>
              <p className="text-white text-center">
                Salads are a diverse category of dishes typically consisting of
                a mixture of raw or cooked vegetables, often combined with
                fruits, grains, proteins, and various dressings.
              </p>
            </div>
          </div>
          <SectionName
            title="---Don't miss---"
            name="TODAY'S OFFER"
          ></SectionName>
          <div className="container mx-auto grid p-4 grid-cols-1 md:grid-cols-2 gap-8">
            {Salad.map((item) => (
              <MenuItem key={item._id} menu={item} />
            ))}
          </div>
          <div className="flex justify-center items-center mt-10 py-8">
            <button className="customBtn hover:text-white hover:bg-gray-700">
              ORDER YOUR FAVOURITE FOOD
            </button>
          </div>
        </div>

        <div className="w-full">
          <div
            className="w-full h-auto bgattach sm:h-[550px] flex justify-center items-center p-10"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${banner2})`,
            }}
          >
            <div className="p-5 w-auto py-10 bg-[rgba(0,0,0,0.5)] md:w-[700px]">
              <h1 className="logo-text text-white text-4xl mb-5 text-center">
                DRINKS
              </h1>
              <p className="text-white text-center">
                Drinks are beverages consumed for hydration, nutrition,
                enjoyment, or ceremonial purposes. They come in a wide variety
                of types, each with unique characteristics and cultural
                significance.
              </p>
            </div>
          </div>
          <SectionName
            title="---Don't miss---"
            name="TODAY'S OFFER"
          ></SectionName>
          <div className="container mx-auto grid p-4 grid-cols-1 md:grid-cols-2 gap-8">
            {Drinks.map((item) => (
              <MenuItem key={item._id} menu={item} />
            ))}
          </div>
          <div className="flex justify-center items-center mt-10 py-8">
            <button className="customBtn hover:text-white hover:bg-gray-700">
              ORDER YOUR FAVOURITE FOOD
            </button>
          </div>
        </div>

        <div className="w-full mb-10">
          <div
            className="w-full bgattach h-auto sm:h-[550px] flex justify-center items-center p-10"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${banner2})`,
            }}
          >
            <div className="p-5 w-auto py-10 bg-[rgba(0,0,0,0.5)] md:w-[700px]">
              <h1 className="logo-text text-white text-4xl mb-5 text-center">
                SOUPS
              </h1>
              <p className="text-white text-center">
                Soups are a versatile and comforting category of dishes,
                typically consisting of liquid combined with various ingredients
                like vegetables, meats, grains, and seasonings.
              </p>
            </div>
          </div>
          <SectionName
            title="---Don't miss---"
            name="TODAY'S OFFER"
          ></SectionName>
          <div className="container mx-auto grid p-4 grid-cols-1 md:grid-cols-2 gap-8">
            {Soup.map((item) => (
              <MenuItem key={item._id} menu={item} />
            ))}
          </div>
          <div className="flex justify-center items-center mt-10 py-8">
            <button className="customBtn hover:text-white hover:bg-gray-700">
              ORDER YOUR FAVOURITE FOOD
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
