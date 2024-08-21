const DisplayHome = () => {
  return (
    <div className="mt-44 flex flex-col justify-center items-center">
      <div className="flex flex-col items-center justify-center text-white">
        <a
          className="text-white py-2 px-5 bg-[#0f1629] w-fit text-center rounded-3xl"
          href="https://x.com/Hemant2403" target="_blank"
        >
          Follow along on twitter
        </a>
        <p className="mt-5 text-center text-[#e1e7ef] text-7xl w-3/4 font-bold">
          Dive into a world where passion meets knowledge.
        </p>
        <p className="mt-5 text-center text-[#7f8ea3] text-xl w-3/4">
          Start your blogging journey with NextGenNerd today.
        </p>
      </div>

        <div className="mt-5 flex gap-5 justify-center items-center">
            <a className="py-3 px-5 bg-[#dfe2e5] w-fit text-center rounded-md" href="">Get Started</a>
            <a className="text-white py-3 px-7 w-fit text-center rounded-md border-[1px] border-zinc-700" href="">Github</a>
        </div>
      
    </div>
  );
};

export default DisplayHome;
