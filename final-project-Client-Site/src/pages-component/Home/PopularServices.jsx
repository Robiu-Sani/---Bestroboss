import { useEffect, useState } from "react";
import SectionName from "./SectionName";
import MenuItem from "../MenuItem";

export default function PopularServices() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => setMenu(data))
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);

  const popularMenu = menu.filter((item) => item.category === "popular");

  return (
    <div className="py-10 px-2">
      <SectionName title="---Check it out---" name="FROM OUR MENU" />

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {popularMenu.map((item) => (
          <MenuItem key={item._id} menu={item} />
        ))}
      </div>
      <div className="flex justify-center items-center mt-10 py-8">
        <button className="customBtn border">VIEW FULL MENU</button>
      </div>
    </div>
  );
}
