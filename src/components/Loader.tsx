import ReactLoading from "react-loading";
const Loader = () => {
  return (
    <div className="w-full h-ful flex justify-center items-center my-40">
      <ReactLoading type={"spin"} color={"#ea580c"} height={60} width={60} />
    </div>
  );
};

export default Loader;
