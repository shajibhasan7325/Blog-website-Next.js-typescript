import Image from "next/image";

const ErrorComponent = () => {
  return (
    <div className="py-10 text-center ">
      <h1 className="py-10 text-3xl font-bold text-orange-600 ">
        something want wrong
      </h1>
      <Image src={"/images/404_Not_found.png"} width={400} height={400} />
    </div>
  );
};

export default ErrorComponent;
