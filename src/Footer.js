import React from "react";
import logo from "./photos/Nintendo.svg.png";
import usaFlag from "./photos/FlagUsaIconRegionSelect.jpg";
import facebook from "./photos/bxl-facebook-circle.svg"
import instagram from "./photos/bxl-instagram.svg"
import twitter from "./photos/bxl-twitter.svg"
import youtube from "./photos/bxl-youtube.svg"
import './main.css';
import './addons.css';
function Footer() {
  return (
    <div className=" flex flex-col">
      <div className="bg-red flex flex-row container">
        <div className="w-4/5 ">
          <img src={logo} alt={logo} className="h-20 ml-5" />
        </div>
        <div className="flex flex-row w-1/5 mt-7">
          <a className="facebook  w-1/4"  href="https://www.facebook.com/NintendoAmerica/"><img src={facebook} className="h-8"/> </a>
           <a className="instagram  w-1/4" href="https://www.instagram.com/nintendoamerica/"><img src={instagram} className="h-8"/> </a>
           <a className="twitter  w-1/4" href="https://twitter.com/NintendoAmerica"><img src={twitter} className="h-8"/> </a>
           <a className="youtube  w-1/4" href="https://www.youtube.com/nintendo"><img src={youtube} className="h-8"/> </a>
        </div>
      </div>

      <div className=" flex flex-row container ml-5">
        <div className="w-1/5 flex flex-col  ">
          <a className="hover:underline hover:cursor-pointer decoration-red-700 font-bold">
            Nintendo
          </a>

          <a className="text-red-600 hover:cursor-pointer hover:underline decoration-red-700 font-bold">
            Careers
          </a>
          <a className="text-red-600 hover:cursor-pointer hover:underline decoration-red-700 font-bold">
            Corporate Social Responsibility
          </a>
        </div>
        <div className="max-h-32 w-1 bg-gray-400 mt-5"></div>
        <div className="w-1/5 flex flex-col  ml-5">
          <a className="hover:underline hover:cursor-pointer decoration-red-700 font-bold">
            Shop
          </a>
          <a className="text-red-600 hover:cursor-pointer hover:underline decoration-red-700 font-bold">
            Games
          </a>
          <a className="text-red-600 hover:cursor-pointer hover:underline decoration-red-700 font-bold">
            Hardware
          </a>
          <a className="text-red-600 hover:cursor-pointer hover:underline decoration-red-700 font-bold">
            Merchandise
          </a>
          <a className="text-red-600 hover:cursor-pointer hover:underline decoration-red-700 font-bold">
            Sales & deals
          </a>
          <a className="text-red-600 hover:cursor-pointer hover:underline decoration-red-700 font-bold">
            Exclusives
          </a>
          <a className="text-red-600 hover:cursor-pointer hover:underline decoration-red-700 font-bold">
            Online service
          </a>
          <a className="text-red-600 hover:cursor-pointer hover:underline decoration-red-700 font-bold">
            Nintendo NY store
          </a>
        </div>

        <div className="max-h-32 w-1 bg-gray-400 mt-5"></div>
        <div className="w-1/5 flex flex-col ml-5">
          <a className="hover:underline hover:cursor-pointer decoration-red-700 font-bold">
            Nintendo Store orders
          </a>
          <a className="text-red-600 hover:cursor-pointer hover:underline decoration-red-700 font-bold">
            details
          </a>
          <a className="text-red-600 hover:cursor-pointer hover:underline decoration-red-700 font-bold">
            ping info
          </a>
          <a className="text-red-600 hover:cursor-pointer hover:underline decoration-red-700 font-bold">
            Returns & exchanges
          </a>
          <a className="text-red-600 hover:cursor-pointer hover:underline decoration-red-700 font-bold">
            FAQ
          </a>
        </div>
        <div className="max-h-32 w-1 bg-gray-400 mt-5"></div>
        <div className="w-1/5 flex flex-col  ml-5">
          <a className="hover:underline hover:cursor-pointer decoration-red-700 font-bold">
            {" "}
            Support
          </a>
          <a className="text-red-600 hover:cursor-pointer hover:underline decoration-red-700 font-bold">
            {" "}
            Nintendo Switch
          </a>
          <a className="text-red-600 hover:cursor-pointer hover:underline decoration-red-700 font-bold">
            {" "}
            Nintendo Account
          </a>
          <a className="text-red-600 hover:cursor-pointer hover:underline decoration-red-700 font-bold">
            {" "}
            Other systems
          </a>
          <a className="text-red-600 hover:cursor-pointer hover:underline decoration-red-700 font-bold">

            Repairs
          </a>
          <a className="text-red-600 hover:cursor-pointer hover:underline decoration-red-700 font-bold">

            Nintendo product recycling
          </a>
        </div>

        <div className="max-h-32 w-1 bg-gray-400 mt-5"></div>

        <div className="w-1/5 flex flex-col ml-5">
          <a className="hover:underline hover:cursor-pointer decoration-red-700 font-bold">
            Parents
          </a>
          <a className="text-red-600 hover:cursor-pointer hover:underline decoration-red-700 font-bold">
            Info for parents
          </a>
          <a className="text-red-600 hover:cursor-pointer hover:underline decoration-red-700 font-bold">
            Parental controls
          </a>

          <a className=" hover:underline  hover:cursor-pointerdecoration-red-700 font-bold">
            privacy
          </a>
          <a className="text-red-600 hover:cursor-pointer hover:underline decoration-red-700 font-bold">
            Privacy policy
          </a>
          <a className="text-red-600 hover:cursor-pointer hover:underline decoration-red-700 font-bold">
            Cookies and interest-based ads
          </a>
        </div>
        <div className="max-h-32 w-1 bg-gray-400 mt-5"></div>
        <div className="w-1/5 flex flex-col ml-5">
          <a className="hover:underline hover:cursor-pointer decoration-red-700 font-bold">
            {" "}
            Community
          </a>
          <a className="text-red-600 hover:cursor-pointer hover:underline decoration-red-700 font-bold">
            {" "}
            Community guidelines
          </a>
          <a className="text-red-600 hover:cursor-pointer hover:underline decoration-red-700 font-bold">
            {" "}
            Online safety principles
          </a>
        </div>
      </div>

      <div className="bg-black flex flex-row text-xs text-amber-50 ">
        <div className="w-3/5 mt-2 ml-1">
          © Nintendo. Games are property of their respective owners. Nintendo
          of America Inc. Headquarters are in Redmond, Washington, USA
        </div>
        <div className="w-2/5 flex flex-row mt-2">
          <div className="w-1/5">
            <button>Contact us </button>
          </div>
          <div className="w-1/5">
            <button>Website feedback </button>
          </div>
          <div className="w-1/5">
            <button>Terms of Use </button>
          </div>
          <div className="w-1/5">
            <button> Documents & Policies </button>
          </div>
          <div className="w-1/5 flex flex-row">
            <button>
              <div>
                <img src={usaFlag} />
              </div>
              <div className="ml-8 mt--15">Change Regoin </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
