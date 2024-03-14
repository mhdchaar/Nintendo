import React from "react";
import './main.css';
import './addons.css';
import heartIcon from "./photos/bxs-heart.svg";
import cartIcon from "./photos/bxs-cart.svg";
import user from "./photos/bxs-user.svg";
import usaFlag from "./photos/FlagUsaIconRegionSelect.jpg";
import logo from "./photos/Nintendo.svg.png";
import support from "./photos/support.svg";
function Header() {
  return (
    <div className="header flex flex-row border  border-b-zinc-800">
      <div className="w-3/5 flex flex-row ">
        <div className="w-32 bg-red text-amber-100 text-center">
          <div className=" rounded-full border-inherit">
            <img src={logo} alt={logo} />
          </div>
        </div>
        <div className="search ">
          <div
              className="relative flex"
              data-twe-input-wrapper-init
              data-twe-input-group-ref>
            <input
                type="search"
                className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                placeholder="Search"
                aria-label="Search"
                id="exampleFormControlInput"
                aria-describedby="basic-addon1"/>
            <label
                htmlFor="exampleFormControlInput"
                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
            >Search
            </label>
            <button
                className="relative z-[2] -ms-0.5 flex items-center rounded-e bg-primary px-5  text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                type="button"
                id="button-addon1"
                data-twe-ripple-init
                data-twe-ripple-color="light">
    <span className="[&>svg]:h-5 [&>svg]:w-5">
      <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor">
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"/>
      </svg>
    </span>
            </button>
          </div>
        </div>
      </div>
      <div className="ml-16 grid grid-cols-5">
        <button className="font-bold ">
          <div>
            <img src={support} alt="Heart"/>
          </div>
          <div className="mt--25 ml-2">Support</div>
        </button>
        <button className="font-bold">
          <div>
            <img src={heartIcon} alt="Heart"/>
          </div>
          <div className="mt--25 ml-4 ">Wish List</div>
        </button>
        <button className=" font-bold  ">
          <div className="">
            <img src={cartIcon} alt="Cart"/>
          </div>
          <div className="mt--25 ml-1">cart</div>
        </button>
        <button className=" font-bold hover:text-red-600">
          <div className="ml--24">
            <img src={user} alt="user"/>
          </div>
          <div className="mt--25 ">Login/Sign up</div>
        </button>
        <button className=" ml-10 ">
          <div>
            <img src={usaFlag} alt="Flag"/>
          </div>
        </button>
      </div>
    </div>
  );
}

export default Header;
