import gameOne from "../../Image/gameImgOne.jpg";
import gameTwo from "../../Image/gameTwo.jpg";
import gameThree from "../../Image/gameThree.jpg";
import gameFour from "../../Image/gameFour.jpg";
import gameFive from "../../Image/gameFive.jpg";
import gameSix from "../../Image/gameSix.jpg";
import gameseven from "../../Image/gameSeven.jpg";
import gameEight from "../../Image/gameEight.webp";

const Game = () => {
  return (
    <div className="bg-black text-white">
      <div className=" container mx-auto py-16 ">
        <div className="grid grid-cols-12 lg:gap-16">
          <div className="col-span-6 mt-16 ">
            <h1 className="text-6xl font-bold">
              WE DEVELOP GAMES WITH CREATIVE GAMEPLAY AND STORIES BECOME THE
              LAST HOPE FOR THE UNIVERSE IN THE ALL-NEW STAR GAZER
            </h1>
          </div>
          <div className="col-span-6">
            <img src={gameOne} className="w-full h-auto" />
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-4xl pb-8">
        <h1 className="text-center text-6xl">LATEST RELEASES</h1>
      </div>

      {/* card   */}
      <div className="container  mx-auto grid grid-cols-12  lg:gap-8 py-8 lg:px-0  ">
        <div className="lg:col-span-4 md:col-span-6 sm:col-span-6 col-span-12 shadow-xl rounded-md  border-2  border-borderColor text-start lg:mx-0 md:mx-0 mx-4 bg-black">
          <div className="relative">
            <img src={gameTwo} className=" w-full h-auto" />
            <button className="absolute bg-baseColor top-8 right-6 text-black lg:text-xl text-sm font-medium py-2 px-8 rounded">
              FPS
            </button>
          </div>

          <h1 className="lg:text-2xl  text-3xl font-medium pt-8 px-8">
            Rainbow Seven
          </h1>
          <p className="py-5 text-xl px-8">
            Even the all-powerful pointing has no control about the blind texts
            it is an almost unorthographic life.
          </p>
          <button class="bg-baseColor  text-black lg:text-xl text-sm font-medium py-2 px-8 rounded mb-8 mx-8 ">
            View All
          </button>
        </div>

        <div className="lg:col-span-4 md:col-span-6 sm:col-span-6 col-span-12 shadow-xl rounded-md  border-2  border-borderColor text-start lg:mx-0 md:mx-0 mx-4 bg-black">
          <div className="relative">
            <img src={gameThree} className=" w-full h-auto" />
            <button className="absolute bg-baseColor top-8 right-6 text-black lg:text-xl text-sm font-medium py-2 px-8 rounded">
              ADVENTURE
            </button>
          </div>

          <h1 className="lg:text-2xl  text-3xl font-medium pt-8 px-8">
            Racing Series 3
          </h1>
          <p className="py-5 text-xl px-8">
            Even the all-powerful pointing has no control about the blind texts
            it is an almost unorthographic life.
          </p>
          <button class="bg-baseColor  text-black lg:text-xl text-sm font-medium py-2 px-8 rounded mb-8 mx-8 ">
            View All
          </button>
        </div>

        <div className="lg:col-span-4 md:col-span-6 sm:col-span-6 col-span-12 shadow-xl rounded-md  border-2  border-borderColor text-start lg:mx-0 md:mx-0 mx-4 bg-black">
          <div className="relative">
            <img src={gameFour} className=" w-full h-auto" />
            <button className="absolute bg-baseColor top-8 right-6 text-black lg:text-xl text-sm font-medium py-2 px-8 rounded">
              FPS
            </button>
          </div>

          <h1 className="lg:text-2xl  text-3xl font-medium pt-8 px-8">
            Stargazer II
          </h1>
          <p className="py-5 text-xl px-8">
            Even the all-powerful pointing has no control about the blind texts
            it is an almost unorthographic life.
          </p>
          <button class="bg-baseColor  text-black lg:text-xl text-sm font-medium py-2 px-8 rounded mb-8 mx-8 ">
            View All
          </button>
        </div>

        <div className="lg:col-span-4 md:col-span-6 sm:col-span-6 col-span-12 shadow-xl rounded-md  border-2  border-borderColor text-start lg:mx-0 md:mx-0 mx-4 bg-black">
          <div className="relative">
            <img src={gameFive} className=" w-full h-auto" />
            <button className="absolute bg-baseColor top-8 right-6 text-black lg:text-xl text-sm font-medium py-2 px-8 rounded">
              ADVENTURE
            </button>
          </div>

          <h1 className="lg:text-2xl  text-3xl font-medium pt-8 px-8">
            Lost Ark
          </h1>
          <p className="py-5 text-xl px-8">
            Even the all-powerful pointing has no control about the blind texts
            it is an almost unorthographic life.
          </p>
          <button class="bg-baseColor  text-black lg:text-xl text-sm font-medium py-2 px-8 rounded mb-8 mx-8 ">
            View All
          </button>
        </div>

        <div className="lg:col-span-4 md:col-span-6 sm:col-span-6 col-span-12 shadow-xl rounded-md  border-2  border-borderColor text-start lg:mx-0 md:mx-0 mx-4 bg-black">
          <div className="relative">
            <img src={gameSix} className=" w-full h-auto" />
            <button className="absolute bg-baseColor top-8 right-6 text-black lg:text-xl text-sm font-medium py-2 px-8 rounded">
              PLATFORMER
            </button>
          </div>

          <h1 className="lg:text-2xl  text-3xl font-medium pt-8 px-8">
            Jungle Pharaoh
          </h1>
          <p className="py-5 text-xl px-8">
            Even the all-powerful pointing has no control about the blind texts
            it is an almost unorthographic life.
          </p>
          <button class="bg-baseColor  text-black lg:text-xl text-sm font-medium py-2 px-8 rounded mb-8 mx-8 ">
            View All
          </button>
        </div>
        <div className="lg:col-span-4 md:col-span-6 sm:col-span-6 col-span-12 shadow-xl rounded-md  border-2  border-borderColor text-start lg:mx-0 md:mx-0 mx-4 bg-black">
          <div className="relative">
            <img src={gameseven} className=" w-full h-auto" />
            <button className="absolute bg-baseColor top-8 right-6 text-black lg:text-xl text-sm font-medium py-2 px-8 rounded">
              FPS
            </button>
          </div>

          <h1 className="lg:text-2xl  text-3xl font-medium pt-8 px-8">
            World War V
          </h1>
          <p className="py-5 text-xl px-8">
            Even the all-powerful pointing has no control about the blind texts
            it is an almost unorthographic life.
          </p>
          <button class="bg-baseColor  text-black lg:text-xl text-sm font-medium py-2 px-8 rounded mb-8 mx-8 ">
            View All
          </button>
        </div>
      </div>
      <div className=" container mx-auto py-16 ">
        <div className="grid grid-cols-12 lg:gap-16">
          <div className="col-span-6 mt-16 ">
            <h1 className="text-6xl font-bold">
              GAMES FOR THOSE THAT AREN'T{" "}
              <span className="text-baseColor">'GAMERS'</span>
            </h1>
            <p className="py-12 lg:text-[20px] text-[12px]">
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic life.<br></br>
              <br></br>
              When she reached the first hills of the Italic Mountains, she had
              a last view back on the skyline of her hometown Bookmarksgrove,
              the headline of Alphabet Village and the subline of her own road,
              the Line Lane. Pityful a rethoric question ran over her cheek.
            </p>
          </div>
          <div className="col-span-6">
            <img src={gameEight} className="w-full h-auto rounded-md" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
