"use client";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useRouter } from "next/navigation";

export function InputText({
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  const [value, setValue] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (value.trim() === "") {
      setIsError(true);
      return;
    }

    setIsError(false);
    router.push(`/game/search/${value}`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (isError && e.target.value.trim() !== "") {
      setIsError(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full bg-slate-200 my-5 flex flex-col gap-2 items-center justify-center rounded-lg p-2 transition-all duration-300"
    >
      <div className="flex flex-col sm:flex-row justify-between items-center w-full gap-2">
        <input
          type="text"
          className={`w-full sm:w-10/12 outline-none bg-slate-200 p-2 rounded-md`}
          onChange={handleChange}
          value={value}
          {...props}
          placeholder="Procurando algum jogo? ...."
        />
        <button
          type="submit"
          className="flex items-center justify-center bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-all duration-300"
        >
          <FiSearch size={20} className="mr-2" />
          Buscar
        </button>
      </div>
      {isError && (
        <p className="text-red-500 text-sm mt-1 transition-opacity duration-300">
          O campo não pode ficar vazio. Por favor, insira um valor.
        </p>
      )}
    </form>
  );
}
