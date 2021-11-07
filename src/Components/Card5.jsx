import React from "react";

export default function Card5() {
  return (
    <div className="h-screen">
      <div className="container">
        <div className="flex mx-4 items-center justify-center">
          <div className="w-auto  xl:w-1/4">
            <a className="c-card block bg-white shadow-3xl">
              <div className="relative w-full h-64">
                <img
                  className="absolute inset-0 h-full w-full bg-cover bg-center"
                  src="https://img.wattpad.com/08232af3eabdb307b97f332fa910bc85f534c840/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f6a32422d367a697664664f6843673d3d2d3835333335393038352e313566656332333761333064663938323534323031363538343238342e6a7067?s=fit&w=720&h=720"
                />
                <div class="absolute m-5 mx-48 my-36  w-2/4 text-white">
                  <p className=" font-semibold text-center ">
                    No encontrecomo hacereste o las herramientas como tal.
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
