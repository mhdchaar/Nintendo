import React from "react";
import './main.css';
import './addons.css';
import heartIcon from "./photos/bxs-heart.svg";
import cartIcon from "./photos/bxs-cart.svg";
import user from "./photos/bxs-user.svg";
import usaFlag from "./photos/FlagUsaIconRegionSelect.jpg";
import logo from "./photos/Nintendo.svg.png";
import support from "./photos/support.svg";

import { Collapse, Dropdown,
  Ripple,initTWE } from "tw-elements";
import { tab } from "@testing-library/user-event/dist/tab";

initTWE({ Collapse, Dropdown, Ripple });
function Header() {
  return (
    <div className="header flex flex-row border  border-b-zinc-800">
      <div className="w-3/5 flex flex-row ">
        <div className="w-32 bg-red text-amber-100 text-center">
          <div className=" rounded-full border-inherit ">
            <img src={logo} alt={logo} />
          </div>
        </div>
        <div className="search ">
          <div
            className="relative flex "
            data-twe-input-wrapper-init
            data-twe-input-group-ref
          >
            <input
              type="search"
              className="peer block min-h-[auto] w-1/2 rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
              placeholder="Search"
              aria-label="Search"
              id="exampleFormControlInput"
              aria-describedby="basic-addon1"
            />
            <label
              htmlFor="exampleFormControlInput"
              className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
            >
              Search
            </label>

            <button
              className="w-1/2"
              type="button"
              id="dropdownMenuButton1"
              data-twe-dropdown-toggle-ref
              aria-expanded="false"

            >
              All categories
            </button>
            <ul
              className=" rounded-lg  bg-white  text-base  data-[twe-dropdown-show]:block hidden" // Added w-full for full width
              aria-labelledby="dropdownMenuButton1"
              data-twe-dropdown-menu-ref
            >
              <li>
                <a
                  className=" px-4 py-2 cusfo:outline-none"
                  href="#"
                  data-twe-dropdown-item-ref
                />
                All categories
              </li>
              <li>
                <a
                  className=" px-4 py-2 cusfo:outline-none"
                  href="#"
                  data-twe-dropdown-item-ref
                />
                Games
              </li>
              <li>
                <a
                  className=" px-4 py-2 cusfo:outline-none"
                  href="#"
                  data-twe-dropdown-item-ref
                />
                Hardware
              </li>
              <li>
                <a
                  className=" px-4 py-2 cusfo:outline-none"
                  href="#"
                  data-twe-dropdown-item-ref
                />
                Merchandise
              </li>
              <li>
                <a
                  className=" px-4 py-2 cusfo:outline-none"
                  href="#"
                  data-twe-dropdown-item-ref
                />
                News & Events
              </li>
              <li>
                <a
                  className=" px-4 py-2 cusfo:outline-none"
                  href="#"
                  data-twe-dropdown-item-ref
                />
                Support
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="ml-16 grid grid-cols-5">
        <button className="font-bold  hover:text-red-600">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              width="18"
              role="presentation"
              alt=""
              data-testid="SupportIcon"
              size="18"
              color="currentColor"
            >
              <path
                d="M28.126.862H3.876A3.904 3.904 0 0 0 0 4.757v17.838a3.905 3.905 0 0 0 3.875 3.896h8.375c.125 0 .125 0 .125.125l3.626 4.397a.122.122 0 0 0 .125.125c.125 0 .125 0 .25-.125L20 26.616a.122.122 0 0 1 .124-.125h8.001A3.904 3.904 0 0 0 32 22.595V4.757A3.903 3.903 0 0 0 28.126.862zM17.954 20.91a2.018 2.018 0 0 1-.438.64 2.062 2.062 0 0 1-1.446.58 2.092 2.092 0 0 1-.802-.154 1.944 1.944 0 0 1-.652-.43 1.98 1.98 0 0 1-.427-.642 2.119 2.119 0 0 1-.001-1.59 1.97 1.97 0 0 1 .43-.65 2.055 2.055 0 0 1 .643-.432 2.078 2.078 0 0 1 1.613 0 2.152 2.152 0 0 1 .64.428l.002.001a2.045 2.045 0 0 1 .438 2.25zm2.964-10.055a4.505 4.505 0 0 1-.662 1.159 5.04 5.04 0 0 1-.861.844l-.822.622a6.01 6.01 0 0 0-.626.538.766.766 0 0 0-.231.426l-.303 1.923h-2.517l-.222-2.13a1.824 1.824 0 0 1 .193-1.127 3.152 3.152 0 0 1 .648-.812 7.965 7.965 0 0 1 .838-.658 6.94 6.94 0 0 0 .782-.626 3.116 3.116 0 0 0 .574-.716 1.726 1.726 0 0 0 .208-.873 1.287 1.287 0 0 0-.112-.55 1.213 1.213 0 0 0-.318-.414 1.482 1.482 0 0 0-.506-.275 2.946 2.946 0 0 0-1.628.018 3.595 3.595 0 0 0-.666.277 8.824 8.824 0 0 0-.49.294.966.966 0 0 1-1.483-.33l-.872-1.378.24-.212a8 8 0 0 1 .86-.657 6.234 6.234 0 0 1 1.023-.55 6.4 6.4 0 0 1 1.192-.37 6.63 6.63 0 0 1 3.248.15 4.301 4.301 0 0 1 1.475.826 3.736 3.736 0 0 1 .966 1.314 4.161 4.161 0 0 1 .34 1.703 4.304 4.304 0 0 1-.268 1.584z"
                fill="currentColor"
                fill-rule="evenodd"
              ></path>
            </svg>
          </div>
          <div className="mt--25 ml-2 ">Support</div>
        </button>
        <button className="font-bold">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M20.205 4.791a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412L12 21.414l8.207-8.207c2.354-2.353 2.355-6.049-.002-8.416z" />
            </svg>
          </div>
          <div className="mt--25 ml-4 hover:text-red-600">Wish List</div>
        </button>
        <button className=" font-bold  ">
          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921z" />
              <circle cx="10.5" cy="19.5" r="1.5" />
              <circle cx="17.5" cy="19.5" r="1.5" />
            </svg>
          </div>
          <div className="mt--25 ml-1 ">cart</div>
        </button>
        <button className=" font-bold hover:text-red-600">
          <div className="ml--24">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z" />
            </svg>
          </div>
          <div className="mt--25 ">Login/Sign up</div>
        </button>
        <button className=" ml-10 ">
          <div>
            <img src={usaFlag} alt="Flag" />
          </div>
        </button>
      </div>
    </div>
  );
}

export default Header;
