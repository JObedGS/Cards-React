import React from "react";

export default function Card4() {
  return (
    <div className="bg-gray-200  h-screen ">
      <div className="container ">
        <div className="flex flex-wrap mx-4 m-11 text-center items-center justify-center">
          <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
            <a
              href=""
              className="c-card block bg-white shadow-3xl overflow-hidden"
            >
              <div className="relative pb-48 overflow-hidden">
                <img
                  className="absolute inset-0 h-full w-full"
                  src="https://s03.s3c.es/imag/_v0/770x420/5/5/a/city-london-istock.jpg"
                />
              </div>
              <div className="p-4">
                <p className="text-pink-200 font-semibold text-center ">
                  4 days ago
                </p>
                <p className="font-bold text-center text-3xl mb-4">Post One</p>
                <p className="text-sm text-gray-400 text-center mb-4">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit
                  fringilla sagittis, pulvinar primis quisque id tristique
                  feugiat lectus sollicitudin, arcu nisi litora mollis maecenas
                  nec lacinia quis.
                </p>
              </div>
              <div className="c-card block bg-pink-400 ">
                <div className="grid grid-rows-1 grid-cols-3 text-center text-white ">
                  <div className="m-2 border-r-2 border-pink-800">
                    <p className="font-normal text-2xl">4</p>
                    <p className="text-xs pb-2 ">READ</p>
                  </div>
                  <div className="m-2 border-r-2 border-pink-800">
                    <p className="font-normal text-2xl">5123</p>
                    <p className="text-xs pb-2">VIEWS</p>
                  </div>
                  <div className="m-2">
                    <p className="font-normal text-2xl">32</p>
                    <p className="text-xs pb-2 ">COMMENTS</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
