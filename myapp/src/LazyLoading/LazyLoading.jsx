import React from "react";
const Lazy = React.lazy(() => import("./Lazy"));

function LazyLoading() {
  return (
    <div>
      <h2>Lazy Loading Example</h2>
      <React.Suspense fallback={<div>Loading ....</div>}>
        <Lazy />
      </React.Suspense>
    </div>
  );
}

export default LazyLoading;

/*
    Lazy loading is a performance optimization technique where components or resources are
    loaded only when needed, instead of during the initial render. This reduces the initial 
    load time and improves user experience, especially for large applications.
*/
