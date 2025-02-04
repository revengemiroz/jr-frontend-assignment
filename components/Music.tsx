"use client";
import { FC } from "react";
import Image from "next/image";

interface MusicProps {
  music: any;
}

const Music: FC<MusicProps> = ({ music }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="relative w-[14rem] h-[14rem] overflow-hidden rounded-md">
        <Image
          src={music.image[2]["#text"]}
          alt="music"
          layout="fill"
          objectFit="cover"
          priority
          onError={(e) =>
            (e.target.src =
              "https://is2-ssl.mzstatic.com/image/thumb/Features125/v4/fa/f7/54/faf7540e-3346-b548-55d8-8617ce707554/dj.hbpmuqwc.jpg/400x400cc.jpg")
          }
        />
      </div>

      <div className="  ">
        <p className="font-semibold text-lg w-44  text-ellipsis truncate">
          {" "}
          {music.name}
        </p>
        <p className="text-gray-400 text-sm">By {music.artist.name}</p>
      </div>
    </div>
  );
};

export default Music;
