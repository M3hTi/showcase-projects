function Error({ children }) {
  return (
    <span className="block bg-gray-900 text-sm font-medium text-red-500">
      {children}
    </span>
  );
}

export default Error;
