import serviceImageOne from "../../Image/WebImageOne.png";
import webCardOne from "../../Image/webcard1 (1).jpg";
import webCardTwo from "../../Image/webcard1 (2).jpg";
import webCardThree from "../../Image/webcard1 (3).jpg";
import webCardFour from "../../Image/webCard4.png";

import "./web.css";

const WebDesign = () => {
  return (
    <div className="bg-black text-white py-16">
      <div className=" container mx-auto py-16 bg_image_web ">
        <div className="grid grid-cols-12 lg:gap-16 md:gap-8">
          <div className="lg:col-span-6 md:col-span-6 sm:col-span-10 col-span-12 sm:px-8 lg:px-0 md:px-0 px-8">
            <img src={serviceImageOne} className="w-full h-auto" />
          </div>
          <div className="lg:col-span-6 md:col-span-6 sm:col-span-10 col-span-12 sm:px-8 lg:px-0 md:px-0 px-8 mt-16 ">
            <h1 className="lg:text-6xl md:text-4xl sm:text-5xl font-bold">
              WEB DESIGN AND DEVELOPMENT
            </h1>
            <p className="py-12 lg:text-[20px] text-[12px]">
              t is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text,
            </p>
            <button class="bg-baseColor  text-black lg:text-xl text-sm font-medium py-2 px-8 rounded mb-8">
              Explore More
            </button>
          </div>
        </div>
      </div>

      <div className="bg_image mt-16">
        <div className="container mx-auto">
          <div className="grid  grid-cols-12 lg:gap-16  py-16 pb-24 col-span-12 sm:px-8 lg:px-0 md:px-0 px-8">
            <div className="lg:col-span-5 md:col-span-5 sm:col-span-6 col-span-12">
              <h1 className="lg:text-5xl text-2xl font-medium lg:pt-0">
                For Over 15 Years. <br></br>For Millions of{" "}
                <span className="text-baseColor">Users</span>
              </h1>
            </div>
            <div className="lg:col-span-7 md:col-span-7 sm:col-span-6 col-span-12 lg:py-0 sm:py-0 md:py-0 py-10">
              <p className=" lg:text-[20px] text-[12px]">
                It is a long established fact that a reader will the readable
                conten by the readable content of a page when looking at its
                layout. t of a page when looking at its layout. The point of
                using Lorem Ipsum is that it has a more-or-less normal
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto sm:-mt-8 mt-8">
        <div className="grid grid-cols-12 lg:gap-16 gap-6 sm:px-8 lg:px-0 md:px-0 px-8">
          <div className="lg:col-span-4 md:col-span-4 sm:col-span-6 col-span-12">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img
                    src={webCardOne}
                    alt="Avatar"
                    className="w-full h-auto relative"
                  />
                  <p className="lg:text-4xl md:text-2xl sm:text-2xl text-3xl font-bold text-white absolute  lg:bottom-3 md:bottom-20 md:left-10 sm:bottom-24  bottom-28 left-16 sm:left-10  lg:left-16 text-center">
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

          <div className="lg:col-span-4 md:col-span-4 sm:col-span-6 col-span-12">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img
                    src={webCardTwo}
                    alt="Avatar"
                    className="w-full h-auto relative"
                  />
                  <p className="lg:text-4xl md:text-2xl sm:text-2xl text-3xl font-bold text-white absolute  lg:bottom-3 md:bottom-20 md:left-10 sm:bottom-24  bottom-28 left-5 sm:left-10  lg:left-10 text-center">
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

          <div className="lg:col-span-4 md:col-span-4 sm:col-span-6 col-span-12">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img
                    src={webCardThree}
                    alt="Avatar"
                    className="w-full h-auto relative"
                  />
                  <p className="lg:text-4xl md:text-2xl sm:text-2xl text-3xl font-bold text-white absolute  lg:bottom-3 md:bottom-20 md:left-10 sm:bottom-24  bottom-28 left-16 sm:left-10  lg:left-16 text-center">
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

      <div className="container mx-auto py-16 grid grid-cols-12 lg:gap-16 sm:gap-10 sm:px-8 lg:px-0 md:px-0 px-8 ">
        <div className="lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
          <h1 className="lg:text-5xl text-2xl font-medium">
            Your Partner for web{" "}
            <span className="text-baseColor">Innovation</span>
          </h1>
          <p className="py-12 lg:text-[20px] text-[12px]">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            <br></br>
            <br></br>
            <span className="font-bold">
              distribution of letters, as opposed to using 'Content here,
              content
            </span>
          </p>
          <button class="bg-baseColor  text-black lg:text-xl text-sm font-medium py-2 px-8 rounded mb-8">
            Explore All Apps
          </button>
        </div>
        <div className="lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
          <img
            src={webCardFour}
            className="w-full md:h-[60vh] h-auto rounded-lg shadow-lg mt-10"
          />
        </div>
      </div>

      <div className="container mx-auto  grid grid-cols-12 lg:gap-16 sm:gap-10 lg:px-6 px-6 ">
        <div className="lg:col-span-6 md:col-span-12 sm:col-span-12 col-span-12">
          <h1 className="lg:text-5xl text-2xl font-medium">
            Improve and Innovate with the Tech{" "}
            <span className="text-baseColor">Trends</span>
          </h1>
          <p className="py-12 lg:text-[20px] text-[12px]">
            Our team can assist you in transforming your business through latest
            tech capabilities to stay ahead of the curve.
            <br></br>
            <br></br>
            <div className="grid grid-cols-12">
              <div className="lg:col-span-1 md:col-span-1 sm:col-span-1 col-span-2 ">
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
              <div className="col-span-8 sm:mt-0 mt-2 ">
                <p>Application Developments</p>
                <p className="md:py-4 sm:py-4 py-3">Data Quality Management</p>
                <p>Machine and Deep Learning</p>
              </div>
            </div>
          </p>
          <button class="bg-baseColor  text-black lg:text-xl text-sm font-medium py-2 px-8 rounded mb-8">
            Explore All Apps
          </button>
        </div>
        <div className="lg:col-span-6 md:col-span-12 sm:col-span-12 col-span-12">
          <div className="grid grid-cols-12 gap-5">
            <div className="sm:col-span-4 col-span-6 border shadow-md border-borderColor text-center py-8">
              <div className="flex justify-center">
                <svg
                  class="h-8 w-8 text-baseColor "
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
                  <circle cx="12" cy="12" r="9" />{" "}
                  <line x1="3.6" y1="9" x2="20.4" y2="9" />{" "}
                  <line x1="3.6" y1="15" x2="20.4" y2="15" />{" "}
                  <path d="M11.5 3a17 17 0 0 0 0 18" />{" "}
                  <path d="M12.5 3a17 17 0 0 1 0 18" />
                </svg>
              </div>
              <p className="lg:text-[20px] pt-4 text-[12px] font-bold">WEB</p>
            </div>
            <div className="sm:col-span-4 col-span-6 border shadow-md border-borderColor text-center py-8">
              <div className="flex justify-center">
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
                  <line x1="3" y1="10" x2="3" y2="16" />{" "}
                  <line x1="21" y1="10" x2="21" y2="16" />{" "}
                  <path d="M7 9h10v8a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1v-8a5 5 0 0 1 10 0" />{" "}
                  <line x1="8" y1="3" x2="9" y2="5" />{" "}
                  <line x1="16" y1="3" x2="15" y2="5" />{" "}
                  <line x1="9" y1="18" x2="9" y2="21" />{" "}
                  <line x1="15" y1="18" x2="15" y2="21" />
                </svg>
              </div>
              <p className="lg:text-[20px] pt-4 text-[12px] font-bold">
                ANDRIOD
              </p>
            </div>
            <div className="sm:col-span-4 col-span-6 border shadow-md border-borderColor text-center py-8">
              <div className="flex justify-center">
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
                  <path d="M9 7c-3 0-4 3-4 5.5 0 3 2 7.5 4 7.5 1.088-.046 1.679-.5 3-.5 1.312 0 1.5.5 3 .5s4-3 4-5c-.028-.01-2.472-.403-2.5-3-.019-2.17 2.416-2.954 2.5-3-1.023-1.492-2.951-1.963-3.5-2-1.433-.111-2.83 1-3.5 1-.68 0-1.9-1-3-1z" />{" "}
                  <path d="M12 4a2 2 0 0 0 2 -2a2 2 0 0 0 -2 2" />
                </svg>
              </div>
              <p className="lg:text-[20px] pt-4 text-[12px] font-bold">IOS</p>
            </div>

            <div className="lg:col-span-4 col-span-6 border shadow-md border-borderColor text-center py-8">
              <div className="flex justify-center">
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
                  <path d="M9 5h10l2 2l-2 2h-10a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1" />{" "}
                  <path d="M13 13h-7l-2 2l2 2h7a1 1 0 0 0 1 -1v-2a1 1 0 0 0 -1 -1" />{" "}
                  <line x1="12" y1="22" x2="12" y2="17" />{" "}
                  <line x1="12" y1="13" x2="12" y2="9" />{" "}
                  <line x1="12" y1="5" x2="12" y2="3" />
                </svg>
              </div>
              <p className="lg:text-[20px] pt-4 text-[12px] font-bold">IOT</p>
            </div>

            <div className="lg:col-span-4 col-span-6 border shadow-md border-borderColor text-center py-8">
              <div className="flex justify-center">
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
                  <rect x="6" y="6" width="12" height="12" rx="3" />{" "}
                  <path d="M9 18v3h6v-3" /> <path d="M9 6v-3h6v3" />
                </svg>
              </div>
              <p className="lg:text-[20px] pt-4 text-[12px] font-bold">
                WEAREABLE
              </p>
            </div>

            <div className="lg:col-span-4 col-span-6 border shadow-md border-borderColor text-center py-8">
              <div className="flex justify-center">
                <svg
                  class="h-8 w-8 text-baseColor"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  {" "}
                  <rect x="2" y="7" width="20" height="15" rx="2" ry="2" />{" "}
                  <polyline points="17 2 12 7 7 2" />
                </svg>
              </div>
              <p className="lg:text-[20px] pt-4 text-[12px] font-bold">TV</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto bg_imaage_webTwo py-20 mt-8">
        <h1 className="w-full font-bold sm:text-6xl text-4xl px-5">
          Let's Build Your Website!{" "}
          <button class="bg-baseColor  text-black lg:text-xl text-sm font-medium py-2 px-8 rounded  mx-6 ">
            Contact Us
          </button>
        </h1>
      </div>
    </div>
  );
};

export default WebDesign;
