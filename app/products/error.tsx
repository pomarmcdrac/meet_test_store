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
    <div className="error-container">
      <h2 className="title">Oops! Something went wrong</h2>
      <p className="error-message">
        We encountered an error while loading the products. This might be due to
        a temporary issue with our external data provider.
      </p>
      <div className="flex-group">
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
      {error.digest && <p className="error-id">Error ID: {error.digest}</p>}
    </div>
  );
}
