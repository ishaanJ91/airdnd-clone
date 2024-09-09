import React, { useEffect, useState } from "react";
import PhotosUploader from "../PhotosUploader";
import Perks from "../Perks";
import AccountNav from "../AccountNav";
import { Navigate, useParams } from "react-router-dom";
import axios from "axios";

export default function PlacesFormPage() {
  const formatDate = (date, daysToAdd = 0) => {
    const d = new Date(date);
    d.setDate(d.getDate() + daysToAdd);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [addedPhotos, setAddedPhotos] = useState([]);
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [perks, setPerks] = useState([]);
  const [extraInfo, setExtraInfo] = useState("");
  const [checkIn, setCheckIn] = useState(formatDate(new Date()));
  const [checkOut, setCheckOut] = useState(formatDate(new Date(), 1));
  const [maxGuests, setMaxGuests] = useState(1);
  const [price, setPrice] = useState(100);
  const [bedroom, setBedroom] = useState(1);
  const [bathroom, setBathroom] = useState(1);
  const [bed, setBed] = useState(1);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (!id) {
      return;
    }

    axios
      .get("/places/" + id)
      .then((response) => {
        const { data } = response;
        setTitle(data.title);
        setAddress(data.address);
        setAddedPhotos(data.addedPhotos);
        setDescription(data.description);
        setPerks(data.perks);
        setExtraInfo(data.extraInfo);
        setCheckIn(formatDate(data.checkIn));
        setCheckOut(formatDate(data.checkOut));
        setMaxGuests(data.maxGuests);
        setPrice(data.price);
        setBedroom(data.bedroom);
        setBathroom(data.bathroom);
        setBed(data.bed);
      })
      .catch((error) => {
        console.error("Error fetching place data:", error);
      });
  }, [id]);

  function inputHeader(text) {
    return <h2 className="text-2xl mt-4"> {text} </h2>;
  }

  function inputDescription(text) {
    return <p className="text-gray-500 text-sm"> {text} </p>;
  }

  function preInput(header, description) {
    return (
      <>
        {inputHeader(header)}
        {inputDescription(description)}
      </>
    );
  }

  async function savePlace(ev) {
    ev.preventDefault();

    const placeData = {
      title,
      address,
      addedPhotos,
      description,
      perks,
      extraInfo,
      checkIn,
      checkOut,
      maxGuests,
      price,
      bedroom,
      bathroom,
      bed,
    };

    if (id) {
      await axios.put("/places", { id, ...placeData });
      setRedirect(true);
    } else {
      await axios.post("/places", placeData);
      setRedirect(true);
    }
  }

  if (redirect) {
    return <Navigate to={"/account/places"} />;
  }

  return (
    <>
      <div>
        <AccountNav />
        <form onSubmit={savePlace}>
          {preInput("Title", "Title for your place")}
          <input
            type="text"
            value={title}
            onChange={(ev) => setTitle(ev.target.value)}
            placeholder="Title"
          />

          {preInput("Address", "Address of your place")}
          <input
            type="text"
            value={address}
            onChange={(ev) => setAddress(ev.target.value)}
            placeholder="Address"
          />

          {preInput("Photos", "Photos of your place")}
          <PhotosUploader addedPhotos={addedPhotos} onChange={setAddedPhotos} />

          {preInput("Description", "Description of your place")}
          <textarea
            value={description}
            placeholder="Description"
            onChange={(ev) => setDescription(ev.target.value)}
          />

          {preInput("Perks", "Perks of your place")}
          <Perks selected={perks} onChange={setPerks} />

          {preInput("Extra Info", "Extra info about your place")}
          <textarea
            className=""
            value={extraInfo}
            onChange={(ev) => setExtraInfo(ev.target.value)}
          />

          {preInput(
            "Check-in and Check-out times",
            "Add Check-in and Check-out times, remember to have some time window for cleaning the room between guests"
          )}
          <div className="grid gap-2 sm:grid-col-2 md:grid-cols-4">
            <div>
              <h3 className="mt-2 -mb-1"> Max number of guests </h3>
              <input
                type="number"
                value={maxGuests}
                onChange={(ev) => setMaxGuests(ev.target.value)}
              />
            </div>

            <div>
              <h3 className="mt-2 -mb-1"> Price per night </h3>
              <input
                type="number"
                value={price}
                onChange={(ev) => setPrice(ev.target.value)}
              />
            </div>
          </div>

          {preInput("Facilities", "Facilities of your place")}
          <div>
            <h3 className="mt-2 -mb-1"> Number of bedrooms </h3>
            <input
              type="number"
              value={bedroom}
              onChange={(ev) => setBedroom(Number(ev.target.value))}
              min="1"
            />
          </div>

          <div>
            <h3 className="mt-2 -mb-1"> Number of beds </h3>
            <input
              type="number"
              value={bed}
              onChange={(ev) => setBed(Number(ev.target.value))}
              min="1"
            />
          </div>

          <div>
            <h3 className="mt-2 -mb-1"> Number of bathrooms </h3>
            <input
              type="number"
              value={bathroom}
              onChange={(ev) => setBathroom(Number(ev.target.value))}
              min="1"
            />
          </div>
          <button className="primary my-4"> Save </button>
        </form>
      </div>
    </>
  );
}
