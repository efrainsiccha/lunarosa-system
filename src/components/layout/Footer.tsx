import {
  Facebook,
  Instagram,
  MapPin,
  BookOpenCheck,
  Globe,
  Building2,
} from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-black text-white text-base py-10 mt-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start text-center md:text-left gap-y-12 md:gap-x-24">
          {/* Sedes */}
          <div className="flex flex-col items-center md:items-start">
            <p className="mb-2 text-white font-semibold flex items-center gap-2">
              <Building2 className="w-4 h-4" /> SEDES
            </p>
            <ul className="text-white/50 space-y-1 md:space-y-2">
              <li>
                <a
                  href="https://www.google.com/maps/place/Luna+Rosa/@-8.0998363,-79.0454001,755m/data=!3m2!1e3!4b1!4m9!3m8!1s0x91ad3d95e410c88f:0x11895d0e327f78de!5m2!4m1!1i2!8m2!3d-8.0998416!4d-79.0407867!16s%2Fg%2F1q67rk472?entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <MapPin className="w-4 h-4" /> Santa Inés
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/maps/place/Luna+Rosa/@-8.1280261,-79.0216685,755m/data=!3m1!1e3!4m9!3m8!1s0x91ad17d874511ffb:0x4034e63d823970bb!5m2!4m1!1i2!8m2!3d-8.1280314!4d-79.0190936!16s%2Fg%2F11bc7d9mst?entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <MapPin className="w-4 h-4" /> Santa María
                </a>
              </li>
            </ul>
          </div>

          {/* Libro de reclamaciones */}
          <div className="flex flex-col items-center">
            <p className="mb-2 text-white font-semibold">
              LIBRO DE RECLAMACIONES
            </p>
            <BookOpenCheck className="w-8 h-8 text-white" />
          </div>

          {/* Redes sociales */}
          <div className="flex flex-col items-center">
            <p className="mb-2 flex items-center gap-2 text-white font-semibold">
              <Globe className="w-4 h-4" /> REDES SOCIALES
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-md bg-black border border-white text-white hover:bg-white hover:text-black transition-colors duration-500"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-md bg-black border border-white text-white hover:bg-white hover:text-black transition-colors duration-500"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-white/10 pt-4 text-left text-xs text-gray-500 tracking-wide">
          © Lunarosa 2025. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};
