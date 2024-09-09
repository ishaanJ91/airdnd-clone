import React from "react";
import { FaWifi } from "react-icons/fa";
import { FaRadio } from "react-icons/fa6";
import { MdPets as MdOutlinePets } from "react-icons/md";
import { MdPets, MdPool as MdOutlinePool } from "react-icons/md";
import { GoNoEntry } from "react-icons/go";
import { LuParkingCircle } from "react-icons/lu";
import { IoTvOutline } from "react-icons/io5";
import { BsPersonWorkspace } from "react-icons/bs";
import { TbToolsKitchen2 } from "react-icons/tb";

export default function Perks({ selected, onChange }) {
  function handleCbClick(ev) {
    const { checked, name } = ev.target;

    if (checked) {
      onChange([...selected, name]);
    } else {
      onChange([...selected.filter((selectedName) => selectedName != name)]);
    }
  }

  return (
    <>
      <div className="grid mt-2 grid-cols-2 md:grid-col-3 lg:grid-col-6 gap-2">
        <label className="border p-4 flex rounded-lg gap-2 items-center cursor-pointer">
          <input
            type="checkbox"
            checked={selected.includes("Wi-Fi")}
            name="Wi-Fi"
            onChange={handleCbClick}
          />
          <FaWifi size={25} />
          <span>Wifi</span>
        </label>

        <label className="border p-4 flex rounded-lg gap-2 items-center cursor-pointer">
          <input
            type="checkbox"
            checked={selected.includes("Parking")}
            name="Parking"
            onChange={handleCbClick}
          />
          <LuParkingCircle size={25} />
          <span>Free parking spot</span>
        </label>

        <label className="border p-4 flex rounded-lg gap-2 items-center cursor-pointer">
          <input
            type="checkbox"
            checked={selected.includes("TV")}
            name="TV"
            onChange={handleCbClick}
          />
          <IoTvOutline size={25} />
          <span>TV</span>
        </label>

        <label className="border p-4 flex rounded-lg gap-2 items-center cursor-pointer">
          <input
            type="checkbox"
            checked={selected.includes("Radio")}
            name="Radio"
            onChange={handleCbClick}
          />
          <FaRadio size={25} />
          <span>Radio</span>
        </label>

        <label className="border p-4 flex rounded-lg gap-2 items-center cursor-pointer">
          <input
            type="checkbox"
            checked={selected.includes("Pets")}
            name="Pets"
            onChange={handleCbClick}
          />
          <MdOutlinePets size={25} />
          <span>Pets</span>
        </label>

        <label className="border p-4 flex rounded-lg gap-2 items-center cursor-pointer">
          <input
            type="checkbox"
            checked={selected.includes("Entrance")}
            name="Entrance"
            onChange={handleCbClick}
          />
          <GoNoEntry size={25} />
          <span>Private entrance</span>
        </label>

        <label className="border p-4 flex rounded-lg gap-2 items-center cursor-pointer">
          <input
            type="checkbox"
            checked={selected.includes("Pool")}
            name="Pool"
            onChange={handleCbClick}
          />
          <MdOutlinePool size={25} />
          <span>Pool</span>
        </label>

        <label className="border p-4 flex rounded-lg gap-2 items-center cursor-pointer">
          <input
            type="checkbox"
            checked={selected.includes("Kitchen")}
            name="Kitchen"
            onChange={handleCbClick}
          />
          <TbToolsKitchen2 size={25} />
          <span>Kitchen</span>
        </label>

        <label className="border p-4 flex rounded-lg gap-2 items-center cursor-pointer">
          <input
            type="checkbox"
            checked={selected.includes("Workspace")}
            name="Workspace"
            onChange={handleCbClick}
          />
          <BsPersonWorkspace size={25} />
          <span> Workspace </span>
        </label>
      </div>
    </>
  );
}
