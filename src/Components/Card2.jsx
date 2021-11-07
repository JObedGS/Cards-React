import React from "react";

export default function Card2() {
  return (
    <div className="h-screen">
      <div className="mx-11 flex justify-center">
        {/* card */}
        <div className="bg-white mb-4 rounded-lg shadow-2xl w-3/4  ">
          <div className="flex">
            <img
              className="rounded-t h-auto w-80 object-cover"
              src="https://tecnohotelnews.com/wp-content/uploads/2020/07/venice-italy-beautiful-scenery-of-the-typical-chan-YCM8MP6.jpg"
            />
            <div className="rounded-t-lg py-3 px-12  ">
              <p className="mb-8 mt-4 font-extralight text-center font-serif">
                FEATURED
              </p>
              <p className="text-5xl font-serif font-normal text-center">
                BLUE OCEAN WAVES GRASH
              </p>
              <hr className="mb-8 mt-8 mx-44 w-12" />
              <p className="font-serif font-regular text-sm text-justify">
                Lorem ipsum dolor sit amet consectetur adipiscing elit fringilla
                sagittis, pulvinar primis quisque id tristique feugiat lectus
                sollicitudin, arcu nisi litora mollis maecenas nec lacinia quis.
                Viverra dapibus ac curabitur erat gravida diam, phasellus
                sodales sociosqu facilisi nascetur ligula, suspendisse nam
                tempor in tincidunt. Porttitor sed tellus malesuada commodo nec
                nisi cum tempor ut ultricies mi, arcu phasellus scelerisque per
                nam eros dui turpis lectus mollis aptent vehicula, vel nunc quam
                etiam inceptos tortor imperdiet orci elementum habitasse.
              </p>
              <br />
              <br />
              <br />
              <p className="text-7xl text-center text-gray-500"> ̌ </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
