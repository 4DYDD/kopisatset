import "../css/index.css";
import kopisatset_wan from "../assets/kopisatset_wan.jpg";

function Layout({ children }) {
  return (
    <>
      <section className={`bg-black h-[100vh] w-full relative`}>
        <div
          style={{
            backgroundImage: `url(${kopisatset_wan})`,
          }}
          className="absolute w-full h-full bg-center bg-cover opacity-70"
        ></div>
        {children}
      </section>
    </>
  );
}

export default Layout;
