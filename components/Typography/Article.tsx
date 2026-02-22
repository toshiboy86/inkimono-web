interface ArticleProps {
  imageSrc: string;
  imageAlt: string;
  children?: React.ReactNode;
}

const Article = ({ imageSrc, imageAlt, children: description }: ArticleProps) => {
  return (
    <div className="mb-8 grid grid-cols-1 items-center gap-8 md:grid-cols-12">
      <div className="order-2 md:order-1 md:col-span-7">{description}</div>
      <div className="order-1 md:order-2 md:col-span-5">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="h-[400px] w-full rounded-3xl object-cover shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)] md:h-[500px] lg:h-[600px]"
        />
      </div>
    </div>
  );
};

export default Article;
