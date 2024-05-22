export default function MenuItem({ menu }) {
  return (
    <div className="w-full flex items-center gap-4">
      <div className="min-w-[70px] h-[80px] overflow-hidden menuRadius flex justify-center items-center">
        <img src={menu.image} alt="menu" className="h-full" />
      </div>
      <div className="w-full">
        <div className="w-full flex text-xl justify-between mb-2 items-center">
          <h4 className="uppercase">{menu.name} --------------- </h4>
          <p className="text-orange-500 text-xl">${menu.price}</p>
        </div>
        <p>{menu.recipe}</p>
      </div>
    </div>
  );
}
