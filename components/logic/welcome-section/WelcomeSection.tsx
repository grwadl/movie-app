import bgImage from "@/public/welcome.jpg";
import Image from "next/image";

const WelcomeSection = () => {
  return (
    <section className="welcome-section relative">
      <div className="img-bg-wrap absolute top-0 left-0 w-full max-h-full z-[-1] overflow-hidden">
        <Image
          src={bgImage}
          className="w-full max-h-full object-cover"
          alt="background"
          placeholder="blur"
        />
      </div>
      <div className="welcome-text py-16 px-10">
        <h2 className="text-5xl text-white font-bold">Welcome</h2>
        <span className="text-2xl font-semibold text-white">
          Millions of movies, TV shows and people to discover. Explore now.
        </span>
      </div>
    </section>
  );
};

export default WelcomeSection;
