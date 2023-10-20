import StarIcon from "../../assets/icon/StarIcon";
import novaLogo from "../../assets/img/bigbang.png";

function Footer() {
  return (
    <footer className="mt-10  flex flex-col items-start justify-center gap-8 pt-40 text-white  sm:h-96 sm:flex-row">
      <div className="flex flex-col gap-3 text-left">
        <h2 className="flex  justify-center gap-1 pe-20 font-bold uppercase italic sm:text-sm md:text-4xl">
          <img className="h-11 w-11" src={novaLogo} alt="nova" />
          <span className="text-[#01d676]">Nova</span>
          <span className="text-white">flix</span>
        </h2>
        <p className="mb-4">© 2020 - 2023 Novaflix. All rights reserved. </p>
        <p className="gap- mb-1  flex items-center justify-start">
          <span className="mx-2">See our 45,528 reviewed</span> {<StarIcon />}{" "}
          movies/shows
        </p>
      </div>
      <div className="flex flex-col gap-2 text-left">
        <h2>Language</h2>
        <button>English</button>
      </div>
      <div className="flex flex-col gap-2 text-left">
        <h2>About</h2>
        <p>Blog</p>
        <p>Privacy Policy </p>
        <p>Cookies Policy</p>
        <p>Terms of Service</p>
        <p></p>
      </div>
      <div className="flex flex-col gap-2 text-left">
        <h2>Support</h2>
        <p>FAQ</p>
        <p>Contact</p>
        <p>Support</p>
      </div>
    </footer>
  );
}

export default Footer;
