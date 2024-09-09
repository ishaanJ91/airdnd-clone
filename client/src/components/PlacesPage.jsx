import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import AccountNav from "../AccountNav";
import PlaceImg from "../PlaceImg";

export default function PlacesPage() {
  const [places, setPlaces] = useState([]);

  const truncateText = (text, maxLength) => {
    return text.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  };

  useEffect(() => {
    axios.get("/user-places").then(({ data }) => {
      setPlaces(data);
    });
  }, []);

  return (
    <>
      <AccountNav />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          My Accommodations
        </h1>

        <div className="flex justify-start mb-6 -mt-4">
          <Link
            className="inline-flex items-center bg-primary text-white py-2 px-6 rounded-lg"
            to={"/account/places/new"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            Add New Place
          </Link>
        </div>

        {places.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {places.map((place) => (
              <Link
                key={place._id}
                to={"/account/places/" + place._id}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <PlaceImg place={place} className="w-full h-48 object-cover" />

                <div className="p-6">
                  <h2 className="text-base text-gray-800 mb-2">
                    {truncateText(place.title, 35)}
                  </h2>
                  <p className="text-black mb-4 -mt-2 text-lg font-semibold">
                    {truncateText(place.address, 33)}
                  </p>

                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-4 mr-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
                      />
                    </svg>
                    ${place.price}&nbsp;<b>/ night</b>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-4 mr-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
                      />
                    </svg>
                    {place.maxGuests} guests &nbsp; <b>•</b> &nbsp;{" "}
                    {place.bedroom === undefined ? 1 : place.bedroom} bedrooms
                    &nbsp; <b>•</b> &nbsp;
                    {place.beds === undefined ? 1 : place.beds} beds
                  </div>
                  <div className="flex justify-between items-center mt-5">
                    <a
                      to={"/account/places/new" + place._id}
                      className="text-blue-600 hover:text-blue-800 cursor-pointer font-medium"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-0 justify-start">
            <h2 className="text-2xl mt-8 font-semibold text-gray-800">
              No places added yet!
            </h2>
            <p className="text-gray-600 mt-4">
              Start adding your places to showcase them here.
            </p>
          </div>
        )}
      </div>
    </>
  );
}
