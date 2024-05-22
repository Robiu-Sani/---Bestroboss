import image from "../../images/chef-service.jpg";

export default function BistroBoss() {
  return (
    <div
      className="md:p-[100px] sm:p-[50px] py-[100px] px-5 p-5"
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "right",
      }}
    >
      <div className="w-full p-7 px-4 sm:p-10 bg-white gap-4 flex flex-col justify-center items-center">
        <h1 className="text-4xl text-center">Bistro Boss</h1>
        <p className="text-center">
          We are proud to be a part of this community and believe in giving
          back. bistro boss supports local charities and participates in
          community events. We are committed to making a positive impact and
          fostering strong community relationships.
        </p>
      </div>
    </div>
  );
}
