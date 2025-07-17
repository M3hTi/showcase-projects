function Error({ children }) {
  return (
    <div className="min-h-screen bg-gray-900 px-4 py-12">
      <span className="block text-sm font-medium text-red-500">{children}</span>
    </div>
  );
}

export default Error;
