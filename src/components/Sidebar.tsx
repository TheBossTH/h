import React from "react";

export default function Sidebar({}) {
  return (
    <div
      className="bg-gray-500 opacity-75 shadow-lg hover:opacity-100 rounded-full text-center h-50 fixed transform -translate-x-1/2 -translate-y-1/2"
      style={{ top: "50%", left: "5%" }}
      id="sidebar"
    >
      <a href="https://h-beta.vercel.app/">
        <img
          src={require("../assets/image/logo.png")}
          alt="home"
          className="h-10 m-2"
        />
      </a>
      <div className="m-2">
        <a href="" className="text-white text-xl hover:text-red-800">
          <i className="fas fa-search" />
        </a>
      </div>
      <div className="m-2">
        <a href="" className="text-white text-xl hover:text-red-800">
          <i className="far fa-bookmark" />
        </a>
      </div>
      <div className="m-2">
        <a href="" className="text-white text-xl hover:text-red-800">
          <i className="fas fa-history" />
        </a>
      </div>
      <div className="m-2">
        <a href="" className="text-white text-xl hover:text-red-800">
          <i className="fas fa-tags" />
        </a>
      </div>
      <div className="m-2">
        <a href="" className="text-white text-xl hover:text-red-800">
          <i className="fas fa-cog" />
        </a>
      </div>
    </div>
  );
}
