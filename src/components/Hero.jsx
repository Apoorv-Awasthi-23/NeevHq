const Hero = () => {
  return (
    <div className="relative h-[100vh] grid lg:grid-cols-2 border-none z-index-50 bg-gradient-to-r from-blue-50 via-blue-200 to-blue-100">
      <div className="relative">
        <video
          className="w-full h-full object-cover"
          src="https://www.nabla.com/static/nabla-c1128a7bf4cc8e17a1dfb8ff90f9bc4d.mp4"
          loop
          autoPlay
          muted
        ></video>
      </div>

      <div className="relative flex items-center justify-center">
        <div className="bg-gradient-to-r from-blue-200 to-blue-50 w-full h-full p-12">
          <div className="px-20 py-20">
            <h3 className="mt-1 mb-4 text-5xl font-bold text-gray-800">
              Ambient AI Assistant
            </h3>
            <p className="text-lg text-neutral-600">
              The clinical workflow for orthopedics isn’t the same as oncology.
              Our AI models understand specialty-specific workflows and complex
              documentation needs - meaning providers spend very little time
              closing each chart.
            </p>
          </div>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-40">
        <div className="bg-gradient-to-r from-transparent via-white/30 to-transparent w-full h-full"></div>
      </div>
    </div>
  );
};

export default Hero;
