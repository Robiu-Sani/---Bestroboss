import { IoIosSend } from "react-icons/io";
export default function ContactForm() {
  return (
    <div className="w-full p-10 bg-gray-200">
      <form className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 p-5">
        <div className="w-full mt-5">
          <label className="font-bold p-1">Name*</label>
          <input
            type="text"
            className="w-full input mt-3"
            placeholder="Enter Your Name"
            required
          />
        </div>
        <div className="w-full mt-5">
          <label className="font-bold p-1">Email*</label>
          <input
            type="email"
            className="w-full input mt-3"
            placeholder="Enter Your Email"
            required
          />
        </div>
        <div className="w-full  mt-5 col-span-1 md:col-span-2">
          <label className="font-bold p-1">Number*</label>
          <input
            type="text"
            className="w-full input mt-3"
            placeholder="Enter Your Number"
            required
          />
        </div>

        <div className="w-full  mt-5 col-span-1 md:col-span-2">
          <label className="font-bold p-1">Message*</label>
          <textarea
            className="w-full input mt-3 h-[200px]"
            placeholder="Enter Your Number"
            required
          ></textarea>
        </div>
        <div className="w-full flex justify-center items-center mt-10 col-span-1 md:col-span-2">
          <button
            type="submit"
            className="cursor-pointer flex justify-center items-center gap-2 px-10 font-bold text-white py-2"
            style={{
              background:
                "linear-gradient(45deg ,rgba(181, 121, 52, 1), rgb(255, 173, 74)",
            }}
          >
            Send Message <IoIosSend className="text-xl" />
          </button>
        </div>
      </form>
    </div>
  );
}
