import bannerImage from "@/assets/images/banner.webp";
import { Button } from "../../../components/ui/Button";

export default function BannerSection() {
  return (
    <section className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[600px] xl:h-[85vh] overflow-hidden">
      <img
        src={bannerImage}
        alt="Banner de Lunarossa"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Capa oscura */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Contenido */}
      <div className="relative z-10 flex flex-col justify-center text-white h-full px-6 sm:pl-12 max-w-2xl sm:items-start items-center text-center">
        <h1 className="text-[15px] sm:text-base md:text-2xl lg:text-3xl mb-1 sm:mb-4 w-full text-center">
          Bienvenido a Lunarosa: Momentos Únicos, Experiencias Inolvidables
        </h1>
        <p className="text-[10px] sm:text-sm md:text-base mb-2 sm:mb-6 w-full text-center">
          Reserva ahora y disfruta de una estancia inolvidable
        </p>
        <div className="sm:w-full flex justify-center">
          <Button
            text="Reservar ahora"
            className="px-4 py-1 text-xs sm:px-6 sm:py-2 sm:text-sm md:px-8 md:text-lg"
          />
        </div>
      </div>
    </section>
  );
}
