function Project({ project }) {
  const {
    name,
    description,
    livedemo_url,
    github_url,
    image,
    tech_stack,
    user_id,
  } = project;

  const { full_name } = user_id || {};

  console.log(
    "%c🔍 DEBUG: name of articls's writer:",
    "color: #8B5CF6; font-weight: bold",
    full_name,
  );

  return (
    <div className="group overflow-hidden rounded-lg bg-black/40 backdrop-blur-sm transition-transform hover:-translate-y-2">
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>
      <div className="p-6">
        <div className="mb-3 flex flex-wrap items-center justify-between">
          <div className="gap-2">
            {tech_stack?.length > 0 ? (
              tech_stack?.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center rounded-full bg-orange-500/10 px-3 py-1 text-sm font-medium text-orange-500 transition-colors hover:bg-orange-500/20"
                >
                  #{tech}
                </span>
              ))
            ) : (
              <span className="text-gray-400 italic">
                No technologies specified yet
              </span>
            )}
          </div>
          <div>
            {full_name && (
              <span className="text-stone-200">created by: {full_name}</span>
            )}
          </div>
        </div>
        <h2 className="mb-3 text-xl font-semibold text-white">{name}</h2>
        <p className="mb-6 text-gray-300">{description}</p>
        <div className="flex items-center justify-between">
          {livedemo_url && (
            <a
              href={livedemo_url}
              target="_blank"
              className="cursor-pointer rounded-lg bg-orange-500 px-4 py-2 text-white transition-colors hover:bg-orange-600"
            >
              Live Demo
            </a>
          )}

          <a
            href={github_url}
            target="_blank"
            className="cursor-pointer rounded-lg border border-orange-500 px-4 py-2 text-orange-500 transition-colors hover:bg-orange-500 hover:text-white"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
