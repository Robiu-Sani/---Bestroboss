import banner from "../../images/authentication.png";
import authpic from "../../images/authentication2.png";

export default function Login() {
  return (
    <div
      className="w-full flex justify-center items-center gap-10 flex-col md:flex-row py-10 px-4 bgattach min-h-screen"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(${banner})`,
      }}
    >
      <img src={authpic} alt="" />
    </div>
  );
}
