import React from 'react'

export default function Card(props) {
  return (
    <div class="w-full rounded overflow-hidden border-2 mb-2">
      <img
        className="h-[220px] w-full object-cover"
        src={props.bgsrc}
        alt="Sunset in the mountains"
      />
      <div class="px-6 py-4">
        <span className="font-bold text-gray-800">
          <i className="text-yellow-600 fa-solid fa-pen-to-square"></i> Article
        </span>
        <div className="flex justify-between font-bold text-xl mb-2 mt-2">
          <h1>{props.title}</h1>
          <i className="mt-1.5 fa-solid fa-ellipsis"></i>
        </div>
        <p class="text-gray-700 text-base">{props.para}</p>
      </div>
      <div class="flex justify-between px-6 pt-4 pb-2">
        <div className="flex items-center font-bold">
          <img
            className="w-12 h-12 rounded-full mr-2 object-cover"
            src={props.profilesrc}
            alt=""
          />
          <span>{props.username}</span>
        </div>
        <div className="flex items-center gap-6 text-sm ">
          <p>
            <i className="fa-regular fa-eye"></i>
            {props.views} views
          </p>
          <div>
            <i className="w-10 h-8 bg-gray-100 flex justify-center items-center fa-solid fa-share-nodes"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
