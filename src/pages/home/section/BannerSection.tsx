import bannerImage from "@/assets/images/banner.webp";
import { Button } from "../../../components/ui/Button";

export default function BannerSection() {
  return (
    <section className="relative w-full h-[85vh] overflow-hidden">
      {/* Imagen de fondo */}
      <img
        src={bannerImage}
        alt="Banner de Lunarossa"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Capa oscura encima */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Contenido centrado */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-4 h-full">
        <h1 className="text-2xl md:text-4xl font-bold mb-4">
          Bienvenido a Lunarosa: Momentos Únicos, Experiencias Inolvidables
        </h1>
        <p className="text-base md:text-lg mb-6">
          Reserva ahora y disfruta de una estancia inolvidable
        </p>
        <Button text="Reservar ahora" />
      </div>
    </section>
  );
}
