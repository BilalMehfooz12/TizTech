import "./animation.css";
import designTwo from "../../Image/designImageTwo.png";
import GraphicImage1 from "../../Image/graphicsImage3 (1).jpg";
import GraphicImage2 from "../../Image/graphicsImage3 (2).jpg";
import GraphicImage3 from "../../Image/graphicsImage3 (3).jpg";

const Animation = () => {
  return (
    <div className="bg-black text-white">
      <div className="bg_image_graphic">
        <div className="bg_text">
          {" "}
          ASPIRING FORCE IN <span className="text-baseColor">DESIGN</span>
          <p className="py-8 lg:text-[20px] text-[12px] ">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum
          </p>
          <button class="bg-baseColor  text-black lg:text-xl text-sm font-medium py-2 px-8 rounded mb-8">
            Explore All Apps
          </button>
        </div>
      </div>
      <div className="container relative mx-auto grid grid-cols-12 -mt-20 py-8 lg:px-0  ">
        <div className="lg:col-span-4 md:col-span-6 sm:col-span-6 col-span-12 shadow-xl rounded-md py-6 border-2 px-8 border-borderColor text-start lg:mx-0 md:mx-0 mx-4 bg-black">
          <h1 className="lg:text-5xl  text-3xl font-medium  pt-8">STRATEGY</h1>
          <p className="py-5 text-2xl ">
            Let’s constantly innovate, look for what’s not there and stand up to
            make it happen.
          </p>
          <button class="bg-baseColor  text-black lg:text-xl text-sm font-medium py-2 px-8 rounded mb-8">
            View All
          </button>
        </div>
        <div className="lg:col-span-4 md:col-span-6 sm:col-span-6 col-span-12 shadow-xl rounded-md py-6 border-2 px-8 border-borderColor text-start lg:mx-0 md:mx-0 mx-4 bg-black">
          <h1 className="lg:text-5xl  text-3xl font-medium  pt-8">MARKETING</h1>
          <p className="py-5 text-2xl ">
            Let’s constantly innovate, look for what’s not there and stand up to
            make it happen.
          </p>
          <button class="bg-baseColor  text-black lg:text-xl text-sm font-medium py-2 px-8 rounded mb-8">
            View All
          </button>
        </div>
        <div className="lg:col-span-4 md:col-span-6 sm:col-span-6 col-span-12 shadow-xl rounded-md py-6 border-2 px-8 border-borderColor text-start lg:mx-0 md:mx-0 mx-4 bg-black">
          <h1 className="lg:text-5xl  text-3xl font-medium  pt-8">
            TECHNOLOGY
          </h1>
          <p className="py-5 text-2xl ">
            Let’s constantly innovate, look for what’s not there and stand up to
            make it happen.
          </p>
          <button class="bg-baseColor  text-black lg:text-xl text-sm font-medium py-2 px-8 rounded mb-8">
            View All
          </button>
        </div>
      </div>
      <div className="container mx-auto py-12 grid grid-cols-12 lg:gap-16 sm:gap-10 lg:px-6 px-6 ">
        <div className="lg:col-span-6 md:col-span-12 sm:col-span-12 col-span-12">
          <h1 className="lg:text-5xl text-2xl font-medium">
            BEING
            <span className="text-baseColor">SMART</span>
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
          <img src={designTwo} className="w-full h-auto rounded-lg shadow-lg" />
        </div>
      </div>

      {/* flip card */}
      <div className="container mx-auto pb-8">
        <div className="grid grid-cols-12 lg:gap-16">
          <div className="col-span-4">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img
                    src={GraphicImage1}
                    alt="Avatar"
                    className="w-full h-auto relative mb-3"
                  />
                  <p className="text-4xl font-bold text-white absolute  left-16 text-center">
                    Out Sourcing
                  </p>
                </div>
                <div class="flip-card-back">
                  <p className=" lg:text-[20px] text-[12px] px-16">
                    It is a long established fact that a reader will the
                    readable conten by the readable content of a page when
                    looking at its layout. t of a page when looking at its
                    more-or-less normal
                  </p>
                  <button class="bg-black  text-white lg:text-xl text-sm font-medium pt-1 pb-2 px-8 rounded mb-8 mt-4">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-4">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img
                    src={GraphicImage2}
                    alt="Avatar"
                    className="w-full h-auto relative mb-3"
                  />
                  <p className="text-4xl font-bold text-white absolute   left-8 text-center ">
                    Web Development
                  </p>
                </div>
                <div class="flip-card-back">
                  <p className=" lg:text-[20px] text-[12px] px-16">
                    It is a long established fact that a reader will the
                    readable conten by the readable content of a page when
                    looking at its layout. t of a page when looking at its
                    more-or-less normal
                  </p>
                  <button class="bg-black  text-white lg:text-xl text-sm font-medium pt-1 pb-2 px-8 rounded mb-8 mt-4">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-4">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img
                    src={GraphicImage3}
                    alt="Avatar"
                    className="w-full h-auto relative mb-3"
                  />
                  <p className="text-4xl font-bold text-white absolute   left-20 text-center">
                    Web Design
                  </p>
                </div>
                <div class="flip-card-back">
                  <p className=" lg:text-[20px] text-[12px] px-16">
                    It is a long established fact that a reader will the
                    readable conten by the readable content of a page when
                    looking at its layout. t of a page when looking at its
                    more-or-less normal
                  </p>
                  <button class="bg-black  text-white lg:text-xl text-sm font-medium pt-1 pb-2 px-8 rounded mb-8 mt-4">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-16  grid grid-cols-12 lg:gap-16 sm:gap-10 lg:px-6 px-6 ">
        <div className="lg:col-span-6 md:col-span-12 sm:col-span-12 col-span-12">
          <h1 className="lg:text-5xl text-2xl font-medium">
            OUR
            <span className="text-baseColor"> EXPERTISE</span>
          </h1>
          <p className="py-7 lg:text-[20px] text-[12px]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis Theme natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem
            quam semper.
            <br></br>
          </p>
          <button class="bg-baseColor  text-black lg:text-xl text-sm font-medium py-2 px-8 rounded mb-8">
            Explore All Apps
          </button>
        </div>
        <div className="lg:col-span-6 md:col-span-12 sm:col-span-12 col-span-12">
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-4  shadow-md  text-center py-8">
              <div className="flex justify-center">
                <svg
                  class="h-28 w-28 text-baseColor"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  {" "}
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />{" "}
                  <polyline points="7.5 4.21 12 6.81 16.5 4.21" />{" "}
                  <polyline points="7.5 19.79 7.5 14.6 3 12" />{" "}
                  <polyline points="21 12 16.5 14.6 16.5 19.79" />{" "}
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96" />{" "}
                  <line x1="12" y1="22.08" x2="12" y2="12" />
                </svg>
              </div>
              <p className="lg:text-[20px] pt-4 text-[12px] font-bold">
                Perfect Design
              </p>
            </div>
            <div className="col-span-4  shadow-md text-center py-8">
              <div className="flex justify-center">
                <svg
                  class="h-28 w-28 text-baseColor"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <p className="lg:text-[20px] pt-4 text-[12px] font-bold">
                Optimization
              </p>
            </div>
            <div className="col-span-4  shadow-md  text-center py-8">
              <div className="flex justify-center">
                <svg
                  class="h-28 w-28 text-baseColor"
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
                  <line x1="6" y1="5" x2="6" y2="19" />{" "}
                  <line x1="10" y1="5" x2="10" y2="19" />{" "}
                  <line x1="14" y1="5" x2="14" y2="19" />{" "}
                  <line x1="18" y1="5" x2="18" y2="19" />{" "}
                  <line x1="3" y1="17" x2="21" y2="7" />
                </svg>
              </div>
              <p className="lg:text-[20px] pt-4 text-[12px] font-bold">
                Marketing
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* who we are */}
      <div className="appointment">
        <div className="grid grid-cols-12 ">
          <div className="col-span-6"></div>
          <div className="col-span-6 py-8 px-8 text-black">
            <h1 className="lg:text-5xl text-2xl font-medium">
              MAKE AN APPOINTMEN
            </h1>
            <p className="py-7 lg:text-[20px] text-[12px]">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default
            </p>
            <button class="bg-black  text-white lg:text-xl text-sm font-medium py-2 px-8 rounded mb-8">
              Book Appointment
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-16 grid grid-cols-12 lg:gap-16 sm:gap-10 lg:px-6 px-6 ">
        <div className="lg:col-span-6 md:col-span-12 sm:col-span-12 col-span-12">
          <h1 className="lg:text-5xl text-2xl font-medium">
            WHO WE <span className="text-baseColor">ARE</span>
          </h1>
          <p className="py-7 lg:text-[20px] text-[12px]">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
          </p>
        </div>
        <div className="lg:col-span-6 md:col-span-12 sm:col-span-12 col-span-12">
          <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
            <p className="py-3 lg:text-[20px] text-[12px]">Marketing</p>
            <div
              class="bg-borderColor text-lg font-medium text-blue-100 text-end px-3 p-0.5 leading-none rounded-full py-1 "
              //   style="width: 45%"
              style={{ width: "80%" }}
            >
              {" "}
              80%
            </div>
            <p className="py-3 lg:text-[20px] text-[12px]">Creative</p>
            <div
              class="bg-baseColor text-lg font-medium text-blue-100 text-end px-3 p-0.5 leading-none rounded-full py-1 "
              //   style="width: 45%"
              style={{ width: "90%" }}
            >
              {" "}
              90%
            </div>
            <p className="py-3 lg:text-[20px] text-[12px]">ADVERTISEMENTS</p>
            <div
              class="bg-white text-lg font-medium text-black text-end px-3 p-0.5 leading-none rounded-full py-1 "
              //   style="width: 45%"
              style={{ width: "100%" }}
            >
              {" "}
              100%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Animation;
