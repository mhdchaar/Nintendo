import React, {Fragment} from "react";
import "./main.css";
import "./addons.css";


import Header from "./Header";
import Footer from "./Footer";
import Slider from "./slider";

import arrow from "./photos/arrow.svg";
import plus from "./photos/plus_icon.svg";
import esrb from "./photos/esrb.svg";
import tv from "./photos/tv.svg";
import tablet from "./photos/taablet.svg";
import handheld from "./photos/handheld.svg";
import calender from "./photos/calander.svg";
import players from "./photos/players.svg";
import gener from "./photos/gener.svg";
import publisher from "./photos/publisher.svg";
import rating from "./photos/rating.svg";
import playmodes from "./photos/playmodes.svg";
import filesize from "./photos/filesize.svg";
import lang from "./photos/languages.svg";
import car from "./photos/car.svg";
import points from "./photos/points.svg";
import heart from "./photos/heart.svg";




import { Collapse, Dropdown,
  Ripple,initTWE } from "tw-elements";
import { tab } from "@testing-library/user-event/dist/tab";

initTWE({ Collapse, Dropdown, Ripple });


function App() {




  return (
    <div className="font-sans">
      <Header />
      <div className="container">
        <div className="drop-menu flex flex-wrap justify-center font-bold">
          <button
            className="m-3 hover:text-red-600 flex flex-row border-b-indigo-500 border-red-500 text-red-600 "
            type="button"
            id="dropdownMenuButton1"
            data-twe-dropdown-toggle-ref
            aria-expanded="false"
          >
            <div>
              <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                role="presentation"
                className="m-1"
                data-testid="MyNintendoTileIcon"
              >
                <path
                  d="M26.667 0H5.333A5.333 5.333 0 0 0 0 5.333v21.334A5.333 5.333 0 0 0 5.333 32h21.334A5.333 5.333 0 0 0 32 26.667V5.333A5.333 5.333 0 0 0 26.667 0zm-5.105 22.423a5.212 5.212 0 0 1-2.37-.602 10.482 10.482 0 0 1-13.67-1.608.803.803 0 0 1 1.228-1.036 8.866 8.866 0 0 0 11.914 1.04.803.803 0 0 1 .986-.005 3.461 3.461 0 0 0 5.41-2.888 3.495 3.495 0 0 0-3.39-3.416c-.016 0-.036 0-.063-.002a.962.962 0 0 0-.12.003.806.806 0 0 1-.778-.455 6.54 6.54 0 0 0-5.992-3.848c-2.82 0-5.738 1.802-5.738 4.819-.003.818.35 1.596.969 2.132l1.688-3.147a.803.803 0 0 1 1.423.015l.982 1.926.983-1.926a.8.8 0 0 1 .71-.438c.3 0 .574.164.716.428l2.076 3.933a.8.8 0 0 1-.03.804.802.802 0 0 1-1.391-.054l-1.353-2.564-.995 1.95a.803.803 0 0 1-1.431-.001l-1-1.96-1.384 2.58a.805.805 0 0 1-1.046.349 4.563 4.563 0 0 1-2.524-4.027C7.372 10.403 11.107 8 14.717 8a8.081 8.081 0 0 1 7.209 4.308 5.063 5.063 0 0 1-.363 10.115z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            My Nintendo Store
          </button>
          <ul
            className="float-left m-0 hidden list-none rounded-lg  bg-white  text-base  data-[twe-dropdown-show]:block  w-full" // Added w-full for full width
            aria-labelledby="dropdownMenuButton1"
            data-twe-dropdown-menu-ref
          >
            <li>
              <a
                className="block w-full px-4 py-2 focus:outline-none"
                href="#"
                data-twe-dropdown-item-ref
              >
                Action
              </a>
            </li>
          </ul>
          <button
            className="m-3 hover:text-red-600 flex flex-row"
            type="button"
            id="dropdownMenuButton1"
            data-twe-dropdown-toggle-ref
            aria-expanded="false"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              width="16"
              role="presentation"
              alt=""
              data-testid="DPadIcon"
              size="16"
              color="currentColor"
              className="mt-1"
            >
              <path
                d="M30.1 10.4h-8.5V1.9c0-1-.8-1.9-1.9-1.9h-7.5c-1 0-1.9.8-1.9 1.9v8.5H1.9c-1 0-1.9.8-1.9 1.9v7.5c0 1 .8 1.9 1.9 1.9h8.5v8.5c0 1 .8 1.9 1.9 1.9h7.5c1 0 1.9-.8 1.9-1.9v-8.5h8.5c1 0 1.9-.8 1.9-1.9v-7.5c-.1-1.1-.9-1.9-2-1.9zM7.5 16.9H3.8c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h3.8c.5 0 .9.4.9.9s-.5.9-1 .9zm9.4 11.3c0 .5-.4.9-.9.9s-.9-.4-.9-.9v-3.8c0-.5.4-.9.9-.9s.9.4.9.9v3.8zm0-20.7c0 .5-.4.9-.9.9s-.9-.4-.9-.9V3.8c0-.5.4-.9.9-.9s.9.4.9.9v3.7zm11.3 9.4h-3.8c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h3.8c.5 0 .9.4.9.9.1.5-.3.9-.9.9z"
                fill-rule="evenodd"
                clip-rule="evenodd"
                fill="currentColor"
              ></path>
            </svg>
            Games
          </button>
          <ul
            className=" rounded-lg  bg-white  text-base  data-[twe-dropdown-show]:block hidden" // Added w-full for full width
            aria-labelledby="dropdownMenuButton1"
            data-twe-dropdown-menu-ref
          >
            <li>
              <a
                className=" px-4 py-2 cusfo:outline-none "
                href="https://www.nintendo.com/us/store/games/nintendo-switch-games/#sort=df"
                data-twe-dropdown-item-ref
              >
                Nintendo Switch games
              </a>
            </li>
            <li>
              <a
                className=" px-4 py-2 focus:outline-none"
                href="https://www.nintendo.com/us/store/games/new-releases/#sort=df"
                data-twe-dropdown-item-ref
              >
                New Releases
              </a>
            </li>
            <li>
              <a
                className="  px-4 py-2 focus:outline-none"
                href="https://www.nintendo.com/us/store/games/coming-soon/"
                data-twe-dropdown-item-ref
              >
                Coming Soon
              </a>
            </li>
            <li>
              <a
                className=" px-4 py-2 focus:outline-none"
                href="https://www.nintendo.com/us/store/games/"
                data-twe-dropdown-item-ref
              >
                Shop Games
              </a>
            </li>
          </ul>
          <button
            className="m-3 hover:text-red-600 flex flex-row"
            type="button"
            id="dropdownMenuButton1"
            data-twe-dropdown-toggle-ref
            aria-expanded="false"
          >
            <div className="m-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                width="16"
                role="presentation"
                alt=""
                data-testid="SwitchIcon"
                size="16"
                color="currentColor"
              >
                <path
                  d="M13.54 0a.18.18 0 0 1 .17.17v31.66a.15.15 0 0 1-.17.17H8.11a6.86 6.86 0 0 1-6.85-6.8V6.74A6.81 6.81 0 0 1 8.11 0h5.43zm10.4 0a6.77 6.77 0 0 1 6.8 6.74V25.2a6.82 6.82 0 0 1-6.85 6.8h-5.43a.15.15 0 0 1-.17-.17V.17c0-.11.11-.17.22-.17h5.43zM7.49 19.6a1.26 1.26 0 1 0 0 2.51 1.32 1.32 0 0 0 1.31-1.25 1.28 1.28 0 0 0-1.31-1.26zm17-3.6a2.86 2.86 0 0 0-2.85 2.86A2.86 2.86 0 1 0 24.51 16zm-14.28.86a1.26 1.26 0 1 0 0 2.51 1.35 1.35 0 0 0 1.31-1.26 1.32 1.32 0 0 0-1.29-1.25zm-5.49 0a1.26 1.26 0 1 0 0 2.51 1.36 1.36 0 0 0 1.32-1.26 1.28 1.28 0 0 0-1.3-1.25zm2.75-2.69a1.26 1.26 0 1 0 0 2.52 1.37 1.37 0 0 0 1.33-1.26 1.28 1.28 0 0 0-1.31-1.26zm17-4a1.36 1.36 0 0 0-1.31 1.26 1.32 1.32 0 1 0 1.31-1.26zm-17-5.08a2.86 2.86 0 1 0 0 5.71 2.86 2.86 0 0 0 2.85-2.86 2.82 2.82 0 0 0-2.83-2.85zm19.77 2.4a1.26 1.26 0 1 0 1.31 1.25 1.32 1.32 0 0 0-1.29-1.25zm-5.43 0a1.26 1.26 0 1 0 1.31 1.25 1.29 1.29 0 0 0-1.29-1.25zm2.68-2.75A1.36 1.36 0 0 0 23.2 6a1.32 1.32 0 1 0 1.31-1.26z"
                  fill="currentColor"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </div>
            Nintendo Switch
          </button>
          <ul
            className=" rounded-lg  bg-white  text-base  data-[twe-dropdown-show]:block hidden" // Added w-full for full width
            aria-labelledby="dropdownMenuButton1"
            data-twe-dropdown-menu-ref
          >
            <li>
              <img src="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.25/c_scale,w_300/Dev/Global%20Navigation/lineup.png" />

              <a
                className=" px-4 py-2 cusfo:outline-none"
                href="https://www.nintendo.com/us/store/games/nintendo-switch-games/#sort=df"
                data-twe-dropdown-item-ref
              >
                Nintendo Switch lineup
              </a>
            </li>
            <li>
              <a
                className=" px-4 py-2 focus:outline-none"
                href="https://www.nintendo.com/us/store/games/new-releases/#sort=df"
                data-twe-dropdown-item-ref
              >
                New Releases
              </a>
            </li>
            <li>
              <a
                className="  px-4 py-2 focus:outline-none"
                href="https://www.nintendo.com/us/store/games/coming-soon/"
                data-twe-dropdown-item-ref
              >
                Coming Soon
              </a>
            </li>
            <li>
              <a
                className=" px-4 py-2 focus:outline-none"
                href="https://www.nintendo.com/us/store/games/"
                data-twe-dropdown-item-ref
              >
                Shop Games
              </a>
            </li>
          </ul>
          <button
            className="m-3 hover:text-red-600 flex flex-row"
            type="button"
            id="dropdownMenuButton1"
            data-twe-dropdown-toggle-ref
            aria-expanded="false"
          >
            <div className="m-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                width="16"
                role="presentation"
                alt=""
                data-testid="NewsIcon"
                size="16"
                color="currentColor"
              >
                <path
                  fill="currentColor"
                  d="M31.92 3.62a1.945 1.945 0 0 0-1.953-1.932H1.874A1.945 1.945 0 0 0-.08 3.62v10.068h32zm-32 11.692v7.201a2.027 2.027 0 0 0 1.954 1.998h8.711a2.777 2.777 0 0 1 2.178 1.073q2.97 4.736 3.315 4.728.344-.009 3.315-4.837a2.677 2.677 0 0 1 2.177-.964h8.398a2.027 2.027 0 0 0 1.953-1.998v-7.201zm14 5.15c0 .056-.07.1-.155.1H3.077c-.086 0-.156-.044-.156-.1v-1.051c0-.055.07-.1.156-.1h10.688c.086 0 .156.045.156.1z"
                ></path>
              </svg>
            </div>
            News & Events
          </button>
          <button
            className="m-3 hover:text-red-600 flex flex-row"
            type="button"
            id="dropdownMenuButton1"
            data-twe-dropdown-toggle-ref
            aria-expanded="false"
          >
            <div className="m-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                width="16"
                role="presentation"
                alt=""
                data-testid="StarPlayNintendoIcon"
                size="16"
                color="currentColor"
              >
                <path
                  d="M18.9 19.1c-.9 0-1-1.5-1-3.4s0-3.5 1-3.4c.9.1 1.1 1.4 1.1 3.3-.1 2-.2 3.5-1.1 3.5m-5.8 0c-.9 0-1-1.6-1-3.4 0-1.9.2-3.2 1.1-3.3 1-.1 1 1.5 1 3.4-.1 1.8-.2 3.3-1.1 3.3M32 12.4c-.1-.3-1.4-.6-5.6-1.1-2.6-.3-5.1-.5-5.2-.5-.2 0-.4-.2-.5-.4-.6-1.6-1.3-3.3-2-4.8C17.1 1.8 16.4.7 15.9.7c-.4 0-1 1.1-2.8 5-1.1 2.4-2 4.8-2 4.8-.1.2-.3.4-.5.4 0 0-2.5.1-5.1.4-4.1.4-5.4.7-5.5 1-.1.4.8 1.3 3.9 4.2 1.9 1.8 3.9 3.4 3.9 3.4.2.1.2.3.2.4v.1s-.6 2.5-1.2 5.1c-.6 3-1.1 5.4-.7 5.7.4.4 1.8-.5 5.2-2.4 2.3-1.3 4.4-2.7 4.5-2.7.2-.1.4-.1.6 0 0 0 2.2 1.4 4.4 2.7 3.4 2 4.7 2.7 5.2 2.4.4-.3 0-2.1-.7-5.7-.5-2.6-1.2-5.1-1.2-5.1v-.1c0-.2.1-.3.2-.4 0 0 1.9-1.6 3.9-3.3 3-2.9 3.9-3.9 3.8-4.2"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            Play Nintendo
          </button>
        </div>

        <div className="news "></div>
        <div className="flex flex-row justify-center">
          <div className="flex fex-row border-r-4">
            <img src={car} />
            <span className="m-2 text-sm">
              <span className=" font-bold">Free shipping </span> on orders $50
              or more.{" "}
              <span>
                <a
                  href="https://en-americas-support.nintendo.com/app/answers/detail/a_id/15575"
                  className="underline"
                >
                  Restrictions apply
                </a>
                .
              </span>
            </span>
          </div>
          <div className="flex flex-row ml-2">
            <img src={points} />

            <span className="m-2 text-sm">
              Earn{" "}
              <a
                className="font-bold underline"
                href="https://my.nintendo.com/about_gold_point"
                target="blank"
              >
                My Nintendo Points
              </a>{" "}
              on digital games
            </span>
          </div>
        </div>
        <div
          className="bg-blue w-full flex justify-center "
          id="game-slideshow"
        >
          <div className=" container rounded-lg bg-white w-5/6 shadow-2xl mt-6 mb--20 flex flex-row game ">
            <div className="w-1/2 ml-5">
              <div className="flex flex-row font-bold text-xs mt-4">
                <span className="m-3 "> Store </span>
                <img src={arrow} />
                <span className="m-3 "> Games</span>
                <img src={arrow} />
                <span className="m-3 "> Stardew Valley</span>
              </div>

              <div className=" m-4">
                <div className="snap-x ">
                  <div className="">
                    <img
                      src="https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_656/b_white/f_auto/q_auto/ncom/en_US/games/switch/s/stardew-valley-switch/hero"
                      className="rounded-lg"
                    />
                  </div>
                </div>
              </div>

              <Slider />

              <div className=" h-50 ">
                <div className="bg-white   rounded-lg h-20 w-96 flex mb-5">
                  <img src={esrb} className="h-16 m-2" />
                  <div className="ml-2">
                    <div className="m-2 text-xs  ">
                      Fantasy Violence, Use of Alcohol, Use of Tobacco,
                      Simulated Gambling, Mild Language, Mild Blood
                    </div>
                    <div className="border-b-4 w-288 rounded-lg"></div>
                    <div className="m-2 text-xs">Users Interact</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-1/2 mt-24 ">
              <div className="border-l-2 border-red-600 h-8 ">
                {" "}
                <span className="ml-2"> Nintendo Switch </span>
              </div>
              <h1 className="font-bold h-16 mt-8 font-bold">Stardew Valley</h1>
              <div className="flex flex-row h-16">
                <h1 className="font-bold m-2">$14.99</h1>
                <button className="w-1/5 ml-80">

                  <img className="w-1/2" src={heart} />
                </button>
              </div>
              <div className="flex flex-row">
                <img
                  className="h-8 "
                  src="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.25/c_scale,w_100/Design%20System/Component%20Library/Icon/my-nintendo-gold-coin.png"
                />
                <span className="text-xs h-10 m-1">
                  Eligible for up to 75 Gold Points
                </span>
              </div>
              <div>
                <button className="bg-red w-5/6 text-white rounded-lg h-9 flex flex-row justify-center mt-2 hover:bg-red-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    width="24"
                    role="presentation"
                    alt=""
                    data-testid="DownloadIcon"
                    color="currentColor"
                    className="m-2"
                  >
                    <path
                      d="M4.3 19.4v5.3c0 .5.5.9 1 .9h21.4c.5 0 1-.5 1-.9v-5.3H32v6.3c-.2 2.2-2.1 4-4.4 4H4.2c-2.3 0-4.2-1.8-4.2-4v-6.3h4.3zM17.9 2.2v12.2l5-4.8 2.8 2.8-9.8 9.9L6 12.5l2.6-2.8 5.2 4.8V2.2h4.1z"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <span className="m-2">Direct download</span>
                </button>
              </div>
              <div className="text-sm mt-4">
                This item will be sent to your system automatically after
                purchase.
              </div>
            </div>
          </div>
        </div>

        <div
          className="bg-white flex flex-row w-full  justify-center mt-10 "
          id="game-details"
        >
          <div className="w-5/6 flex flex-row game-details">
            <div className=" w-1/2 m-3">
              <h2 className="font-bold">You're moving to the valley...</h2>
              <div>
                <div>
                  <div>
                    <p className="text-sm">
                      You’ve inherited your grandfather’s old farm plot in
                      Stardew Valley. Armed with hand-me-down tools and a few
                      coins, you set out to begin your new life. Can you learn
                      to live off the land and turn these overgrown fields into
                      a thriving home? It won’t be easy. Ever since Joja
                      Corporation came to town, the old ways of life have all
                      but disappeared. The community center, once the town’s
                      most vibrant hub of activity, now lies in shambles. But
                      the valley seems full of opportunity. With a little
                      dedication, you might just be the one to restore Stardew
                      Valley to greatness!
                      <br />
                      <br />
                      Now with Multiplayer! Invite 1-3 players to join you in
                      the valley! Players can{" "}
                      <span
                        className="!visible hidden text-center"
                        id="collapseExample"
                        data-twe-collapse-item
                      >
                        work together to build a thriving farm, share resources,
                        and build relationships with townspeople or each other.
                        As more hands are better than one, players have the
                        option to scale profit margin on produce sold for a more
                        challenging experience.
                      </span>
                    </p>
                  </div>
                </div>
                <button
                  className=" flex flex-row m-2 "
                  type="button"
                  data-twe-collapse-init
                  data-twe-target="#collapseExample"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  <img src={plus} className="mr-2" />
                  <span className="text-red-600 font-bold">Read more</span>
                </button>

                <p className="text-xs m-2 ">
                  Software description provided by the publisher.
                </p>
              </div>
              <a
                href="http://www.stardewvalley.net"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-red hover:bg-red-600 text-white rounded-lg transition duration-300 h-10 w-80">
                  <span className="m-4 font-bold">
                    Explore this game's official website
                  </span>
                </button>
              </a>
            </div>
            <div className=" w-1/2  ">
              <div>
                <img
                  alt="Stardew Valley"
                  loading="lazy"
                  className="rounded-lg"
                  src="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.0/c_scale,w_600/ncom/en_US/games/switch/s/stardew-valley-switch/hero"
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className="bg-white flex flex-row w-full  justify-center mt-10 "
          id="game-about"
        >
          <div className="w-5/6 flex flex-row ">
            <div className="w-1/2 rounded-lg bg-gray h-50 m-2">
              <h2 className="text-center font-bold mt-4 mb-2">ESRB rating</h2>
              <div className="bg-white  shadow-2xl rounded-lg h-20 w-96 flex  ml-54 mb-5">
                <img src={esrb} className="h-16  m-2" />
                <div className="ml-2">
                  <div className="m-2 text-xs  ">
                    Fantasy Violence, Use of Alcohol, Use of Tobacco, Simulated
                    Gambling, Mild Language, Mild Blood
                  </div>
                  <div className="border-b-4 w-288 rounded-lg"></div>
                  <div className="m-2 text-xs">Users Interact</div>
                </div>
              </div>
            </div>
            <div className="w-1/2 rounded-lg bg-gray  h-50 m-2  ">
              <h2 className="text-center font-bold mt-4 mb-4">
                Supported play modes
              </h2>
              <div className="">
                <div className="flex flex-row text-center space-x-4 justify-center">
                  <div className="w-1/5">
                    <div className="flex justify-center bg-dark-gray rounded-lg">
                      <img src={tv} className="invert" />
                    </div>
                    <p>TV</p>
                  </div>
                  <div className="w-1/5 ">
                    <div className="flex justify-center bg-dark-gray rounded-lg ">
                      <img src={tablet} className="invert" />
                    </div>
                    <p>Tabletop</p>
                  </div>
                  <div className="w-1/5 ">
                    <div className="flex justify-center bg-dark-gray rounded-lg">
                      <img src={handheld} className="invert" />
                    </div>
                    <p>Handheld</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white flex w-full  justify-center mt-10">
          <div className="5/6 flex flex-col">
            <div className="flex flex-row border-y-2">
              <img src={calender} className="m-2 h-8" />
              <h3 className="w-1/3 mt-5">Release date</h3>
              <div className="w-1/3 mt-5">
                <div>October 5, 2017</div>
              </div>
            </div>
            <div className="flex flex-row border-b-2">
              <img src={players} className="m-2 h-8" />
              <h3 className="w-1/3 mt-3">No. of players</h3>
              <div className="w-1/2 mt-5 flex flex-row">
                <div className="w-1/2">
                  <a
                    target="_self"
                    href="https://www.nintendo.com/us/search/#cat=gme&f=genres&genres=Role-Playing"
                    className="text-red-600 hover:cursor-pointer underline hover:text-red-950 hover:decoration-red-950 decoration-red-700 font-bold"
                  >
                    Single System (1)
                  </a>
                </div>

                <div className="w-1/2">
                  <a
                    target="_self"
                    href="https://www.nintendo.com/us/search/#cat=gme&f=playerCount&playerCount=Single%20Player"
                    className="text-red-600 hover:cursor-pointer underline hover:text-red-950 hover:decoration-red-950 decoration-red-700 font-bold"
                  >
                    Local wireless (1)
                  </a>
                </div>
                <div className="w-1/2">
                  <a
                    target="_self"
                    href="https://www.nintendo.com/us/search/#cat=gme&f=playerCount&playerCount=Single%20Player"
                    className="text-red-600 hover:cursor-pointer underline hover:text-red-950 hover:decoration-red-950 decoration-red-700 font-bold"
                  >
                    Online (1-4)
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-row border-b-2">
              <img src={gener} className="m-2 h-8" />
              <h3 className="w-1/3 mt-3">Genre</h3>
              <div className="w-1/3 mt-5 flex flex-row">
                <div className="w-1/3">
                  <a
                    target="_self"
                    href="https://www.nintendo.com/us/search/#cat=gme&f=playerCount&playerCount=4%2B "
                    className="text-red-600 hover:cursor-pointer underline hover:text-red-950 hover:decoration-red-950 decoration-red-700 font-bold"
                  >
                    Role-Playing
                  </a>
                </div>

                <div className="w-1/3">
                  <a
                    target="_self"
                    href="https://www.nintendo.com/us/search/#cat=gme&f=genres&genres=Simulation"
                    className="text-red-600 hover:cursor-pointer underline hover:text-red-950 hover:decoration-red-950 decoration-red-700 font-bold"
                  >
                    Simulation
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-row border-b-2">
              <img src={publisher} className="m-2 h-8" />
              <h3 className="w-1/3 mt-3">Publisher</h3>
              <div className="w-1/2 mt-5">
                <div>
                  <a
                    target="_self"
                    href="/us/search/#cat=gme&amp;f=softwarePublisher&amp;softwarePublisher=ConcernedApe"
                    className="text-red-600 hover:cursor-pointer underline hover:text-red-950 hover:decoration-red-950 decoration-red-700 font-bold"
                  >
                    ConcernedApe
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-row border-b-2">
              <img src={rating} className="m-2 h-8" />
              <h3 className="w-1/3 mt-3">ESRB rating</h3>
              <div className="w-1/2 mt-5">
                <div>
                  <a
                    target="_self"
                    href="/us/search/#cat=gme&amp;sort=df&amp;f=esrbRating&amp;esrbRating=E10"
                    className="text-red-600 hover:cursor-pointer underline hover:text-red-950 hover:decoration-red-950 decoration-red-700 font-bold"
                  >
                    Everyone 10+
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-row border-b-2">
              <img src={playmodes} className="m-2 h-8" />
              <h3 className="w-1/3 mt-3">Supported play modes</h3>
              <div className="w-1/2 mt-5">
                <div>TV mode, Tabletop mode, Handheld mode</div>
              </div>
            </div>
            <div className="flex flex-row border-b-2">
              <img src={filesize} className="m-2 h-8" />
              <h3 className="w-1/3 mt-3">Game file size</h3>
              <div className="w-1/2 mt-5">
                <div>1.5 GB</div>
              </div>
            </div>
            <div className="flex flex-row border-b-2">
              <img src={lang} className="m-2 h-8" />
              <h3 className="w-1/3 mt-3">Supported languages</h3>
              <div className="w-1/2 mt-5">
                <div>
                  English, French, German, Italian, Japanese, Korean,
                  Portuguese, Russian, Simplified Chinese, Spanish, Traditional
                  Chinese
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full mt-10" id="More-like-this">
          <div className="grid grid-rows-1 grid-flow-col gap-8  justify-center">
            <div className="rounded-lg border-2">
              <a
                className=""
                href="https://www.nintendo.com/us/store/products/ooblets-switch/"
              >
                <div className="cursor-pointer">
                  <img
                    className="h-48 w-52 rounded-lg hover:scale-110 transition-transform duration-300"
                    src="https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.25/c_scale,w_300/ncom/software/switch/70010000048967/06239b4e0fc9c468b2e031e7df0add51a23f0c2dd2b4fb6107d1cd886675043b"
                    alt="Ooblets"
                  />
                  <h3 className="hover:text-red-700 m-2 font-bold">Ooblets</h3>
                  <span className="text-sm m-2">9/1/22</span>
                  <div className="font-bold m-2">$29.99</div>
                  <div className="grid grid-flow-col gap-3 m-2">
                    <div className="border-l-2 border-red-500"></div>
                    <div className="text-sm">Nintendo Switch</div>
                    <div className="ml-5">
                      <img src={heart} alt="Heart" />
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="rounded-lg border-2">
              <a
                className=""
                href="https://www.nintendo.com/us/store/products/potion-permit-switch/"
              >
                <div className="cursor-pointer">
                  <img
                    className="h-48 w-52 rounded-t-lg hover:scale-110 transition-transform duration-300"
                    src="https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.25/c_scale,w_300/ncom/software/switch/70010000035808/c7e2f6fa63ac0ababd1c5806a3cf7da9de6a845aeca106c707f4204c817fdd40"
                  />
                  <h3 className="hover:text-red-700 m-2 font-bold">
                    Potion Permit
                  </h3>
                  <span className="text-sm m-2">9/22/22</span>
                  <div className="font-bold m-2">$19.99</div>
                  <div className="grid grid-flow-col gap-3 m-2">
                    <div className="border-l-2 border-red-500"></div>
                    <div className="text-sm">Nintendo Switch</div>
                    <div className="ml-5">
                      <img src={heart} alt="Heart" />
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="rounded-lg border-2">
              <a
                className=""
                href="https://www.nintendo.com/us/store/products/cozy-grove-switch/"
              >
                <div className="cursor-pointer">
                  <img
                    className="h-48 w-52 rounded-t-lg hover:scale-110 transition-transform duration-300"
                    src="https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.25/c_scale,w_300/ncom/software/switch/70010000035711/e20cef68d8e08b6115e8880f1f4dca2ce901236eb887d77b32f1555108b72317"
                  />
                  <h3 className="hover:text-red-700 m-2 font-bold">
                    Cozy Grove
                  </h3>
                  <span className="text-sm m-2">4/8/21</span>

                  <div className="font-bold m-2">$14.99</div>
                  <div className="grid grid-flow-col gap-3 m-2">
                    <div className="border-l-2 border-red-500"></div>
                    <div className="text-sm">Nintendo Switch</div>
                    <div className="ml-5">
                      <img src={heart} alt="Heart" />
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="rounded-lg border-2">
              <a
                className=""
                href="https://www.nintendo.com/us/store/products/animal-crossing-new-horizons-switch/"
              >
                <div className="cursor-pointer">
                  <img
                    className="h-48 w-52 rounded-t-lg hover:scale-110 transition-transform duration-300"
                    src="https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.25/c_scale,w_300/ncom/software/switch/70010000027619/9989957eae3a6b545194c42fec2071675c34aadacd65e6b33fdfe7b3b6a86c3a"
                    alt="Ooblets"
                  />
                  <h3 className="hover:text-red-700 m-2 font-bold w-4/6">
                    Animal Crossing™: New Horizons
                  </h3>
                  <span className="text-sm m-2">9/1/22</span>
                  <div className="font-bold m-2">$59.99</div>
                  <div className="grid grid-flow-col gap-3 m-2">
                    <div className="border-l-2 border-red-500"></div>
                    <div className="text-sm">Nintendo Switch</div>
                    <div className="ml-5">
                      <img src={heart} alt="Heart" />
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div
          className=" flex flex-row w-full  justify-center mt-10 "
          id="warning-text"
        >
          <div className="w-5/6 text-xs m-3">
            <div className="m-2">
              WARNING: If you have epilepsy or have had seizures or other
              unusual reactions to flashing lights or patterns, consult a doctor
              before playing video games. All users should read the Health and
              Safety Information available in the system settings before using
              this software.
            </div>
            <div className="m-2">
              Nintendo Switch Online membership (sold separately) and Nintendo
              Account required for online play. Not available in all countries.
              Internet access required for online features. Terms apply.
              nintendo.com/switch-online
            </div>
            <div className="m-2">
              Stardew Valley © ConcernedApe LLC 2016-2020. All rights reserved.
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
