import Container from "@/components/Container";
import Image from "next/image";
import UserImg from "../../../public/user.png";
import { FaShareAlt } from "react-icons/fa";

export default function Profile() {
  return (
    <main className="w-full text-black">
      <Container>
        <section className="mt-8 mb-6 flex flex-col items-center justify-between realtive gap-3 sm:flex-row">
          <div className="w-full flex items-center gap-4 text-lg flex-col sm:flex-row justify-center sm:justify-normal">
            <Image
              src={UserImg}
              alt="Image perfil user"
              className="rounded-full w-56 h-56 object-cover"
            />
            <h1 className="font-bold text-2xl">Vinicius Cesar</h1>
          </div>
          <div className="sm:absolute top-40 right-0 gap-3 flex items-center justify-center">
            <button className="bg-gray-700 px-4 py-3 rounded-lg text-white">Configurações</button>
            <button className="bg-gray-700 px-4 py-3 rounded-lg">
              <FaShareAlt size={24} color="white" />
            </button>
          </div>
        </section>
      </Container>
    </main>
  );
}
