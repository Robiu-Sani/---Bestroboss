import { Helmet } from "react-helmet-async";
import LeftBar from "./LeftBar/LeftBar";

export default function Deshboard() {
  return (
    <div className="w-full min-h-screen bg-orange-100 relative flex">
      <Helmet>
        <title>Bistro Boss || Deshboard</title>
      </Helmet>
      <div className="w-[300px] min-h-full bg-orange-400 shadow-md">
        <LeftBar></LeftBar>
      </div>
    </div>
  );
}
