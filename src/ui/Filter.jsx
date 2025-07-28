import { useTechnologyFilter } from "../context/TechnologyContext";

function Filter({ projects }) {
  const { filterTechnology, setFilterTechnology } = useTechnologyFilter();

  const uniqueTechnologies = [
    ...new Set(
      projects
        .flatMap((project) => project?.tech_stack || [])
        .map((t) => t?.trim()),
    ),
  ];

  console.log(uniqueTechnologies);
  return (
    <div>
      <select
        name="technologies"
        value={filterTechnology}
        onChange={(e) => setFilterTechnology(e.target.value)}
        className="w-full cursor-pointer rounded-lg border border-gray-700 bg-gray-800/40 px-3 py-1.5 text-sm text-white backdrop-blur-sm transition-all hover:border-gray-600 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/50 focus:outline-none sm:w-auto sm:px-4 sm:py-2 sm:text-base"
      >
        <option value="" className="bg-gray-800">
          Filter by technology
        </option>
        {Array.from({ length: uniqueTechnologies.length }, (_, i) => (
          <option key={i} value={uniqueTechnologies[i]} className="bg-gray-800">
            {uniqueTechnologies[i]}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Filter;
