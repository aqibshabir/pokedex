import React from "react";

export default function Card({ data }) {
  return (
    <>
      <div className="flex flex-col items-center w-full bg-slate-900 border border-white rounded-2xl my-8 p-8 ">
        <p className="my-5">{data.name}</p>
        <img className="" src={data.image} alt="" />
      </div>
    </>
  );
}
