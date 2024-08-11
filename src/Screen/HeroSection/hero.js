import HeroVideo from "../../Image/hero.mp4";
import "./hero.css";
const HeroSection = () => {
  return (
    <div className="video_main">
      <video
        className="video_style"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src={HeroVideo} type="video/mp4" />
      </video>
      <div className="video_text">
        <h1>
          The Web3 Movement for{" "}
          <span className="text-baseColor">Everyone™</span>
        </h1>
        <p>
          A network, platform and innovative Web3 products that connect you to a
          thriving community of backers, champions, and change
        </p>
        <button class="bg-baseColor  text-black lg:text-xl text-sm font-medium py-2 px-8 rounded">
          Discover The Soul Of SafeMoon
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
