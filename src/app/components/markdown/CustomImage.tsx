const CustomImage = ({ src, alt }: { src?: string; alt?: string }) => {
  return (
    <img
      src={src}
      alt={alt || "image"}
      className="rounded-lg shadow-md my-4"
      loading="lazy"
    />
  );
};

export default CustomImage;
