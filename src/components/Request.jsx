import { dataFaq1, dataFaq2 } from "./data";

function Request() {
  return (
    <section name="request" className="h-screen w-full">
      {/* Container */}
      <div className="container w-full h-full flex justify-center items-center flex-col">
        <h1 className="text-center text-4xl text-primary font-bold tracking-wider my-16 md:text-5xl">
          Weird Request
        </h1>
        {/* Faq container */}
        <div className="flex justify-between flex-col text-sm md:items-center md:text-[16px] md:flex-row md:space-x-24">
          {/* Left side */}
          <div className="flex flex-col">
            {dataFaq1.map((faq, index) => {
              return (
                <div
                  tabIndex={0}
                  className="collapse collapse-arrow capitalize"
                  key={index}
                >
                  <input type="checkbox" className="peer" />
                  <div className="collapse-title">{faq.main}</div>
                  <div className="collapse-content peer-checked:text-primary">
                    <p>{faq.sub}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Side */}
          <div className="flex flex-col">
            {dataFaq2.map((faq, index) => {
              return (
                <div
                  tabIndex={0}
                  className="collapse collapse-arrow capitalize"
                  key={index}
                >
                  <input type="checkbox" className="peer" />
                  <div className="collapse-title">{faq.main}</div>
                  <div className="collapse-content peer-checked:text-primary">
                    <p>{faq.sub}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Request;
