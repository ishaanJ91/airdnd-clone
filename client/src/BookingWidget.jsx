import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { UserContext } from "./UserContext";
import PaymentWidget from "./PaymentWidget";

export default function BookingWidget({ place }) {
  const formatDate = (date, daysToAdd = 0) => {
    const d = new Date(date);
    d.setDate(d.getDate() + daysToAdd);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const [addGuest, setAddGuest] = useState(1);
  const [checkIn, setCheckIn] = useState(formatDate(new Date()));
  const [checkOut, setCheckOut] = useState(formatDate(new Date(), 1));
  const [name, setName] = useState("");
  const { user } = useContext(UserContext);
  const date1 = new Date(checkIn);
  const date2 = new Date(checkOut);
  const diffTime = Math.abs(date2 - date1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const [redirect, setRedirect] = useState(false);
  const [showPaymentWidget, setShowPaymentWidget] = useState(false);

  useEffect(() => {
    if (user) {
      setName(user.name);
    }
  }, [user]);

  function addMoreGuest() {
    if (addGuest < place.maxGuests) {
      setAddGuest(addGuest + 1);
    }
  }

  function removeGuest() {
    if (addGuest > 1) {
      setAddGuest(addGuest - 1);
    }
  }

  function handleCheckInDateChange(e) {
    const selectedDate = e.target.value;
    setCheckIn(selectedDate);
    setCheckOut(formatDate(selectedDate, 1));
  }

  async function bookingPlace() {
    try {
      const response = await axios.post("/bookings", {
        name,
        checkIn,
        checkOut,
        place: place._id,
        addGuest,
        price: place.price * diffDays * addGuest + 100,
      });

      const bookingId = response.data._id;

      setShowPaymentWidget(true);

      return bookingId;
    } catch (error) {
      console.error("Error creating booking:", error);
    }
  }

  async function handlePayment() {
    const bookingId = await bookingPlace();
    if (bookingId) {
      try {
        setRedirect(`/account/bookings/${bookingId}`);
      } catch (error) {
        console.error("Error retrieving booking:", error);
      }
    }
  }

  if (redirect) {
    return <Navigate to={redirect} />;
  }

  return (
    <>
      <div className="shadow-lg px-4 pt-6 pb-4 border text-base border-slate-300 rounded-xl">
        <div className="flex items-baseline">
          <p className="text-2xl font-bold">${place.price}</p>
          <p className="ml-2 text-lg">/ night</p>
        </div>

        <div className="border rounded-lg mt-4 border-gray-400">
          <div className="flex">
            <div className="my-4 px-4">
              <label>Check-in</label>
              <input
                className="cursor-pointer"
                type="date"
                value={checkIn}
                onChange={handleCheckInDateChange}
                min={formatDate(Date.now())}
              />
            </div>
            <div className="my-4 px-4">
              <label>Check-out</label>
              <input
                className="cursor-pointer"
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                min={checkIn}
              />
            </div>
          </div>
          <div className="flex justify-between items-center mb-4 pt-4 px-4 border-t border-gray-400">
            <label>Guests</label>
            <div className="flex flex-row gap-4 items-center">
              {addGuest > 1 && (
                <button
                  onClick={removeGuest}
                  onChange={(ev) => setAddGuest(ev.target.value)}
                  className="border border-black rounded-2xl bg-white p-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.2}
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12h14"
                    />
                  </svg>
                </button>
              )}

              {addGuest === 1 && (
                <button className="border border-black rounded-2xl bg-white opacity-40 p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.2}
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12h14"
                    />
                  </svg>
                </button>
              )}

              <span className="text-lg">{addGuest}</span>

              {addGuest < place.maxGuests && (
                <button
                  onClick={addMoreGuest}
                  onChange={(ev) => setAddGuest(ev.target.value)}
                  className="border border-black rounded-2xl bg-white p-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.2}
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </button>
              )}

              {addGuest === place.maxGuests && (
                <button className="border border-black rounded-2xl bg-white opacity-40 p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.2}
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>

          <div className="flex justify-between items-center mb-1 pt-1 px-4 border-t border-gray-400">
            <p> Full Name </p>
            <input
              type="text"
              value={name}
              className="!w-5/12 !rounded-lg"
              onChange={(ev) => setName(ev.target.value)}
            />
          </div>
        </div>

        <button
          onClick={bookingPlace}
          className="my-4 bg-primary py-3 w-full text-white rounded-lg"
        >
          Reserve
        </button>

        <div className="flex flex-col mb-4 pt-4 px-1 text-base">
          <div className="flex flex-row justify-between items-center"></div>

          <div className="flex flex-col">
            <div className="flex flex-row justify-between items-center mb-2">
              <p>
                {place.price} x {diffDays} nights
              </p>
              <p>${place.price * diffDays} / person</p>
            </div>

            <div className="flex flex-row justify-between items-center">
              <p>Airdnd service fee </p>
              <p>$100</p>
            </div>
          </div>

          <div className="flex flex-row justify-between items-center font-semibold border-t-2 pt-6 mt-6">
            <p>Total (incl. taxes) </p>
            <p>${place.price * diffDays * addGuest + 100}</p>
          </div>
        </div>
      </div>

      {showPaymentWidget && <PaymentWidget handlePayment={handlePayment} />}
    </>
  );
}
