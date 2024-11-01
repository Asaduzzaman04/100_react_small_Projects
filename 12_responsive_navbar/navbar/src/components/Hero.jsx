const Hero = () => {
  return (
    <>
      <main className="h-full bg-black text-white flex flex-col justify-center items-center main w-full px-10 md:px-20 lg:px-28 ">
        <div>
          <div className="flex flex-col-reverse md:flex-row justify-center items-center">
            <div className="flex flex-col justify-center items-start  gap-5 px-0 md:px-5 py-0 md:py-5 font-bold text-xl">
              <h1>All Your Files in One Secure Location.</h1>
              <p>
                We stores all your most important files in one secure location.
                Access them whenever needed, share and collaborate with your
                connections.
              </p>
              <button className="px-2 py-1 bg-white text-black rounded-md">
                Get Started<i className="bx bx-right-arrow-alt"></i>
              </button>
            </div>
            <div>
              <img
                src="https://i.ibb.co/sVqYmS2/Illustration.png"
                alt="Illustration"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Hero;
