import Button from "../ui/Button";
function Landing() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-900 to-black p-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Content Section */}
          <div className="space-y-8 text-center lg:text-left">
            <h1 className="text-5xl leading-tight font-bold text-white">
              Welcome to{" "}
              <span className="text-orange-500">Projects Showcase</span>
            </h1>
            <p className="text-xl leading-relaxed text-gray-300">
              Discover a collection of innovative React projects and
              implementations. Each project demonstrates modern web development
              practices and creative solutions.
            </p>
            <div className="space-x-4">
              <Button
                to="/home"
                className="inline-block transform rounded-lg bg-orange-500 px-8 py-4 text-lg font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-orange-600"
              >
                View Projects
              </Button>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block transform rounded-lg border-2 border-orange-500 px-8 py-4 text-lg font-semibold text-orange-500 transition-all duration-200 hover:-translate-y-0.5 hover:bg-orange-500 hover:text-white"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative">
            <div className="absolute inset-0 scale-95 rotate-6 transform rounded-2xl bg-orange-500 opacity-10"></div>
            <img
              src="/showcase-projects.jpg"
              alt="Projects Showcase"
              className="relative transform rounded-2xl shadow-2xl transition-transform duration-300 hover:-rotate-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
