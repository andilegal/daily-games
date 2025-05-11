/* eslint-disable @typescript-eslint/no-explicit-any */
import { Container } from "@/components/container";
import { InputText } from "@/components/input-text";
import { GameList } from "@/types/games";
import { Card } from "flowbite-react";
import Link from "next/link";
import { BiRightArrowCircle } from "react-icons/bi";

async function getGameByTitle(title: string): Promise<GameList | undefined> {
  try {
    const res = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game&title=${decodeURI(
        title
      )}`,
      { next: { revalidate: 320 } }
    );
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching game by title:", error);
  }
}

export default async function Search({ params }: any) {
  const title = params?.title;
  const games = await getGameByTitle(title);

  return (
    <main className="flex flex-col items-center justify-between w-full">
      <Container>
        <InputText />

        {!games && (
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-center text-2xl mt-8 mb-8 font-bold">
              Nenhum jogo encontrado
            </h1>
          </div>
        )}
        {games && (
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-center text-2xl mt-8 mb-8 font-bold">
              Encontramos {games?.length} jogos
            </h1>
          </div>
        )}
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          {games &&
            games?.map((game) => (
              <li key={game.id} className="w-full lg:h-[250px] relative">
                <Link href={`/game/${game.id}`}>
                  <Card
                    className="w-full h-full [&>img]:scale-100 [&>img]:transition-all [&>img]:duration-300 hover:[&>img]:scale-105 border-3 shadow-md hover:shadow-lg"
                    imgAlt={game?.title}
                    imgSrc={game?.image_url}
                  >
                    <h5 className="text-md text-center font-semibold tracking-tight text-gray-900 dark:text-white">
                      {game.title}
                    </h5>
                    <BiRightArrowCircle
                      size={24}
                      color="#FFF"
                      className="absolute bottom-2 right-2"
                    />
                  </Card>
                </Link>
              </li>
            ))}
        </ul>
      </Container>
    </main>
  );
}
