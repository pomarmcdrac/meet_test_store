"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Products Page Error:", error);
  }, [error]);

  return (
    <div className="container">
      <h2 className="title">Oops! Something went wrong</h2>
      <p className="text-gray-600">
        We encountered an error while loading the products. This might be due to
        a temporary issue with our external data provider.
      </p>
      <div className="flex gap-10 justify-center">
        <button onClick={() => reset()} className="page-btn">
          Try again
        </button>
        <button
          onClick={() => (window.location.href = "/")}
          className="page-btn"
        >
          Go Home
        </button>
      </div>
      {error.digest && (
        <p className="text-gray-600">Error ID: {error.digest}</p>
      )}
    </div>
  );
}
