"use client";
import Music from "@/components/Music";
import Navbar from "@/components/Navbar";
import Spinner from "@/components/Spinner";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState, useEffect } from "react";

const api_key = "3121e81a9d9edade04ccdb1e7508f35e";
const api_shared_key = "f2a40d5eb25e82f46eb8beeb8eb4e08d";
const user_name = "amrit_ghimire";

export default function Home({}) {
  const [search, setSearch] = useState("Believe");

  async function getMusic(query) {
    const { data } = await axios.get(
      `http://ws.audioscrobbler.com/2.0/?method=album.search&album=${query}&api_key=${api_key}&format=json`
    );

    console.log(data);
    return data;
  }

  useEffect(() => {}, [search]);

  const { data, isLoading, isFetching, error } = useQuery(
    ["music", search],
    () => getMusic(search)
  );

  console.log({ data });

  if (error) return <div className="max-[40px]">error...</div>;
  return (
    <>
      <Navbar search={search} setSearch={setSearch} />

      <div className="flex border-2 h-screen p-40 flex-wrap justify-evenly gap-10 items-center">
        {isLoading ? (
          <div>
            <Spinner />
          </div>
        ) : (
          <>
            {data?.results?.albummatches?.album?.length <= 0 ? (
              <div>No results found</div>
            ) : (
              data?.results?.albummatches?.album?.map((music: any) => {
                console.log("what is music", music);
                return <Music key={music.name} music={music} />;
              })
            )}
          </>
        )}
      </div>
    </>
  );
}
