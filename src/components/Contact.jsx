function Contact() {
  return (
    <section name="contact" className="h-screen w-full">
      {/* Container */}
      <div className="container w-full h-full flex items-center flex-col">
        <h1 className="text-center text-4xl text-primary font-bold tracking-wider my-16 md:text-5xl">
          Contact
        </h1>

        <form
          method="POST"
          action={import.meta.env.VITE_ENDPOINT}
          className="flex flex-col space-y-4 w-full text-white px-3 md:w-2/3 xl:w-1/2 md:px-0"
        >
          <input
            type="text"
            className="p-4 rounded-md outline-none bg-neutral"
            name="name"
            placeholder="Enter your name"
            required
          />
          <textarea
            rows="10"
            className="rounded-md outline-none p-4 bg-neutral"
            name="message"
            placeholder="Enter your message here"
            required
          ></textarea>
          <button
            type="submit"
            className="btn btn-primary w-1/2 md:w-1/3 mx-auto"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
