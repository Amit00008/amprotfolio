import TextChange from "../TextChange";
import "./home.css";

const Home = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-10 md:p-20">
      <div>
        <h1 className="text-6xl font-bold leading-normal tracking-tighter text-white">
          <TextChange />
        </h1>
        <p className="text-lg md:text-2xl tracking-tight text-white">
          I am 15y/o developer and a student
        </p>
        <p className="text-lg md:text-2xl tracking-tight text-white">
          I am a self-taught developer who loves to build things that live on
          the internet.
        </p>
      </div>
    </div>
  );
};

export default Home;
