import loaderGif from "../assets/loader.gif";

const Loader = () => {
  return (
    <div className="loader">
      <img style={{ width: 150, height: 150 }} src={loaderGif} alt="Loader" />
    </div>
  );
};

export default Loader;
