import Image from "next/image";

export default function Component() {
  return (
    <div className="rounded-xl bg-neutral-950 text-gray-50">
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-16 lg:px-2 lg:py-20">
        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          <div className="flex flex-col items-center gap-4 ">
            <div className="relative aspect-[2/3] w-[280px] overflow-hidden rounded-xl sm:w-[400px] md:w-[300px] lg:w-[400px] xl:w-[500px] 2xl:w-[600px]">
              <Image
                alt="Movie Poster"
                className="size-full object-cover"
                layout="fill"
                src="https://image.tmdb.org/t/p/original/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg"
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div>
              <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
                The Shawshank Redemption
              </h1>
              <p className="mt-2 text-gray-400">
                Two imprisoned men bond over a number of years, finding solace
                and eventual redemption through acts of common decency.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-sm font-medium uppercase text-gray-400">
                  Release Date
                </div>
                <div className="text-base font-medium">September 23, 1994</div>
              </div>
              <div>
                <div className="text-sm font-medium uppercase text-gray-400">
                  Genre
                </div>
                <div className="text-base font-medium">Drama</div>
              </div>
              <div>
                <div className="text-sm font-medium uppercase text-gray-400">
                  Runtime
                </div>
                <div className="text-base font-medium">142 minutes</div>
              </div>
              <div>
                <div className="text-sm font-medium uppercase text-gray-400">
                  Director
                </div>
                <div className="text-base font-medium">Frank Darabont</div>
              </div>
            </div>
            <div>
              <div className="text-sm font-medium uppercase text-gray-400">
                Plot Summary
              </div>
              <div className="text-base font-medium">
                Two imprisoned men bond over a number of years, finding solace
                and eventual redemption through acts of common decency.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
