import React, { useEffect, useState } from "react";
import axios from "axios";
import AccountNav from "../AccountNav";
import PlaceImg from "../PlaceImg";

export default function MyBookingsPage() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    return date.toLocaleDateString("en-GB");
  };

  const formatTime = (isoDate) => {
    const date = new Date(isoDate);
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  };

  const truncateText = (text, maxLength) => {
    return text.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  };

  const isExpired = (checkOutDate) => {
    const currentDate = new Date();
    const checkOut = new Date(checkOutDate);
    return currentDate > checkOut;
  };

  useEffect(() => {
    axios
      .get("/bookings")
      .then((response) => {
        setBookings(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const activeBookings = bookings.filter(
    (booking) => !isExpired(booking.checkOut)
  );
  const expiredBookings = bookings.filter((booking) =>
    isExpired(booking.checkOut)
  );

  return (
    <>
      <AccountNav />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">My Bookings</h1>

        {activeBookings.length > 0 && (
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Active Bookings
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activeBookings.map((booking) => {
                const date1 = new Date(booking.checkIn);
                const date2 = new Date(booking.checkOut);
                const diffTime = Math.abs(date2 - date1);
                const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

                return (
                  <div
                    key={booking._id}
                    className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  >
                    <PlaceImg
                      place={booking.place}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h2 className="text-base text-gray-800 mb-2">
                        {truncateText(booking.place.title, 35)}
                      </h2>
                      <p className="text-black mb-4 -mt-2 text-lg font-semibold">
                        {truncateText(booking.place.address, 33)}
                      </p>

                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <svg
                          className="w-4 h-4 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          ></path>
                        </svg>
                        {formatDate(booking.checkIn)}
                      </div>
                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        <svg
                          className="w-4 h-4 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        {diffDays} {diffDays === 1 ? "night" : "nights"}
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                          Confirmed
                        </span>
                        <a
                          href={`/account/bookings/${booking._id}`}
                          className="text-blue-600 hover:text-blue-800 font-medium"
                        >
                          View Details
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {expiredBookings.length > 0 && (
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Expired Bookings
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {expiredBookings.map((booking) => {
                const date1 = new Date(booking.checkIn);
                const date2 = new Date(booking.checkOut);
                const diffTime = Math.abs(date2 - date1);
                const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

                return (
                  <div
                    key={booking._id}
                    className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  >
                    <PlaceImg
                      place={booking.place}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h2 className="text-base text-gray-800 mb-2">
                        {truncateText(booking.place.title, 35)}
                      </h2>
                      <p className="text-black mb-4 -mt-2 text-lg font-semibold">
                        {truncateText(booking.place.address, 33)}
                      </p>
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <svg
                          className="w-4 h-4 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          ></path>
                        </svg>
                        {formatDate(booking.checkIn)}
                      </div>
                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        <svg
                          className="w-4 h-4 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        {diffDays} {diffDays === 1 ? "night" : "nights"}
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">
                          Expired
                        </span>
                        <a
                          href={`/account/bookings/${booking._id}`}
                          className="text-blue-600 hover:text-blue-800 font-medium"
                        >
                          View Details
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {bookings.length === 0 && (
          <div className="flex flex-col gap-0 justify-start">
            <h2 className="text-2xl font-semibold text-gray-800">
              <h1>No trips booked...yet!</h1>
            </h2>
            <p className="text-gray-600 mt-4">
              Time to dust off your bags and start planning your next adventure.
            </p>
          </div>
        )}
      </div>
    </>
  );
}
