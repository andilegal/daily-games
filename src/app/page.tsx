/* eslint-disable @typescript-eslint/no-explicit-any */
import { Container } from "@/components/container";
import { InputText } from "@/components/input-text";
import { GameList, GameProps } from "@/types/games";
import { Card } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import { BiRightArrowCircle } from "react-icons/bi";
import { BsArrowRightSquare } from "react-icons/bs";

async function getDailyGames(): Promise<GameProps | undefined> {
  try {
    const res = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game_day`,
      { next: { revalidate: 320 } }
    );

    return res.json();
  } catch (error) {
    console.error("Error fetching daily games:", error);
  }
}

async function getGamesData(): Promise<GameList | undefined> {
  try {
    const res = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=games`, {
      next: { revalidate: 320 },
    });

    return res.json();
  } catch (error) {
    console.error("Error fetching daily games:", error);
  }
}

export async function generateMetadata({ params }: any) {
  try {
    const res: GameProps = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game&id=${params?.id}`,
      { next: { revalidate: 60 } }
    )
      .then((res) => res.json())
      .catch(() => ({
        title: "Daily Games - Descubra jogos incriveis para se divertir",
      }));

    return {
      title: res?.title,
      description: `${res.description.slice(0, 100)}`,
      openGraph: {
        title: res.title,
        images: [res.image_url],
      },
    };
  } catch {
    return {
      title: "Daily Games - Descubra jogos incriveis para se divertir",
    };
  }
}

export default async function Home() {
  const dailyGames = await getDailyGames();
  const games = await getGamesData();

  return (
    <main className="flex flex-col items-center justify-between w-full">
      <Container>
        <h1 className="text-center text-2xl mt-8 mb-8 font-bold">
          Confira o jogo exclusivo que escolhemos para você hoje!
        </h1>
        <Link href={`/game/${dailyGames?.id}`}>
          <section className="flex flex-col items-center justify-center bg-black rounded-lg">
            <div className="w-full max-96 h-96 relative rounded-lg">
              <div className="absolute z-20 gap-3 bottom-0 p-3 flex items-center justify-between">
                <p className="text-white text-lg font-bold shadow-lg">
                  {dailyGames?.title}
                </p>
                <BsArrowRightSquare size={24} color="#FFF" />
              </div>
              {dailyGames && (
                <Image
                  src={dailyGames?.image_url}
                  priority
                  className="rounded-lg  max-h-96 object-cover opacity-50 hover:opacity-100 transition-all duration-300"
                  alt={dailyGames?.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 44vw"
                />
              )}
            </div>
          </section>
        </Link>

        <InputText />
        <h2 className="text-3xl">Jogos para conhecer</h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          {games?.map((game) => (
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
