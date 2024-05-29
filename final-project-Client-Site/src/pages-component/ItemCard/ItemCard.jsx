export default function ItemCard({ item }) {
  return (
    <div className="w-full overflow-hidden shadow-md flex flex-col justify-center items-center bg-gray-100 rounded-md">
      <img src={item.image} alt="menu" className="w-full h-[250px]" />
      <h3 className="text-xl text-center font-bold my-3">{item.name}</h3>
      <p className="text-center px-3 mx-auto">{item.recipe}</p>
      <button
        className="my-5 rounded-md py-2 px-5 bg-gray-200 text-orange-500 hover:bg-gray-700 "
        style={{ borderBottom: "2px solid orange" }}
      >
        ADD TO CART
      </button>
    </div>
  );
}
