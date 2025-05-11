"use client";

import { useState } from "react";
import { FiEdit, FiX } from "react-icons/fi";

export const Favorite = () => {
  const [showInput, setShowInput] = useState(false);
  const [input, setInput] = useState("");
  const [gameName, setGameName] = useState("");

  const toggle = () => {
    setShowInput((prev) => !prev);
    if (input !== "") {
      setGameName(input);
    }

    setInput("");
  };

  return (
    <div className="bg-gray-900 shadow-md justify-between rounded-lg p-6 flex flex-col gap-6">
      {showInput ? (
        <div className="flex items-center  gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 px-3 py-2 rounded-md border border-gray-700 bg-gray-800 text-white"
            placeholder="Digite o nome do jogo"
          />
          <button
            onClick={toggle}
            className="p-2 bg-red-500 rounded-md hover:bg-red-600"
          >
            <FiX size={20} color="#FFF" />
          </button>
        </div>
      ) : (
        <button
          onClick={toggle}
          className="self-start px-4 py-2 bg-gray-700 rounded-md hover:bg-gray-600 flex items-center gap-2"
        >
          <FiEdit size={20} color="#FFF" />
        </button>
      )}

      {gameName && (
        <div className="mt-4 text-white">
          <span className="font-semibold">Jogo favorito:</span>
          <p className="mt-1 text-lg">{gameName}</p>
        </div>
      )}

      {!gameName && <p className="text-white">Adicionar jogo</p>}
    </div>
  );
};
