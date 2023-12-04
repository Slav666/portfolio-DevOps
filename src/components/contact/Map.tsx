import { FC } from "react";

const Map: FC = () => {
  return (
    <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
      <iframe
        width="100%"
        height="100%"
        title="map"
        className="absolute inset-0"
        frameBorder={0}
        marginHeight={0}
        marginWidth={0}
        style={{ filter: "opacity(0.7)" }}
        src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ7fHPSau7h0gR6uIViG3Ohag&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
      />
      <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
        <div className="lg px-6">
          <p className="title-font font-semibold text-white tracking-widest text-xs">
            MY ADDRESS
          </p>
          <p className="mt-1 text-white">
            56 Drummohr Gardens <br />
            Wallyford, Scotland
          </p>
        </div>
      </div>
    </div>
  );
};

export default Map;
