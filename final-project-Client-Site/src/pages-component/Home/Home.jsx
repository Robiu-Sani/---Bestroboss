import Banner from "./Banner";
import BistroBoss from "./BistroBoss";
import FromOurMenu from "./FromOurMenu";
import Number from "./Number";
import OnlineOrder from "./OnlineOrder";
import PopularServices from "./PopularServices";
import ShefRecomends from "./ShefRecomends";
import Testimonial from "./Testimonial";

export default function HOme() {
  return (
    <div>
      <Banner></Banner>
      <main className="container mx-auto p-2">
        <OnlineOrder></OnlineOrder>
        <BistroBoss></BistroBoss>
        <PopularServices></PopularServices>
      </main>
      <Number></Number>
      <ShefRecomends></ShefRecomends>
      <FromOurMenu></FromOurMenu>
      <Testimonial></Testimonial>
    </div>
  );
}
