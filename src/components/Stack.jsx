import { dataStack } from "./data";

function Stack() {
  return (
    <section name="stack" className="h-screen w-full">
      {/* Container */}
      <div className="container w-full h-full flex flex-col justify-center items-center">
        <h1 className="text-center text-4xl text-primary font-bold tracking-wider md:text-5xl">
          WebDev Stack
        </h1>
        <p className=" text-neutral-content text-sm mb-16">
          FrontEnd Developer
        </p>

        {/* Grid container */}
        <div className="w-full grid grid-cols-2 gap-x-6 gap-y-12 place-items-center md:gap-y-16 md:grid-cols-3">
          {dataStack.map((data, index) => {
            return (
              <img
                src={data.img}
                alt={data.alt}
                key={index}
                className="w-16 md:w-20 hover:scale-110 transition duration-200"
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Stack;
