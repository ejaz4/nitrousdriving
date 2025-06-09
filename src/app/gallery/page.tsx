import Image from "next/image";

const Gallery = () => {
  return (
    <div>
      <GalleryItem id={1} />
    </div>
  );
};

const GalleryItem = ({ id }: { id: number }) => {
  return (
    <Image src={`/img/gallery/${id}.jpg`} alt={"j"} width={300} height={200} />
  );
};

export default Gallery;
