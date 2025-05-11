import { Container } from "@/components/container";
import Image from "next/image";
import userImg from "/public/user.png";
import { FaShareAlt } from "react-icons/fa";
import { Favorite } from "@/components/favorite";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Perfil - Anderson",
  description: "Página de perfil do usuário Anderson no Daily Games.",
};

export default function Profile() {
  return (
    <main className=" py-10">
      <Container>
        <section className="flex flex-col items-center">
          <div className="relative">
            <Image
              src={userImg}
              alt="Foto de perfil"
              className="rounded-full w-40 h-40 object-cover border-4 border-blue-500 shadow-lg"
            />
            <button className="absolute bottom-0 right-0 bg-blue-500 text-white p-2 rounded-full shadow-md hover:bg-blue-600">
              <FaShareAlt size={20} />
            </button>
          </div>
          <h1 className="mt-4 text-2xl font-semibold text-gray-800">
            Anderson
          </h1>
          <p className="text-gray-600">anderson@example.com</p>

          <div className="mt-6 flex gap-4">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600">
              Configurações
            </button>
            <button className="px-4 py-2 bg-gray-700 text-white rounded-md shadow-md hover:bg-gray-800">
              Compartilhar
            </button>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            <Favorite />
            <Favorite />
            <Favorite />
          </div>
        </section>
      </Container>
    </main>
  );
}
