import Button from "../ui/Button";
function Landing() {
  return (
    <div className="flex h-full items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 to-black p-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
          {/* Content Section */}
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-4xl leading-tight font-bold text-white lg:text-5xl">
              Welcome to{" "}
              <span className="text-orange-500">Projects Showcase</span>
            </h1>
            <p className="text-lg leading-relaxed text-gray-300 lg:text-xl">
              A dynamic platform where developers can showcase their innovative
              projects, from web apps to personal experiments. Share your work,
              discover amazing projects, and connect with fellow developers.
            </p>
            <div className="space-x-4">
              <Button
                to="/home"
                className="inline-block transform rounded-lg bg-orange-500 px-6 py-3 text-base font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-orange-600 lg:px-8 lg:py-4 lg:text-lg"
              >
                View Projects
              </Button>

              <a
                href="https://github.com/M3hTi/showcase-projects"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block transform rounded-lg border-2 border-orange-500 px-6 py-3 text-base font-semibold text-orange-500 transition-all duration-200 hover:-translate-y-0.5 hover:bg-orange-500 hover:text-white lg:px-8 lg:py-4 lg:text-lg"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative flex h-[300px] w-full items-center justify-center lg:h-[400px]">
            <div className="absolute inset-0 scale-95 rotate-6 transform rounded-2xl bg-orange-500 opacity-10"></div>
            <img
              src="/showcase-projects.jpg"
              alt="Projects Showcase"
              className="relative h-full w-auto transform rounded-2xl object-contain shadow-2xl transition-transform duration-300 hover:-rotate-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
