import React from "react";

const Card = ({ title, image, description, btnText = "Read more", btnLink = "#" }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden dark:bg-gray-800 dark:border-gray-700">
        <a href={btnLink} className="block">
          <img className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105" src={image} alt={title} />
        </a>
        <div className="p-5 text-center">
          <a href={btnLink} className="block">
            <h5 className="mb-2 text-2xl font-semibold text-gray-900 dark:text-white">
              {title}
            </h5>
          </a>
          <p className="mb-4 text-gray-700 dark:text-gray-300">{description}</p>
          <a 
            href={btnLink} 
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-lg shadow-md hover:bg-green-700 focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800 transition-all"
            aria-label={btnText}
          >
            {btnText}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
