import React from "react";
import Image from "next/image";

function page() {
  return (
    <div className="max-w-[90%] m-auto mt-10">
      <div className=" m-auto relative w-[80%] h-[26rem] overflow-hidden rounded-md">
        <Image
          src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bXVzaWMlMjBjb3ZlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="music"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="w-[80%] m-auto mt-4">
        <p className="font-semibold text-2xl"> Music Title</p>
        <p className="text-gray-400 ">By some one</p>

        <div className="mt-8">

        <p className="font-semibold text-2xl"> About</p>
        <p className=" text-gray-800">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem voluptate illo rerum corrupti sed ipsum blanditiis molestiae maxime voluptatum quibusdam quas laboriosam ducimus, tempore temporibus quae obcaecati impedit numquam doloremque?
      </p>
        </div>

   
      </div>

    
    </div>
  );
}

export default page;
