import { Ring } from "ldrs/react";
import "ldrs/react/Ring.css";

function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900/80 backdrop-blur-sm">
      <Ring size="40" stroke="5" bgOpacity="0" speed="2" color="#f97316" />
    </div>
  );
}

export default Loading;
