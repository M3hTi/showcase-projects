function Home() {
  const projects = [];
  return (
    <div className="min-h-screen bg-gray-900 px-4 py-12">
      <div className="container mx-auto">
        <h1 className="mb-12 text-center text-4xl font-bold">
          <span className="text-white">Featured</span>{" "}
          <span className="text-orange-500">Projects</span>
        </h1>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group overflow-hidden rounded-lg bg-black/40 backdrop-blur-sm transition-transform hover:-translate-y-2"
            >
              <div className="relative">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-6">
                <h2 className="mb-3 text-xl font-semibold text-white">
                  {project.title}
                </h2>
                <p className="mb-6 text-gray-300">{project.description}</p>
                <div className="flex justify-between">
                  <a
                    href={project.demoUrl}
                    className="rounded-lg bg-orange-500 px-4 py-2 text-white transition-colors hover:bg-orange-600"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="rounded-lg border border-orange-500 px-4 py-2 text-orange-500 transition-colors hover:bg-orange-500 hover:text-white"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
