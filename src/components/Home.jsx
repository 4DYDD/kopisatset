import kopisatset_logo from "../assets/kopisatset_logo.jpg";
import Center from "./Center";
import Transition from "./Transition";

function Home() {
  return (
    <>
      <div id="home" className="w-full h-full">
        <Center>
          <div className="overflow-hidden rounded-full w-[10em] h-[10em] shadow shadow-yellow-700 select-none pointer-events-none">
            <img
              src={kopisatset_logo}
              alt="logo kopi satset"
              className="object-cover"
            />
          </div>

          <br />

          <div className="text-3xl font-bold tracking-wider text-yellow-300 md:text-5xl">
            Home
          </div>
          <div className="text-white">
            <p>Selamat Datang di Web</p>
            <p>
              <i className="font-semibold">KOPI SATSET</i>
            </p>
            <p>(fake-dev)</p>
          </div>
        </Center>
      </div>
    </>
  );
}

export default Home;
