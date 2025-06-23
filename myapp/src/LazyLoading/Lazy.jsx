import React from "react";

function Lazy() {
  // Simulate a large list
  const items = Array.from({ length: 1000 }, (_, i) => `Item ${i + 1}`);

  return (
    <div>
      <h2>Lazy Component</h2>

      {/* Heavy text content */}
      <p>
        {`This is a heavy component that simulates a performance-intensive view. `.repeat(
          100
        )}
      </p>

      {/* Simulate heavy images */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {Array.from({ length: 20 }).map((_, i) => (
          <img
            key={i}
            src={`https://picsum.photos/200/300?random=${i}`}
            alt={`Random ${i}`}
            loading="lazy"
            width={200}
            height={300}
          />
        ))}
      </div>

      {/* Simulate a large list rendering */}
      <ul style={{ maxHeight: "400px", overflowY: "scroll" }}>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Lazy;
