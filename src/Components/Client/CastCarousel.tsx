"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";
import Image from "next/image";

interface CastMember {
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  profile_path: string;
  cast_id: number;
  character: string;
  credit_id: string;
}

export default function CastCarousel({ castData }: { castData: CastMember[] }) {
  const [emblaRef] = useEmblaCarousel();
  const movieImageurl = `https://image.tmdb.org/t/p/original`;
  const filteredCastMembers = castData.filter((member) => member.profile_path);

  return (
    <div className="embla " ref={emblaRef}>
      <div className="embla__container h-fit pl-4">
        {filteredCastMembers.map((actor, idx) => (
          <div
            className="embla__slide  flex size-full flex-col gap-4 rounded-md bg-neutral-900 pb-4"
            key={idx}
          >
            <Link className="" href={`/actor/${actor.id}`}>
              <div className="cast__img relative h-60 w-full">
                <Image
                  src={`${movieImageurl}${actor.profile_path}`}
                  alt={`${actor.name}`}
                  layout="fill"
                  sizes="50vw"
                  objectFit="cover"
                  className="rounded-md"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
              </div>
            </Link>
            <div className="flex w-full flex-col gap-2 pl-3">
              <h1>Known for: {actor.known_for_department}</h1>
              <h1>Character: {actor.character}</h1>
              <h1>Real-Name: {actor.name || actor.original_name}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
