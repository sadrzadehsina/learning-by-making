import { useState, useEffect } from "react";

function Loading({ immediate }) {
  const [shouldShow, setShouldShow] = useState(immediate ? true : false);

  useEffect(() => {
    if (immediate) return;
    const timeoutId = setTimeout(() => setShouldShow(true), 1000);

    return () => clearInterval(timeoutId);
  });

  if (!shouldShow) return null;

  return (
    <div className="flex items-center justify-center ">
      <div className="w-16 h-16 border-b-2 border-gray-100 rounded-full animate-spin"></div>
    </div>
  );
}

export { Loading };
