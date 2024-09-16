import Center from "./Center";
function Navbar() {
  return (
    <>
      <nav className="sticky top-0 z-50 flex w-full h-0">
        <Center className={`translate-y-[0%] w-full`}>
          <ul className="flex items-center justify-center w-full text-center">
            <li className="flex-1 py-3 text-lg text-white">
              <a
                className="transition-all duration-200 cursor-pointer hover:text-yellow-300"
                href="#home"
              >
                Home
              </a>
            </li>
            <li className="flex-1 py-3 text-lg text-white">
              <a
                className="transition-all duration-200 cursor-pointer hover:text-yellow-300"
                href="#about"
              >
                About
              </a>
            </li>
            <li className="flex-1 py-3 text-lg text-white">
              <a
                className="transition-all duration-200 cursor-pointer hover:text-yellow-300"
                href="#rating"
              >
                Rating
              </a>
            </li>
            <li className="flex-1 py-3 text-lg text-white">
              <a
                className="transition-all duration-200 cursor-pointer hover:text-yellow-300"
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </Center>
      </nav>
    </>
  );
}

export default Navbar;
