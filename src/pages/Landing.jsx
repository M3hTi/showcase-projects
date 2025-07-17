import Button from "../ui/Button";
function Landing() {
  return (
    <div className="h-full flex items-center justify-center bg-gradient-to-br from-gray-900 to-black p-4 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
          {/* Content Section */}
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl leading-tight font-bold text-white">
              Welcome to{" "}
              <span className="text-orange-500">Projects Showcase</span>
            </h1>
            <p className="text-lg lg:text-xl leading-relaxed text-gray-300">
              Discover a collection of innovative React projects and
              implementations. Each project demonstrates modern web development
              practices and creative solutions.
            </p>
            <div className="space-x-4">
              <Button
                to="/home"
                className="inline-block transform rounded-lg bg-orange-500 px-6 py-3 lg:px-8 lg:py-4 text-base lg:text-lg font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-orange-600"
              >
                View Projects
              </Button>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block transform rounded-lg border-2 border-orange-500 px-6 py-3 lg:px-8 lg:py-4 text-base lg:text-lg font-semibold text-orange-500 transition-all duration-200 hover:-translate-y-0.5 hover:bg-orange-500 hover:text-white"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative w-full h-[300px] lg:h-[400px] flex items-center justify-center">
            <div className="absolute inset-0 scale-95 rotate-6 transform rounded-2xl bg-orange-500 opacity-10"></div>
            <img
              src="/showcase-projects.jpg"
              alt="Projects Showcase"
              className="relative transform rounded-2xl shadow-2xl transition-transform duration-300 hover:-rotate-2 w-auto h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;