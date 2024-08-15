import contentOne from "../../Image/contentOne.png";
import contentTwo from "../../Image/contentTwo.jpg";
import ContentThree from "../../Image/contentThree.png";

const ContentWriting = () => {
  return (
    <div className="bg-black text-white ">
      <div className=" container mx-auto  ">
        <div className="grid grid-cols-12 lg:gap-16">
          <div className="col-span-6 mt-16 ">
            <h1 className="text-6xl font-bold">
              Crafting copy that connects with your audience.
            </h1>
            <p className="py-12 lg:text-[20px] text-[12px]">
              t is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point.readable content of a page when looking at its layout. The
              point.
            </p>
            <button class="bg-baseColor  text-black lg:text-xl text-sm font-medium py-2 px-8 rounded mb-8">
              Get Started
            </button>
          </div>
          <div className="col-span-6">
            <img src={contentOne} className="w-full h-auto py-16" />
          </div>
        </div>
      </div>

      <div className="container  mx-auto grid grid-cols-12   lg:px-0 bg-borderColor ">
        <div className="lg:col-span-4 md:col-span-6 sm:col-span-6 col-span-12   py-6 border-2 px-8 border-r border-black text-start lg:mx-0 md:mx-0 mx-4 ">
          <div className="grid grid-cols-12">
            <div className="col-span-3">
              <svg
                class="h-16 w-16 text-baseColor my-4"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {" "}
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />{" "}
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
              </svg>
            </div>
            <div className="col-span-9">
              <h1 className="lg:text-xl  text-md font-bold ">
                Copywriter & SEO expert
              </h1>
              <p className=" text-[18px] ">
                Facilisis cras arcu quam maximus metus inceptos integer nascetur
                letius.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-4 md:col-span-6 sm:col-span-6 col-span-12   py-6 border-2 px-8 border-r border-black text-start lg:mx-0 md:mx-0 mx-4 ">
          <div className="grid grid-cols-12">
            <div className="col-span-3">
              <svg
                class="h-16 w-16 text-baseColor my-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {" "}
                <polygon points="12 2 2 7 12 12 22 7 12 2" />{" "}
                <polyline points="2 17 12 22 22 17" />{" "}
                <polyline points="2 12 12 17 22 12" />
              </svg>
            </div>
            <div className="col-span-9">
              <h1 className="lg:text-xl  text-md font-bold ">
                Creative & Content Writer
              </h1>
              <p className=" text-[18px] ">
                Facilisis cras arcu quam maximus metus inceptos integer nascetur
                letius.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-4 md:col-span-6 sm:col-span-6 col-span-12   py-6 border-2 px-8 border-r border-black text-start lg:mx-0 md:mx-0 mx-4 ">
          <div className="grid grid-cols-12">
            <div className="col-span-3">
              <svg
                class="h-16 w-16 text-baseColor my-3"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <circle cx="7" cy="18" r="2" /> <circle cx="7" cy="6" r="2" />{" "}
                <circle cx="17" cy="12" r="2" />{" "}
                <line x1="7" y1="8" x2="7" y2="16" />{" "}
                <path d="M7 8a4 4 0 0 0 4 4h4" />
              </svg>
            </div>
            <div className="col-span-9">
              <h1 className="lg:text-xl  text-md font-bold ">
                Advertisement Promotions
              </h1>
              <p className=" text-[18px] ">
                Facilisis cras arcu quam maximus metus inceptos integer nascetur
                letius.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" container mx-auto  py-8">
        <div className="grid grid-cols-12 lg:gap-16">
          <div className="col-span-6">
            <img src={contentTwo} className="w-full h-auto py-16" />
          </div>
          <div className="col-span-6 mt-16 ">
            <h1 className="text-6xl font-bold">
              Writing content like you've never had before.
            </h1>
            <p className="py-12 lg:text-[20px] text-[12px]">
              t is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point.readable content of a page when looking at its layout. The
              point.
            </p>
            <button class="bg-baseColor  text-black lg:text-xl text-sm font-medium py-2 px-8 rounded mb-8">
              Get Started
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-4xl mb-8">
        <h1 className="text-center text-6xl">We're here to write for you.</h1>
      </div>

      {/* card   */}
      <div className="container  mx-auto grid grid-cols-12  lg:gap-8 py-8 lg:px-0  ">
        <div className="lg:col-span-4 md:col-span-6 sm:col-span-6 col-span-12 shadow-xl rounded-md py-6 border-2 px-8 border-borderColor text-start lg:mx-0 md:mx-0 mx-4 bg-black">
          <h1 className="lg:text-4xl  text-3xl font-medium text-baseColor  pt-8">
            01
          </h1>
          <h1 className="lg:text-2xl  text-3xl font-medium pt-8">
            Simple Article
          </h1>
          <p className="py-5 text-xl ">
            That has very much been the secret of our consistent success over
            the years. Below are a few steps of the process that we follow.
          </p>
        </div>

        <div className="lg:col-span-4 md:col-span-6 sm:col-span-6 col-span-12 shadow-xl rounded-md py-6 border-2 px-8 border-borderColor text-start lg:mx-0 md:mx-0 mx-4 bg-black">
          <h1 className="lg:text-4xl  text-3xl font-medium text-baseColor  pt-8">
            02
          </h1>
          <h1 className="lg:text-2xl  text-3xl font-medium pt-8">
            SEO Article
          </h1>
          <p className="py-5 text-xl ">
            That has very much been the secret of our consistent success over
            the years. Below are a few steps of the process that we follow.
          </p>
        </div>
        <div className="lg:col-span-4 md:col-span-6 sm:col-span-6 col-span-12 shadow-xl rounded-md py-6 border-2 px-8 border-borderColor text-start lg:mx-0 md:mx-0 mx-4 bg-black">
          <h1 className="lg:text-4xl  text-3xl font-medium text-baseColor  pt-8">
            03
          </h1>
          <h1 className="lg:text-2xl  text-3xl font-medium pt-8">
            Landing Page
          </h1>
          <p className="py-5 text-xl ">
            That has very much been the secret of our consistent success over
            the years. Below are a few steps of the process that we follow.
          </p>
        </div>
        <div className="lg:col-span-4 md:col-span-6 sm:col-span-6 col-span-12 shadow-xl rounded-md py-6 border-2 px-8 border-borderColor text-start lg:mx-0 md:mx-0 mx-4 bg-black">
          <h1 className="lg:text-54l  text-3xl font-medium text-baseColor  pt-8">
            04
          </h1>
          <h1 className="lg:text-2xl  text-3xl font-medium pt-8">
            Movie Script
          </h1>
          <p className="py-5 text-xl ">
            That has very much been the secret of our consistent success over
            the years. Below are a few steps of the process that we follow.
          </p>
        </div>

        <div className="lg:col-span-4 md:col-span-6 sm:col-span-6 col-span-12 shadow-xl rounded-md py-6 border-2 px-8 border-borderColor text-start lg:mx-0 md:mx-0 mx-4 bg-black">
          <h1 className="lg:text-5xl  text-3xl font-medium text-baseColor  pt-8">
            05
          </h1>
          <h1 className="lg:text-2xl  text-3xl font-medium pt-8">
            Translate Article
          </h1>
          <p className="py-5 text-xl ">
            That has very much been the secret of our consistent success over
            the years. Below are a few steps of the process that we follow.
          </p>
        </div>
        <div className="lg:col-span-4 md:col-span-6 sm:col-span-6 col-span-12 shadow-xl rounded-md py-6 border-2 px-8 border-borderColor text-start lg:mx-0 md:mx-0 mx-4 bg-black">
          <h1 className="lg:text-4xl  text-3xl font-medium text-baseColor  pt-8">
            06
          </h1>
          <h1 className="lg:text-2xl  text-3xl font-medium pt-8">
            Media Placement
          </h1>
          <p className="py-5 text-xl ">
            That has very much been the secret of our consistent success over
            the years. Below are a few steps of the process that we follow.
          </p>
        </div>
      </div>

      <div className="container mx-auto  grid grid-cols-12 lg:gap-16 sm:gap-10 lg:px-6 px-6 ">
        <div className="lg:col-span-6 md:col-span-12 sm:col-span-12 col-span-12 py-16">
          <h1 className="lg:text-5xl text-2xl font-medium">
            Helping businesses succeed is what we do.
            <span className="text-baseColor">we do.</span>
          </h1>
          <p className="py-12 lg:text-[20px] text-[12px]">
            Our software development center provides you with the best
            resources, expertise.
            <br></br>
            <br></br>
            <div className="grid grid-cols-12">
              <div className="col-span-1">
                <svg
                  class="h-8 w-8 text-baseColor"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  {" "}
                  <path stroke="none" d="M0 0h24v24H0z" />{" "}
                  <path d="M5 12l5 5l10 -10" />
                </svg>
                <svg
                  class="h-8 w-8 text-baseColor"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  {" "}
                  <path stroke="none" d="M0 0h24v24H0z" />{" "}
                  <path d="M5 12l5 5l10 -10" />
                </svg>
                <svg
                  class="h-8 w-8 text-baseColor"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  {" "}
                  <path stroke="none" d="M0 0h24v24H0z" />{" "}
                  <path d="M5 12l5 5l10 -10" />
                </svg>
              </div>
              <div className="col-span-11">
                <p>Smart & Creative Solutions</p>
                <p>High-Quality Content</p>
                <p>SEO Optimized Content</p>
              </div>
            </div>
          </p>
          <button class="bg-baseColor  text-black lg:text-xl text-sm font-medium py-2 px-8 rounded mb-8">
            let's start
          </button>
        </div>
        <div className="lg:col-span-6 md:col-span-12 sm:col-span-12 col-span-12">
          <img src={ContentThree} />
        </div>
      </div>
    </div>
  );
};

export default ContentWriting;
