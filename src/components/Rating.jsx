import kopisatset_logo from "../assets/kopisatset_logo.jpg";
import Center from "./Center";
import Transition from "./Transition";

function Rating() {
  return (
    <>
      <div id="rating" className="w-full h-full">
        <Center>
          <div className="overflow-hidden rounded-full w-[10em] h-[10em] shadow shadow-yellow-700 select-none pointer-events-none">
            <div
              style={{ backgroundColor: "rgba(255,235,1,1)" }}
              className="relative w-full h-full"
            >
              <Center
                style={{ filter: "drop-shadow(0px 0px 1.5px rgb(50, 50, 50))" }}
                className={`inconku`}
              >
                <i
                  class="fa-solid fa-star text-[3.5em]"
                  style={{ color: "rgba(183,0,2,1)" }}
                ></i>
              </Center>
            </div>
          </div>

          <br />

          <div className="text-3xl font-bold tracking-wider text-yellow-300 md:text-5xl">
            Rating
          </div>
        </Center>
      </div>
    </>
  );
}

export default Rating;
