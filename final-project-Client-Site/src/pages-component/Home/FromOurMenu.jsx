import bgImage from "../../images/featured.jpg";

export default function FromOurMenu() {
  return (
    <div
      className="w-full mb-10 px-2 py-10 bgattach"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${bgImage})`,
      }}
    >
      <div className="pt-5 pb-10 flex flex-col justify-center items-center gap-4">
        <p className="text-orange-500">---Check it out---</p>
        <h1
          className="text-3xl px-10 text-white border-white py-3 NameBorder"
          style={{
            borderTop: "3px solid #fff",
            borderBottom: "3px solid #fff",
          }}
        >
          FROM OUR MENU
        </h1>
      </div>

      <div className="container p-4 mx-auto flex flex-col sm:flex-row justify-center items-center gap-10">
        <img
          src={bgImage}
          alt="Featured menu item"
          className="w-full sm:w-[350px]"
        />
        <div className="w-full text-white sm:w-[350px]">
          <h3 className="text-xl">March 20, 2023</h3>
          <h3 className="text-xl">WHERE CAN I GET SOME?</h3>
          <p>
            Discover a culinary haven where flavor meets ambiance at "Where Can
            I Get Some?". Our restaurant offers a diverse menu featuring
            everything from fresh, vibrant salads to mouth-watering pizzas and
            soul-warming soups.
          </p>
          <button
            className="my-5 rounded-md py-2 px-5 bg-[rgba(0,0,0,0)] text-white font-bold hover:bg-orange-500"
            style={{ borderBottom: "2px solid white" }}
          >
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
}
