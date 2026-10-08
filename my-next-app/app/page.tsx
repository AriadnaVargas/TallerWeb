import Image from "next/image";
import Generador from "../components/generador";
import Formulario from "../components/Formulario";
import ProgressBar from "@/components/Progressbar";
export default function Home() {
  return (
    <div>
      <div>
        <Formulario />
      </div>
      <div>
        <Generador />
      </div>
      <div>
        <ProgressBar />
      </div>
    </div>
  );
}
