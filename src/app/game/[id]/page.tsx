/* eslint-disable @typescript-eslint/no-explicit-any */
import { Container } from "@/components/container";
import { GameProps } from "@/types/games";
import { Card } from "flowbite-react";
import Image from "next/image";
import { redirect } from "next/navigation";
import { BiRightArrowCircle } from "react-icons/bi";

async function getGameById(id: string): Promise<GameProps | undefined> {
  try {
    const res = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game&id=${id}`,
      { next: { revalidate: 320 } }
    );
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching game by id:", error);
  }
}

async function getSortedGame(): Promise<GameProps | undefined> {
  try {
    const res = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game_day`,
      { next: { revalidate: 320 } }
    );
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching game by id:", error);
  }
}

export default async function Game({ params }: any) {
  const { id } = params;
  const game = await getGameById(id);
  const sortedGame = await getSortedGame();

  if (!game) {
    redirect("/");
  }

  return (
    <main className="flex flex-col items-center justify-center text-black w-full">
      <div className="bg-black h-80 w-full relative sm:h-96">
        <Image
          src={game.image_url}
          alt={game.title}
          priority
          fill
          quality={100}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
          className="object-cover w-full opacity-75 sm:h-96 h-80"
        />
      </div>

      <Container>
        <div className="mt-8 mb-8 p-6 bg-white shadow-md rounded-lg w-full max-w-4xl">
          <h1 className="text-center text-3xl font-extrabold text-gray-800 mb-6">
            {game.title}
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-8 text-justify">
            {game.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-gray-100 p-6 rounded-md shadow-sm">
              <h2 className="text-xl font-semibold text-gray-700 mb-4">
                Categories
              </h2>
              <ul className="list-disc list-inside space-y-2">
                {game.categories.map((category) => (
                  <li key={category} className="text-gray-600">
                    {category}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-100 p-6 rounded-md shadow-sm">
              <h2 className="text-xl font-semibold text-gray-700 mb-4">
                Platforms
              </h2>
              <ul className="list-disc list-inside space-y-2">
                {game.platforms.map((plat) => (
                  <li key={plat} className="text-gray-600">
                    {plat}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8">
            <Card
              className="w-full h-full  mx-auto [&>img]:scale-100 [&>img]:transition-all [&>img]:duration-300 hover:[&>img]:scale-105 border-3 shadow-md hover:shadow-lg"
              imgAlt={sortedGame?.title}
              imgSrc={sortedGame?.image_url}
            >
              <h5 className="text-md text-center font-semibold tracking-tight text-gray-900 dark:text-white">
                {sortedGame?.title}
              </h5>
              <BiRightArrowCircle
                size={24}
                color="#FFF"
                className="absolute bottom-2 right-2"
              />
            </Card>
          </div>
        </div>
      </Container>
    </main>
  );
}
