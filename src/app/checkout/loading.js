import Image from "next/image";

const LoadingPage = () => {
  return (
    <Image
      alt="...Loading..."
      width={500}
      height={500}
      loading="eager"
      role="presentation"
      src="https://miro.medium.com/v2/resize:fit:625/1*DXvI3dy2rKOMzV8S3fKFMQ.gif"
      style={{ objectFit: "contain" }}
    />
  );
};

export default LoadingPage;
