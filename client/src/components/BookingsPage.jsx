import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import PlaceGallery from "../PlaceGallery";
import BookingWidget from "../BookingWidget";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Masonry from "react-masonry-css";
import { LuBedDouble } from "react-icons/lu";
import { FaRegCalendar } from "react-icons/fa";
import {
  FaWifi,
  FaSwimmingPool,
  FaParking,
  FaTv,
  FaUtensils,
} from "react-icons/fa";
import { BiSolidNoEntry } from "react-icons/bi";
import { FaRadio } from "react-icons/fa6";
import { MdPets } from "react-icons/md";
import { BsPersonWorkspace } from "react-icons/bs";

export default function BookingPage() {
  const { id } = useParams();
  const [booking, setBooking] = useState(null);
  const [bookingCancelled, setBookingCancelled] = useState(false);
  const navigate = useNavigate(); // Initialize navigate

  const date1 = new Date(booking?.checkIn);
  const date2 = new Date(booking?.checkOut);
  const diffTime = Math.abs(date2 - date1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  const perkIcons = {
    "Wi-Fi": <FaWifi size={30} />,
    Pool: <FaSwimmingPool size={30} />,
    Parking: <FaParking size={30} />,
    TV: <FaTv size={30} />,
    Kitchen: <FaUtensils size={30} />,
    Pets: <MdPets size={30} />,
    Radio: <FaRadio size={30} />,
    Entrance: <BiSolidNoEntry size={30} />,
    Workspace: <BsPersonWorkspace size={30} />,
  };

  const formatDate = (dateString) => {
    const options = { day: "2-digit", month: "2-digit", year: "numeric" };
    return new Date(dateString).toLocaleDateString("en-GB", options);
  };

  useEffect(() => {
    if (id) {
      axios.get("/bookings").then((response) => {
        const foundBooking = response.data.find(({ _id }) => _id === id);
        if (foundBooking) {
          setBooking(foundBooking);
        }
      });
    }
  }, [id]);

  function cancelBooking(ev, bookingId) {
    ev.preventDefault();

    axios
      .delete(`/bookings/${bookingId}`)
      .then((response) => {
        if (response.data) {
          setBooking(null);
          setBookingCancelled(true);
        }
      })
      .catch((error) => {
        console.error("Failed to cancel booking:", error);
      });
  }

  if (bookingCancelled) {
    return (
      <div className="flex flex-col gap-10 justify-center items-center h-full mt-10">
        <button className=" bg-white text-primary text-2xl font-bold px-5 py-4 rounded-xl">
          Booking successfully cancelled
        </button>
        <button
          onClick={() => navigate(`/account/bookings`)}
          className="bg-black text-white text-xl px-11 py-4 rounded-xl"
        >
          Go back to your bookings
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white -mx-8 px-8 py-8">
      <h1 className="text-3xl pb-6 font-medium"> {booking?.place.title} </h1>

      <PlaceGallery place={booking?.place} />

      <div className="mt-8 grid gap-20 grid-cols-1  md:grid-cols-[2fr_1fr] my-4">
        <div>
          <div className="text-3xl font-medium">
            {booking?.place.address}
            <div className="-mt-3 px-1 text-gray-500">
              <span className="text-base">
                {booking?.place.maxGuests}{" "}
                {booking?.place.maxGuests === 1 ? "guest" : "guests"} &bull;
              </span>
              &#32;
              <span className="text-base">
                {booking?.place.bedroom} bedroom &bull;
              </span>{" "}
              &#32;
              <span className="text-base">
                {booking?.place.bed} bed &bull;
              </span>{" "}
              &#32;
              <span className="text-base">
                {booking?.place.bathroom} bathroom
              </span>
            </div>

            <div className=" flex flex-col gap-4 text-lg font-medium border-t-2 my-6 py-8">
              <div className="flex flex-row gap-7 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.3}
                  stroke="currentColor"
                  className="size-9"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>

                <div>
                  <h2 className="text-base font-bold"> Unbeatable location </h2>
                  <p className="text-sm text-gray-500">
                    {" "}
                    100% of guests in the past year gave this location a 5-star
                    rating.{" "}
                  </p>
                </div>
              </div>

              <div className="flex flex-row gap-7 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.3}
                  stroke="currentColor"
                  className="size-9"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                  />
                </svg>
                <div>
                  <h2 className="text-base font-bold">
                    {" "}
                    Great check-in experience{" "}
                  </h2>
                  <p className="text-sm text-gray-500">
                    {" "}
                    Recent guests loved the smooth start to this stay.{" "}
                  </p>
                </div>
              </div>

              <div className="flex flex-row gap-7 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.3}
                  stroke="currentColor"
                  className="size-9"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5m-6.75-6h2.25m-9 2.25h4.5m.002-2.25h.005v.006H12v-.006Zm-.001 4.5h.006v.006h-.006v-.005Zm-2.25.001h.005v.006H9.75v-.006Zm-2.25 0h.005v.005h-.006v-.005Zm6.75-2.247h.005v.005h-.005v-.005Zm0 2.247h.006v.006h-.006v-.006Zm2.25-2.248h.006V15H16.5v-.005Z"
                  />
                </svg>

                <div>
                  <h2 className="text-base font-bold"> Free cancellation </h2>
                  <p className="text-sm text-gray-500">
                    {" "}
                    Get a full refund if you change your mind.{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className=" flex flex-col gap-4 text-lg font-medium border-t-2 my-6 py-8">
              <div>
                <h2 className="text-xl py-2 font-medium"> About this space </h2>
                <p className="text-base text-gray-500 mb-3">
                  {" "}
                  {booking?.place.description}{" "}
                </p>
              </div>

              <div>
                <h3 className="text-base py-2 font-medium">
                  {" "}
                  Extra information{" "}
                </h3>
                <p className="text-base text-gray-500">
                  {" "}
                  {booking?.place.extraInfo}{" "}
                </p>
              </div>
            </div>

            <div className=" flex flex-col gap-4 text-lg font-medium border-t-2 my-6 py-8">
              <h2 className="text-xl py-2 font-medium"> Where you'll sleep </h2>

              <div className="border px-10 py-6 justify-center align-middle items-center rounded-lg w-6/12">
                <LuBedDouble size={"2rem"} />
                <div className="flex flex-col mt-3 gap-0.5">
                  <h3 className="text-base font-medium"> Bedroom </h3>
                  <p className="text-base font-light">
                    {" "}
                    {booking?.place.bedroom} double bed{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className=" flex flex-col gap-4 text-lg font-medium border-t-2 mt-6 pt-8">
              <h2 className="text-xl py-2 font-medium">
                {" "}
                What this place offers{" "}
              </h2>

              <div className="px-1 py-6 grid grid-cols-4 md:grid-cols-2 justify-center align-middle items-center rounded-lg w-9/12">
                {(booking?.place.perks || []).map((perk, index) => (
                  <div key={index} className="flex items-center gap-4 mb-2">
                    {perkIcons[perk] || <LuBedDouble size={"1.5rem"} />}
                    <span className="text-base font-base">{perk}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="shadow-lg px-4 pt-6 pb-4 border text-base border-slate-300 rounded-xl">
            <div className="flex items-baseline">
              <p className="text-2xl font-bold"> Booking Details </p>
            </div>

            <div className="border rounded-lg mt-4 border-gray-400">
              <div className="flex justify-items-end align-bottom">
                <div className="my-4 px-4 flex flex-row items-end gap-9">
                  <div>
                    <label>Check-in</label>
                    <p>{formatDate(booking?.checkIn)}</p>
                  </div>
                  <FaRegCalendar size={15} className="mb-1" />
                </div>
                <div className="my-4 px-4 flex flex-row items-end gap-9">
                  <div>
                    <label>Check-out</label>
                    <p>{formatDate(booking?.checkOut)}</p>
                  </div>
                  <FaRegCalendar size={15} className="mb-1" />
                </div>
              </div>
              <div className="flex justify-between items-center mb-4 pt-4 px-4 border-t border-gray-400">
                <label>Guests</label>
                <p> {booking?.addGuest} </p>
              </div>

              <div className="flex justify-between items-center mb-4 pt-4 px-4 border-t border-gray-400">
                <p> Full Name </p>
                <p> {booking?.name} </p>
              </div>
            </div>

            <button
              className="my-4 bg-red-500 text-white py-3 w-full rounded-lg"
              onClick={(ev) => cancelBooking(ev, booking._id)}
            >
              Cancel
            </button>

            <div className="flex flex-col mb-4 pt-4 px-1 text-base">
              <div className="flex flex-row justify-between items-center"></div>

              <div className="flex flex-col">
                <div className="flex flex-row justify-between items-center mb-2">
                  <p>
                    {booking?.place.price} x {diffDays} nights
                  </p>
                  <p>${booking?.place.price * diffDays} / person</p>
                </div>

                <div className="flex flex-row justify-between items-center">
                  <p>Airdnd service fee </p>
                  <p>$100</p>
                </div>
              </div>

              <div className="flex flex-row justify-between items-start font-semibold border-t-2 pt-6 mt-6">
                <div className="flex flex-col gap-1">
                  <p>Total (incl. taxes) </p>
                  <span className="px-2 py-2 bg-green-100 text-green-800 rounded-xl text-sm font-medium">
                    Payment completed
                  </span>
                </div>
                <p>${booking?.price}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
