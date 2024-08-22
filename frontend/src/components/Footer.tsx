const Footer = () => {
  return (
    <div className="mt-20 flex items-center gap-5 text-white py-5">
      <a className="text-2xl text-white" href="">
        NextGenNerd
      </a>

      <p className="text-[#d1d6df]">
        Built by{" "}
        <a
          href="https://x.com/Hemant2403"
          target="_blank"
          className="underline"
        >
          Hkumar2401
        </a>
        . The source code is available on{" "}
        <a href="https://github.com/Hkumar2401/next-gen-nerd" target="_blank" className="underline">
          Github
        </a>
        .
      </p>
    </div>
  );
};

export default Footer;
