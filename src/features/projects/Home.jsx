import Error from "../../ui/Error";
import Loading from "../../ui/Loading";
import Projects from "./Projects";
import { useProjects } from "./useProjects";

function Home() {
  const { isLoading, isError, error } = useProjects();

  if (isLoading) {
    return <Loading />;
  }

  if (!isLoading && isError) {
    return <Error>{error.message}</Error>;
  }

  return (
    <div className="min-h-screen bg-gray-900 px-4 py-12">
      <div className="container mx-auto">
        <h1 className="mb-12 text-center text-4xl font-bold">
          <span className="text-white">Featured</span>{" "}
          <span className="text-orange-500">Projects</span>
        </h1>
        <Projects />
      </div>
    </div>
  );
}

export default Home;
