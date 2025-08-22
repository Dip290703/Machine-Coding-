import React, { useEffect, useState } from "react";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

const App = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevIndex = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  }
  const nextIndex = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  }

  useEffect(() => {
    fetch("https://picsum.photos/v2/list?page=2&limit=10")
      .then((res) => res.json())
      .then((data) => {
        console.log(data); // 👀 Check data in console
        setImages(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="overflow-hidden relative w-[800px] h-[500px] rounded-2xl">
   
      <div
        className="flex transition-transform ease-out duration-500 "
        style={{transform:`translateX(-${currentIndex *100}%)`}}
      >
        {images.map((img) => (
          <img
            key={img.id}
            src={img.download_url}
            alt={img.author}
           className="w-[800px] h-[500px] object-cover flex-shrink-0 rounded-2xl"
          />
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-2">
        <button onClick={prevIndex}
          > 
        <IoIosArrowDropleft size={30} className="text-white cursor-pointer"/>
        </button>
        <button onClick={nextIndex}
         >
        <IoIosArrowDropright size={30} className="text-white cursor-pointer"/>
        </button>
      </div>
    </div>
    </div>
  );
};

export default App;
