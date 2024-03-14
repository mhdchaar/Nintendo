import React from "react";
import "./main.css";
import "./addons.css";


import Header from "./Header";
import Footer from "./Footer";

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


import { Collapse, initTWE } from "tw-elements";
import { tab } from "@testing-library/user-event/dist/tab";

initTWE({ Collapse });


function App() {

  return (
    <div className="font-sans">
      <Header />
      <div className="container">
        <div className="drop-menu flex flex-wrap justify-center">
          <button className="m-3">
            My Nintendo Store
          </button>
          <button className="m-3">
            Games
          </button>
          <button className="m-3">
            Nintendo Switch
          </button>
          <button className="m-3">
            News & Events
          </button>
          <button className="m-3">
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
          <div className=" container rounded-lg bg-white w-4/6 shadow-2xl mt-6 mb--20 flex flex-row game ">
            <div className="w-4/6 ml-5">
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

            <div className="w-2/6 mt-24 ">
              <div className="border-l-2 border-red-600 h-8 ">
                {" "}
                <span className="ml-2"> Nintendo Switch </span>
              </div>
              <h1 className="font-bold h-16 mt-8 font-bold">Stardew Valley</h1>
              <div className="flex flex-row h-16">
                <h1 className="font-bold m-2">$14.99</h1>
                <button className="w-1/5 mr-10">
                  {" "}
                  <img src={heart} />
                </button>
              </div>
              <div>
                coins{" "}
                <span className="text-xs h-10">
                  Eligible for up to 75 Gold Points
                </span>
              </div>
            </div>
          </div>
        </div>

        <div
          className="bg-white flex flex-row w-full  justify-center mt-10 "
          id="game-details"
        >
          <div className="w-4/6 flex flex-row game-details">
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
          <div className="w-4/6 flex flex-row ">
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
          <div className="w-4/6 flex flex-col">
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
                  <h3 className="hover:text-red-700 m-2 font-bold">Potion Permit</h3>
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
                  <h3 className="hover:text-red-700 m-2 font-bold">Cozy Grove</h3>
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
                  <h3 className="hover:text-red-700 m-2 font-bold w-4/6">Animal Crossing™: New Horizons</h3>
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
          <div className="w-4/6 text-xs m-3">
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
