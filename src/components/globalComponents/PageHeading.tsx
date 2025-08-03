import Image from "next/image";
import React from "react";

interface PageHeaderProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  imageHeight?: number;
  imageWidth?: number;  
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, description, imageSrc, imageAlt, imageHeight, imageWidth }) => (
      <div className=" w-full my-3 grid grid-cols-1 items-start md:grid-cols-2 py-5 gap-10">
        <div className="  ">
          <h1 className="text-3xl text-black font-extrabold">
            {title}
          </h1>

          <p className="text-gray-700 my-3 text-base md:text-lg leading-relaxed">
            {description}
          </p>
        </div>

        {/* Right Side: Illustration */}
        <div className="flex justify-center w-full md:justify-end">
          <Image
            src={imageSrc}
            alt={" " + imageAlt}
            width={imageWidth}
            height={imageHeight}
            className={`w-full md:w-auto lg:max-w-lg h-auto object-contain`}
        
          />
        </div>
      </div>
);

export default PageHeader; 