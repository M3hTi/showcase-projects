import Button from "./Button";

function PageNotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 bg-gradient-to-br from-gray-900 to-black px-4">
      <h1 className="text-6xl font-bold text-white">404</h1>
      <p className="text-center text-xl text-gray-300">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Button
        to="/"
        className="inline-block transform rounded-lg bg-orange-500 px-6 py-3 text-base font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-orange-600"
      >
        Go back home
      </Button>
    </div>
  );
}

export default PageNotFound;
