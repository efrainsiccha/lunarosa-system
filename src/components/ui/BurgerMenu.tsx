import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { NAV_ITEMS } from "../../constants/menu";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "./Button";

export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden relative z-50">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-white z-50 relative flex items-center justify-center h-full"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-9 h-9" /> : <Menu className="w-9 h-9" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Dark overlay */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black backdrop-blur-sm z-30"
            />

            {/* Slide menu */}
            <motion.div
              key="menu"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.3 }}
              className="
                fixed top-25 left-1/2 transform -translate-x-1/2
                w-[90%] md:w-[95%] lg:w-[60%] xl:w-[40%]
                bg-black text-white rounded-lg border border-white
                p-5 z-40 shadow-2xl
                flex flex-col justify-between items-center
                h-[45vh] md:h-[30vh]
              "
            >
              <div className="flex flex-col gap-4">
                {NAV_ITEMS.map(({ name, path }) => (
                  <Link
                    key={name}
                    to={path}
                    onClick={() => setIsOpen(false)}
                    className="text-white/50 hover:text-white transition-colors"
                  >
                    {name}
                  </Link>
                ))}
              </div>

              {/* Auth buttons */}
              <div className="flex gap-2 pt-4 justify-center">
                <Button text="Iniciar Sesión" />
                <Button text="Registrarse" />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
