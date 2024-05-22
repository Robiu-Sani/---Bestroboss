import SectionName from "./SectionName";
import img1 from "../../images/pizza-bg.jpg";
import img2 from "../../images/salad-bg.jpg";
import img3 from "../../images/soup-bg.jpg";

const cardData = [
  {
    image: img1,
    name: "Margherita Pizza",
    title: "Delicious Pizzas to Satisfy Your Cravings",
  },
  {
    image: img2,
    name: "Garden Delight Salad",
    title: "Fresh and Flavorful Salads for Every Occasion",
  },
  {
    image: img3,
    name: "Basil Soup",
    title: "Hearty Soups to Warm Your Soul",
  },
];

export default function ShefRecomends() {
  return (
    <div className="container mx-auto py-10 px-4">
      <SectionName
        title="---Should Try---"
        name="CHEF RECOMMENDS"
      ></SectionName>

      <div className="w-full grid grid-cols-1 mb-10  sm:grid-cols-2 md:grid-cols-3 gap-5">
        {cardData.map((item, idx) => {
          return (
            <div
              key={idx}
              className="w-full overflow-hidden shadow-md flex flex-col justify-center items-center bg-gray-100 rounded-md"
            >
              <img src={item.image} alt="menu" className="w-full h-[250px]" />
              <h3 className="text-xl text-center font-bold my-3">
                {item.name}
              </h3>
              <p className="text-center mx-auto">{item.title}</p>
              <button
                className="my-5 rounded-md py-2 px-5 bg-gray-200 text-orange-500 hover:bg-gray-700 "
                style={{ borderBottom: "2px solid orange" }}
              >
                ADD TO CART
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
