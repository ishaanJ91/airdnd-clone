import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import BookingWidget from "../BookingWidget";
import { LuBedDouble } from "react-icons/lu";
import PlaceGallery from "../PlaceGallery";

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

export default function PlacePage() {
  const { id } = useParams();
  const [place, setPlace] = useState(null);

  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get(`/places/${id}`).then((response) => {
      setPlace(response.data);
    });
  }, [id]);

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

  if (!place) return "";

  return (
    <>
      <div className="bg-white -mx-8 px-8 py-8">
        <h1 className="text-3xl pb-6 font-medium"> {place.title} </h1>

        <PlaceGallery place={place} />

        <div className="mt-8 grid gap-20 grid-cols-1  md:grid-cols-[2fr_1fr] my-4">
          <div>
            <div className="text-3xl font-medium">
              {place.address}
              <div className="-mt-3 px-1 text-gray-500">
                <span className="text-base">
                  {place.maxGuests} {place.maxGuests === 1 ? "guest" : "guests"}{" "}
                  &bull;
                </span>
                &#32;
                <span className="text-base">
                  {place.bedroom === undefined ? 1 : place.bedroom} bedroom
                  &bull;
                </span>{" "}
                &#32;
                <span className="text-base">
                  {place.bed === undefined ? 1 : place.bed} bed &bull;
                </span>{" "}
                &#32;
                <span className="text-base">
                  {place.bathroom === undefined ? 1 : place.bathroom} bathroom
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
                    <h2 className="text-base font-bold">
                      {" "}
                      Unbeatable location{" "}
                    </h2>
                    <p className="text-sm text-gray-500">
                      {" "}
                      100% of guests in the past year gave this location a
                      5-star rating.{" "}
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
                  <h2 className="text-xl py-2 font-medium">
                    {" "}
                    About this space{" "}
                  </h2>
                  <p className="text-base text-gray-500 mb-3">
                    {" "}
                    {place.description}{" "}
                  </p>
                </div>

                <div>
                  <h3 className="text-base py-2 font-medium">
                    {" "}
                    Extra information{" "}
                  </h3>
                  <p className="text-base text-gray-500"> {place.extraInfo} </p>
                </div>
              </div>

              <div className=" flex flex-col gap-4 text-lg font-medium border-t-2 my-6 py-8">
                <h2 className="text-xl py-2 font-medium">
                  {" "}
                  Where you'll sleep{" "}
                </h2>

                <div className="border px-10 py-6 justify-center align-middle items-center rounded-lg w-6/12">
                  <LuBedDouble size={"2rem"} />
                  <div className="flex flex-col mt-3 gap-0.5">
                    <h3 className="text-base font-medium"> Bedroom </h3>
                    <p className="text-base font-light">
                      {" "}
                      {place.bedroom} double bed{" "}
                    </p>
                  </div>
                </div>
              </div>

              <div className=" flex flex-col gap-4 text-lg font-medium border-t-2 my-6 py-8">
                <h2 className="text-xl py-2 font-medium">
                  {" "}
                  What this place offers{" "}
                </h2>

                <div className="px-1 py-6 grid grid-cols-4 md:grid-cols-2 justify-center align-middle items-center rounded-lg w-9/12">
                  {(place.perks || []).map((perk, index) => (
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
            <BookingWidget place={place} />
          </div>
        </div>
        <div className="mt-8 text-sm text-gray-500 leading-4"></div>
      </div>
    </>
  );
}
