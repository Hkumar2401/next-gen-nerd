import KNOWLEDGE_ICON from "../assets/knowledge.png"
import MIND_ICON from "../assets/mind.png"
import PERSPECTIVE_ICON from "../assets/perspective.png"
import COMMUNITY_ICON from "../assets/community.png"

const Features = () => {
  return (
    <div className="mt-44 flex flex-col justify-center items-center">
      <div className="flex flex-col items-center justify-center text-white">
        <p className="mt-5 text-center text-[#e1e7ef] text-5xl w-3/4">
            Features
        </p>
        <p className="mt-5 text-center text-[#7f8ea3] text-xl w-3/5">
        This project is an experiment to see how a modern app, with features like jwt-auth, subscriptions, API routes, and static pages would work.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap gap-5 justify-center items-center">
        <div className="flex flex-col items-center lg:items-start justify-center w-full sm:w-full lg:w-2/5 h-44 lg:h-52 border-[1px] border-gray-700 py-5 px-8 rounded-md">
            <img className="invert w-20 h-14" src={KNOWLEDGE_ICON} alt="" />
            <p className="mt-4 text-[#626e85] text-2xl">Share your passion, knowledge, and creativity here.</p>
        </div>
        <div className="flex flex-col items-center lg:items-start justify-center w-full sm:w-full lg:w-2/5 h-44 lg:h-52 border-[1px] border-gray-700 py-5 px-8 rounded-md">
            <img className="invert w-16 h-16" src={MIND_ICON} alt="" />
            <p className="mt-4 text-[#626e85] text-2xl">Your hub for curious minds.</p>
        </div>
        <div className="flex flex-col items-center lg:items-start justify-center w-full sm:w-full lg:w-2/5 h-44 lg:h-52 border-[1px] border-gray-700 py-5 px-8 rounded-md">
            <img className="invert w-20 h-14" src={PERSPECTIVE_ICON} alt="" />
            <p className="mt-4 text-[#626e85] text-2xl">Dive into diverse topics and unique perspectives.</p>
        </div>
        <div className="flex flex-col items-center lg:items-start justify-center w-full sm:w-full lg:w-2/5 h-44 lg:h-52 border-[1px] border-gray-700 py-5 px-8 rounded-md">
            <img className="invert w-16 h-12" src={COMMUNITY_ICON} alt="" />
            <p className="mt-4 text-[#626e85] text-2xl">Join our community of thinkers and creators.</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
