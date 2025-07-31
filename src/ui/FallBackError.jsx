function FallBackError({ error, resetErrorBoundary }) {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-900 p-6 text-center text-white">
      <h2 className="mb-2 text-2xl font-semibold">
        😵 Oops! Something went wrong.
      </h2>
      <p className="mb-4 text-red-400">{error.message}</p>
      <button
        onClick={resetErrorBoundary}
        className="rounded-lg bg-orange-500 px-4 py-2 transition-all hover:bg-orange-600"
      >
        Try Again
      </button>
    </div>
  );
}
export default FallBackError;
