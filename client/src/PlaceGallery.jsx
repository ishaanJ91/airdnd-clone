import { useState } from "react";
import Masonry from "react-masonry-css";
import "./masonry.css";

export default function PlaceGallery({ place }) {
  const [showAllPhotos, setShowAllPhotos] = useState(false);

  // Check if place and place.addedPhotos are defined
  if (!place || !place.addedPhotos) {
    return null; // or return a loader/spinner if data is still being fetched
  }

  if (showAllPhotos) {
    const breakpointColumnsObj = {
      default: 2,
      700: 1,
    };

    return (
      <>
        <div className="fixed inset-0 z-50 flex flex-col gap-10 bg-white px-10 pb-10 overflow-y-auto">
          <button
            onClick={() => setShowAllPhotos(false)}
            className="flex flex-row mt-5 py-5 gap-2 bg-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid px-14"
            columnClassName="my-masonry-grid_column"
          >
            {place.addedPhotos?.map((photo, index) => (
              <img
                key={index}
                className="rounded-lg object-cover"
                src={"http://localhost:4000/uploads/" + photo}
                alt=""
              />
            ))}
          </Masonry>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="relative">
        <div
          className="grid gap-2 grid-cols-[1fr_1fr] rounded-xl overflow-hidden"
          onClick={() => setShowAllPhotos(true)}
        >
          <div>
            {place.addedPhotos?.[0] && (
              <div>
                <img
                  className="aspect-square cursor-pointer object-cover"
                  src={
                    "http://localhost:4000/uploads/" + place.addedPhotos?.[0]
                  }
                  alt=""
                />
              </div>
            )}
          </div>

          <div className="grid grid-cols-2">
            <div className="overflow-hidden">
              {place.addedPhotos?.[0] && (
                <img
                  className="aspect-square cursor-pointer object-cover relative right-2"
                  src={
                    "http://localhost:4000/uploads/" + place.addedPhotos?.[1]
                  }
                  alt=""
                />
              )}

              <div className="overflow-hidden">
                {place.addedPhotos?.[0] && (
                  <img
                    className="aspect-square cursor-pointer object-cover relative top-2 right-2"
                    src={
                      "http://localhost:4000/uploads/" + place.addedPhotos?.[2]
                    }
                    alt=""
                  />
                )}
              </div>
            </div>

            <div className="">
              {place.addedPhotos?.[0] && (
                <img
                  className="aspect-square cursor-pointer object-cover"
                  src={
                    "http://localhost:4000/uploads/" + place.addedPhotos?.[3]
                  }
                  alt=""
                />
              )}

              <div className="overflow-hidden">
                {place.addedPhotos?.[0] && (
                  <img
                    className="aspect-square cursor-pointer object-cover relative top-2"
                    src={
                      "http://localhost:4000/uploads/" + place.addedPhotos?.[4]
                    }
                    alt=""
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={() => setShowAllPhotos(true)}
          className="flex gap-1 absolute bottom-4 right-4 py-2 px-4 bg-white rounded-xl shadow-md shadow-gray-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path d="M6 3a3 3 0 0 0-3 3v2.25a3 3 0 0 0 3 3h2.25a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6ZM15.75 3a3 3 0 0 0-3 3v2.25a3 3 0 0 0 3 3H18a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3h-2.25ZM6 12.75a3 3 0 0 0-3 3V18a3 3 0 0 0 3 3h2.25a3 3 0 0 0 3-3v-2.25a3 3 0 0 0-3-3H6ZM17.625 13.5a.75.75 0 0 0-1.5 0v2.625H13.5a.75.75 0 0 0 0 1.5h2.625v2.625a.75.75 0 0 0 1.5 0v-2.625h2.625a.75.75 0 0 0 0-1.5h-2.625V13.5Z" />
          </svg>
          All photos
        </button>
      </div>
    </>
  );
}
