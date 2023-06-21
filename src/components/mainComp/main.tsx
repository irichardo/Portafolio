import Image from "next/image";

export default function main() {
  return (
    <>
      <div className="w-full h-full bg-gray-900 flex items-center justify-center overflow-hidden">
        <div className="w-5/6 h-full flex justify-center items-center">
          <div className="w-5/6 h-full flex items-center justify-center">
            <div className="w-4/5 h-4/6 rounded-lg justify-center flex flex-col items-center relative ">
              <div>
            <div className="w-10 h-10 bg-red-500 absolute rounded-xl right-0 top-[5vh] z-0" />
            <div className="w-16 h-16 bg-red-500 absolute rounded-xl right-[8vh] top-[12vh] z-0" />
            <div className="w-8 h-8 bg-red-500 absolute rounded-xl   right-[1vh] top-[22vh] z-0" />
              </div>
              <div className="w-4/5 h-4/5 flex items-center justify-center text-9xl text-gray-50 roboto">
                WEB DEVELOPER
              </div>
              <div className="w-4/5 h-2/5 text-orange-300 ">
                Make designs, improves designs and create solutions.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
