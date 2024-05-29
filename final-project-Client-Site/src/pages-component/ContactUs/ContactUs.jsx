import banner from "../../images/contact-banner.jpg";
import { Helmet } from "react-helmet-async";
import SectionName from "../Home/SectionName";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { IoTime } from "react-icons/io5";
import ContactForm from "./ContactForm";

const contactData = [
  {
    icon: <FaPhoneVolume className="text-white text-2xl" />,
    name: "PHONE",
    info: "+38 (012) 34 56 789",
  },
  {
    icon: <FaLocationDot className="text-white text-2xl" />,
    name: "ADDRESS",
    info: "+38 (012) 34 56 789",
  },
  {
    icon: <IoTime className="text-white text-2xl" />,
    name: "WORKING HOURS",
    info: (
      <>
        Mon - Fri: 08:00 - 22:00 <br /> Sat - Sun: 10:00 - 23:00
      </>
    ),
  },
];

export default function ContactUs() {
  return (
    <div className="w-full">
      <Helmet>
        <title>Bistroboss || contact us</title>
      </Helmet>
      <div
        className="w-full flex justify-center items-center h-[100vh] bgattach"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${banner})`,
        }}
      >
        <div className="py-10 px-3 bg-[rgba(0,0,0,0.5)] md:px-20 xl:px-[120px] md:py-20">
          <h1 className="logo-text text-center md:text-7xl text-3xl text-white">
            CONTACT US
          </h1>
          <h3 className="text-xl mt-5 logo-text text-white text-center">
            WOULD YOU LIKE TO TRY A DiSH?
          </h3>
        </div>
      </div>
      <div className="container mx-auto py-10 px-4">
        <SectionName title="---Visit Us---" name="OUR LOCATION"></SectionName>
        <div className="w-full mb-10 grid grid-cols-1 sm:grid-cols-3 py-3 gap-5">
          {contactData.map((item, idx) => (
            <div key={idx} className="w-full border shadow">
              <div className="w-full flex justify-center items-center p-3 bg-[rgba(181,121,58,1)]">
                {item.icon}
              </div>
              <div className="w-full h-[200px] px-5 pb-5">
                <div className="w-full flex justify-center items-center h-full bg-gray-200 flex-col gap-3">
                  <h1 className="text-3xl">{item.name}</h1>
                  <p className=" text-center">{item.info}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <SectionName
          title="---Send Us a Message---"
          name="CONTACT FORM"
        ></SectionName>
        <ContactForm></ContactForm>
      </div>
    </div>
  );
}
