import AppOne from "../../Image/appOne.png";
import AppTwo from "../../Image/appTwo.png";
import appThree from "../../Image/appThree.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
const MobileApp = () => {
  return (
    <div className="bg-black text-white">
      <div className="container mx-auto py-16">
        <div className="grid grid-cols-12">
          <div className="col-span-6">
            <img src={AppOne} />
          </div>
          <div className="col-span-6 py-20">
            <h1 className="lg:text-7xl font-bold">
              Leading Mobile App Development{" "}
              <span className="text-baseColor">Studio</span>
            </h1>
            <p className="py-12 lg:text-[24px] text-[12px]">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default
            </p>
            <button class="bg-baseColor  text-black lg:text-xl text-sm font-medium py-2 px-8 rounded mb-8">
              Let Start
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper bg-white text-black"
        >
          <SwiperSlide className="text-3xl ms-5 p-4 py-6 px-8 font-bold border-4 border-l-baseColor">
            {" "}
            "It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters"
            <p className="text-xl pt-6">Rober Cooper</p>
            <p className="text-xl text-borderColor">
              President CEO/, Performance Fast
            </p>
          </SwiperSlide>

          <SwiperSlide className="text-3xl ms-1 p-4 py-6 px-8 font-bold border-4 border-l-baseColor">
            {" "}
            "It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters"
            <p className="text-xl pt-6">Rober Cooper</p>
            <p className="text-xl text-borderColor">
              President CEO/, Performance Fast
            </p>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="container mx-auto grid grid-cols-12 lg:gap-16 sm:gap-10 lg:px-6 px-6 ">
        <div className="lg:col-span-6 md:col-span-12 sm:col-span-12 col-span-12 py-16">
          <h1 className="lg:text-5xl text-2xl font-medium">
            The Collect Companies Already Working{" "}
            <span className="text-baseColor">Engitech</span>
          </h1>
          <p className="py-7 lg:text-[20px] text-[12px]">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
          </p>
          <button class="bg-baseColor  text-black lg:text-xl text-sm font-medium py-2 px-8 rounded mb-8">
            Explore All Apps
          </button>
        </div>
        <div className="lg:col-span-6 md:col-span-12 sm:col-span-12 col-span-12">
          <img src={AppTwo} className="w-full h-auto rounded-lg shadow-lg" />
        </div>
      </div>
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-center text-6xl">
          Let Our Dedicated Team Take<br></br> the Responsibility
        </h1>
        <p className="py-7 lg:text-[20px] text-center text-[12px] max-w-4xl">
          As App Developers we build apps and digital products from the ground
          up that impact lives, facilitate change and ultimately succeed.
        </p>
      </div>

      {/* card   */}
      <div className="container  mx-auto grid grid-cols-12  lg:gap-8 py-8 lg:px-0  ">
        <div className="lg:col-span-4 md:col-span-6 sm:col-span-6 col-span-12 shadow-xl rounded-md py-6 border-2 px-8 border-borderColor text-start lg:mx-0 md:mx-0 mx-4 bg-black">
          <h1 className="lg:text-5xl  text-3xl font-medium text-baseColor  pt-8">
            01.
          </h1>
          <h1 className="lg:text-2xl  text-3xl font-medium pt-8">
            Bring Together the Right People in Team
          </h1>
          <p className="py-5 text-xl ">
            That has very much been the secret of our consistent success over
            the years. Below are a few steps of the process that we follow.
          </p>
        </div>

        <div className="lg:col-span-4 md:col-span-6 sm:col-span-6 col-span-12 shadow-xl rounded-md py-6 border-2 px-8 border-borderColor text-start lg:mx-0 md:mx-0 mx-4 bg-black">
          <h1 className="lg:text-5xl  text-3xl font-medium text-baseColor  pt-8">
            02.
          </h1>
          <h1 className="lg:text-2xl  text-3xl font-medium pt-8">
            Bring Together the Right People in Team
          </h1>
          <p className="py-5 text-xl ">
            That has very much been the secret of our consistent success over
            the years. Below are a few steps of the process that we follow.
          </p>
        </div>
        <div className="lg:col-span-4 md:col-span-6 sm:col-span-6 col-span-12 shadow-xl rounded-md py-6 border-2 px-8 border-borderColor text-start lg:mx-0 md:mx-0 mx-4 bg-black">
          <h1 className="lg:text-5xl  text-3xl font-medium text-baseColor  pt-8">
            03.
          </h1>
          <h1 className="lg:text-2xl  text-3xl font-medium pt-8">
            Bring Together the Right People in Team
          </h1>
          <p className="py-5 text-xl ">
            That has very much been the secret of our consistent success over
            the years. Below are a few steps of the process that we follow.
          </p>
        </div>
        <div className="lg:col-span-4 md:col-span-6 sm:col-span-6 col-span-12 shadow-xl rounded-md py-6 border-2 px-8 border-borderColor text-start lg:mx-0 md:mx-0 mx-4 bg-black">
          <h1 className="lg:text-5xl  text-3xl font-medium text-baseColor  pt-8">
            04.
          </h1>
          <h1 className="lg:text-2xl  text-3xl font-medium pt-8">
            Bring Together the Right People in Team
          </h1>
          <p className="py-5 text-xl ">
            That has very much been the secret of our consistent success over
            the years. Below are a few steps of the process that we follow.
          </p>
        </div>

        <div className="lg:col-span-4 md:col-span-6 sm:col-span-6 col-span-12 shadow-xl rounded-md py-6 border-2 px-8 border-borderColor text-start lg:mx-0 md:mx-0 mx-4 bg-black">
          <h1 className="lg:text-5xl  text-3xl font-medium text-baseColor  pt-8">
            05.
          </h1>
          <h1 className="lg:text-2xl  text-3xl font-medium pt-8">
            Bring Together the Right People in Team
          </h1>
          <p className="py-5 text-xl ">
            That has very much been the secret of our consistent success over
            the years. Below are a few steps of the process that we follow.
          </p>
        </div>
        <div className="lg:col-span-4 md:col-span-6 sm:col-span-6 col-span-12 shadow-xl rounded-md py-6 border-2 px-8 border-borderColor text-start lg:mx-0 md:mx-0 mx-4 bg-black">
          <h1 className="lg:text-5xl  text-3xl font-medium text-baseColor  pt-8">
            06.
          </h1>
          <h1 className="lg:text-2xl  text-3xl font-medium pt-8">
            Bring Together the Right People in Team
          </h1>
          <p className="py-5 text-xl ">
            That has very much been the secret of our consistent success over
            the years. Below are a few steps of the process that we follow.
          </p>
        </div>
      </div>
      <div className="container mx-auto mt-8  bg-white text-black rounded-md">
        <div className="grid grid-cols-12 px-24">
          <div className="col-span-9 ">
            <h1 className="text-5xl text-baseColor pt-8  font-bold">
              Got a Project or Idea?
            </h1>
            <p className="text-2xl py-4 pb-8">
              Leave your details and we’ll be in touch within 24 hours.
            </p>
          </div>
          <div className="col-span-3 pt-20">
            <button class="bg-baseColor  text-black lg:text-xl text-sm font-medium py-2 px-8 rounded mb-8">
              Get In Touch
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-16  grid grid-cols-12 lg:gap-16 sm:gap-10 lg:px-6 px-6 ">
        <div className="lg:col-span-6 md:col-span-12 sm:col-span-12 col-span-12">
          <h1 className="lg:text-5xl text-2xl font-medium">
            What We
            <span className="text-baseColor">Do</span>
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
                <p>Upgrade your engineering capacity</p>
                <p>Employ global development work standards.</p>
                <p>Maintains transparency throughout the project.</p>
              </div>
            </div>
          </p>

          <h1 className="lg:text-5xl text-2xl font-medium">
            What You Can
            <span className="text-baseColor">Do</span>
          </h1>
          <p className="py-12 lg:text-[20px] text-[12px]">
            Our dedicated software development team enables you to do many
            things.
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
                <p>Cut additional costs</p>
                <p>Increase the speed of delivery</p>
                <p>Access expertise that is not available in-house</p>
              </div>
            </div>
          </p>
          <button class="bg-baseColor  text-black lg:text-xl text-sm font-medium py-2 px-8 rounded mb-8">
            let's start
          </button>
        </div>
        <div className="lg:col-span-6 md:col-span-12 sm:col-span-12 col-span-12">
          <img src={appThree} />
        </div>
      </div>
    </div>
  );
};

export default MobileApp;
