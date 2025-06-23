import React, { useMemo, useState } from "react";

function UseMemo() {
  const [add, setAdd] = useState(0);
  const [sub, setSub] = useState(0);

  const memoizedValue = useMemo(() => {
    console.log("Calculating memoized value...");
    return add * 10;
  }, [add]);

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-10">UseMemo Example</h1>
      <div className="flex flex-col items-center justify-center mt-10">
        <p>Memosied Value : {memoizedValue}</p>
        <div className="flex space-x-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer"
            onClick={() => setAdd(add + 1)}
          >
            Add {add}
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 cursor-pointer"
            onClick={() => setSub(sub - 1)}
          >
            Subtract {sub}
          </button>
        </div>
      </div>
    </div>
  );
}

export default UseMemo;
