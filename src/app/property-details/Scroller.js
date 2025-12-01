'use client';
import { apiUrl, getData } from '@/components/utils';
import React, { useEffect, useState } from 'react';


const Slider = ({asset_id}) => {


  const [currentIndex, setCurrentIndex] = useState(0);
  const[images, setImages] = useState([]);


  useEffect(()=>{
    
    const fetchImages=async()=>{
        const result = await getData("/api/gallery/asset/"+asset_id, true);
        setImages(result);      
    }

    if(images.length==0) 
    {
       fetchImages();
    }
    
  }, [])


  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  };


  return (
    <div className="w-full max-w-3xl mx-auto relative overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >

        {images.map((src, idx) => (
          <div key={idx} className="w-full show flex-shrink-0">
            <img
              src={apiUrl+"/uploads/"+src.image_url}
              alt={`Slide ${idx + 1}`}
              style={{height:"200px"}}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute w-12 top-1/2 left-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-200 z-10"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute w-12 top-1/2 right-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-200 z-10"
      >
        &#10095;
      </button>
    </div>
  );
};

export default Slider;
