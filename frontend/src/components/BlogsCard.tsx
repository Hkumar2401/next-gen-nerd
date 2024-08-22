const BlogsCard = ({title, description}: {title: string, description: string}) => {
  return (
    <div
      className="mt-10 px-5 py-10 rounded-md border-[1px] border-zinc-700"
    >
      <h1 className=" text-3xl font-bold">{title}</h1>
      <p className="mt-5">{description}</p>
    </div>
  );
};

export default BlogsCard;
