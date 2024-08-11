import aboutImage from "../../Image/aboutImage.webp";
import FocusImage from "../../Image/focusImae.jpg";

const About = () => {
  return (
    <div className="bg-black text-white py-12 pt-28">
      <div className="container mx-auto grid grid-cols-12 lg:gap-16 sm:gap-10 lg:px-6 px-6 ">
        <div className="lg:col-span-6 md:col-span-12 sm:col-span-12 col-span-12">
          <h1 className="lg:text-5xl text-2xl font-medium">
            Explore Our <span className="text-baseColor">Company</span>
          </h1>
          <p className="py-12 lg:text-[20px] text-[12px]">
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
          <img
            src={aboutImage}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Services */}
      <div className="container mx-auto grid grid-cols-12 lg:gap-16 sm:gap-10 lg:px-6 px-6 pt-16 ">
        <div className="lg:col-span-6 md:col-span-12 sm:col-span-12 col-span-12">
          <img
            src={FocusImage}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="lg:col-span-6 md:col-span-12 sm:col-span-12 col-span-12">
          <h1 className="lg:text-5xl text-2xl font-medium lg:pt-0 pt-8">
            Focus Your <span className="text-baseColor">Goals</span>
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

export default About;
