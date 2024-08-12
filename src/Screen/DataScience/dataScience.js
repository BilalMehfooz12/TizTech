import dataOne from "../../Image/dataScienceOne.png";
import dataTwo from "../../Image/dataScienceTwo.png";
import dataFour from "../../Image/dataScienceFour.png";
import "./dataScience.css";

const DataScience = () => {
  return (
    <div className="bg-black text-white">
      <div className="container mx-auto py-16 ">
        <h1 className="text-7xl text-center font-bold">
          Engitech Data Sciences &<br></br> Analysis SASS
        </h1>
        <img src={dataOne} className="w-full h-auto pt-16" />
      </div>
      <div className="container mx-auto -mt-40  grid grid-cols-12 lg:gap-16 sm:gap-10 lg:px-6 px-6 ">
        <div className="lg:col-span-6 md:col-span-12 sm:col-span-12 col-span-12 py-16">
          <h1 className="lg:text-5xl text-2xl font-medium">
            What’s Engitech Data Science services?
            <span className="text-baseColor">services?</span>
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
                <p>Upgrade your engineering capacity</p>
                <p>Employ global development work standards.</p>
                <p>Maintains transparency throughout the project.</p>
                <p>Maintains transparency throughout the project.</p>
              </div>
            </div>
          </p>
          <button class="bg-baseColor  text-black lg:text-xl text-sm font-medium py-2 px-8 rounded mb-8">
            let's start
          </button>
        </div>
        <div className="lg:col-span-6 md:col-span-12 sm:col-span-12 col-span-12">
          <img src={dataTwo} />
        </div>
      </div>
      <div className="container relative mx-auto grid grid-cols-12  py-8 lg:px-0 lg:gap-16  ">
        <div className="lg:col-span-4 md:col-span-6 sm:col-span-6 col-span-12 shadow-xl rounded-md py-6 border-2 px-8 border-borderColor text-start lg:mx-0 md:mx-0 mx-4 bg-black">
          <div className="grid grid-cols-12">
            <div className="col-span-3">
              <svg
                class="h-16 w-16 text-baseColor mt-2"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {" "}
                <ellipse cx="12" cy="5" rx="9" ry="3" />{" "}
                <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />{" "}
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
              </svg>
            </div>
            <div className="col-span-9">
              <h1 className="lg:text-5xl  text-3xl font-medium ">25 K</h1>
              <p className=" text-2xl ">Database everyday</p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-4 md:col-span-6 sm:col-span-6 col-span-12 shadow-xl rounded-md py-6 border-2 px-8 border-borderColor text-start lg:mx-0 md:mx-0 mx-4 bg-black">
          <div className="grid grid-cols-12">
            <div className="col-span-3">
              <svg
                class="h-16 w-16 text-baseColor mt-2"
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
                <circle cx="9" cy="7" r="4" />{" "}
                <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />{" "}
                <line x1="19" y1="7" x2="19" y2="10" />{" "}
                <line x1="19" y1="14" x2="19" y2="14.01" />
              </svg>
            </div>
            <div className="col-span-9">
              <h1 className="lg:text-5xl  text-3xl font-medium ">8760 +</h1>
              <p className=" text-2xl ">Clients on worldwide</p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-4 md:col-span-6 sm:col-span-6 col-span-12 shadow-xl rounded-md py-6 border-2 px-8 border-borderColor text-start lg:mx-0 md:mx-0 mx-4 bg-black">
          <div className="grid grid-cols-12">
            <div className="col-span-3">
              <svg
                class="h-16 w-16 text-baseColor mt-2"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {" "}
                <line x1="12" y1="1" x2="12" y2="23" />{" "}
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </div>
            <div className="col-span-9">
              <h1 className="lg:text-5xl  text-3xl font-medium ">3265 +</h1>
              <p className=" text-2xl ">Transaction Done</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-4xl py-16">
        <h1 className="text-center text-6xl">
          Perfect Solutions for Data Science & <br></br> Analysis SASS{" "}
        </h1>
      </div>

      {/* card   */}
      <div className="container  mx-auto grid grid-cols-12  lg:gap-8 py-8 lg:px-0  ">
        <div className="lg:col-span-4 md:col-span-6 sm:col-span-6 col-span-12 shadow-xl rounded-md py-6 border-2 px-8 border-borderColor text-start lg:mx-0 md:mx-0 mx-4 bg-black">
          <h1 className="lg:text-4xl  text-3xl font-medium text-baseColor  pt-8">
            CASE STUDY
          </h1>
          <h1 className="lg:text-2xl  text-3xl font-medium pt-8">
            Data Analysis
          </h1>
          <p className="py-5 text-xl ">
            That has very much been the secret of our consistent success over
            the years. Below are a few steps of the process that we follow.
          </p>
        </div>

        <div className="lg:col-span-4 md:col-span-6 sm:col-span-6 col-span-12 shadow-xl rounded-md py-6 border-2 px-8 border-borderColor text-start lg:mx-0 md:mx-0 mx-4 bg-black">
          <h1 className="lg:text-4xl  text-3xl font-medium text-baseColor  pt-8">
            CASE STUDY
          </h1>
          <h1 className="lg:text-2xl  text-3xl font-medium pt-8">
            Managed Analysis
          </h1>
          <p className="py-5 text-xl ">
            That has very much been the secret of our consistent success over
            the years. Below are a few steps of the process that we follow.
          </p>
        </div>
        <div className="lg:col-span-4 md:col-span-6 sm:col-span-6 col-span-12 shadow-xl rounded-md py-6 border-2 px-8 border-borderColor text-start lg:mx-0 md:mx-0 mx-4 bg-black">
          <h1 className="lg:text-4xl  text-3xl font-medium text-baseColor  pt-8">
            CASE STUDY
          </h1>
          <h1 className="lg:text-2xl  text-3xl font-medium pt-8">
            Big Data Services
          </h1>
          <p className="py-5 text-xl ">
            That has very much been the secret of our consistent success over
            the years. Below are a few steps of the process that we follow.
          </p>
        </div>
        <div className="lg:col-span-4 md:col-span-6 sm:col-span-6 col-span-12 shadow-xl rounded-md py-6 border-2 px-8 border-borderColor text-start lg:mx-0 md:mx-0 mx-4 bg-black">
          <h1 className="lg:text-54l  text-3xl font-medium text-baseColor  pt-8">
            CASE STUDY
          </h1>
          <h1 className="lg:text-2xl  text-3xl font-medium pt-8">
            Business Intelligent
          </h1>
          <p className="py-5 text-xl ">
            That has very much been the secret of our consistent success over
            the years. Below are a few steps of the process that we follow.
          </p>
        </div>

        <div className="lg:col-span-4 md:col-span-6 sm:col-span-6 col-span-12 shadow-xl rounded-md py-6 border-2 px-8 border-borderColor text-start lg:mx-0 md:mx-0 mx-4 bg-black">
          <h1 className="lg:text-5xl  text-3xl font-medium text-baseColor  pt-8">
            CASE STUDY
          </h1>
          <h1 className="lg:text-2xl  text-3xl font-medium pt-8">
            Data Management
          </h1>
          <p className="py-5 text-xl ">
            That has very much been the secret of our consistent success over
            the years. Below are a few steps of the process that we follow.
          </p>
        </div>
        <div className="lg:col-span-4 md:col-span-6 sm:col-span-6 col-span-12 shadow-xl rounded-md py-6 border-2 px-8 border-borderColor text-start lg:mx-0 md:mx-0 mx-4 bg-black">
          <h1 className="lg:text-4xl  text-3xl font-medium text-baseColor  pt-8">
            CASE STUDY
          </h1>
          <h1 className="lg:text-2xl  text-3xl font-medium pt-8">
            Big Data Services
          </h1>
          <p className="py-5 text-xl ">
            That has very much been the secret of our consistent success over
            the years. Below are a few steps of the process that we follow.
          </p>
        </div>
      </div>

      <div className="container mx-auto grid grid-cols-12 lg:gap-16 sm:gap-10 lg:px-6 px-6 pt-16 ">
        <div className="lg:col-span-6 md:col-span-12 sm:col-span-12 col-span-12">
          <img src={dataFour} className="w-full h-auto  shadow-lg" />
        </div>
        <div className="lg:col-span-6 md:col-span-12 sm:col-span-12 col-span-12">
          <h1 className="lg:text-5xl text-2xl font-medium lg:pt-0 pt-8">
            Trusted From Over +3K{" "}
            <span className="text-baseColor">Happy Clients</span>
          </h1>
          <p className="py-12 lg:text-[20px] text-[12px]">
            It is a long established fact that a reader will be distracted by of
            using Lorem Ipsum is that it has a more-or-less normal distribution
            of letters, as opposed to using 'Content here, content here', making
            it look like readable English. Many desktop publishing packages and
            web page editors now use Lorem Ipsum as their default
          </p>
          <button class="bg-baseColor  text-black lg:text-xl text-sm font-medium py-2 px-8 rounded mb-8">
            Explore All Apps
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataScience;
