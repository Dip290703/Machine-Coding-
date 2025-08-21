import React, { useEffect, useState } from "react";

const App = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("https://picsum.photos/v2/list?page=2&limit=29")
      .then((res) => res.json())
      .then((data) => {
        console.log(data); // 👀 Check data in console
        setImages(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Picsum Images (29)</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "12px",
          padding: "20px",
        }}
      >
        {images.map((img) => (
          <img
            key={img.id}
            src={img.download_url}
            alt={img.author}
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
