import header from "../assets/header.jpg";

export default function Hero() {
  return (
    <div className="">
      <img
        src={header}
        alt=""
        className="w-full px-24 py-12 mx-auto max-h-[600px] object-cover rounded-lg"
      />
    </div>
  );
}
