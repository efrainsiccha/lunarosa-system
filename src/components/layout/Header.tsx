import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.webp";
import { BurgerMenu } from "../ui/BurgerMenu";
import { Button } from "../ui/Button";
import { NAV_ITEMS } from "../../constants/menu";

export const Header = () => {
  return (
    <header className="bg-black text-white py-3 shadow-md relative">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6 relative h-24">
        {/* Burger Menu: visible solo en mobile y tablet */}
        <div className="lg:hidden flex-1">
          <BurgerMenu />
        </div>

        {/* Logo */}
        <Link
          to="/"
          className={`absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0 lg:flex flex items-center justify-center`}
        >
          <img src={logo} alt="Logo Lunarossa" className="h-28 w-auto" />
        </Link>

        {/* Nav: visible solo en pantallas grandes */}
        <nav className="hidden lg:flex gap-6 uppercase text-sm font-light absolute left-1/2 -translate-x-1/2">
          {NAV_ITEMS.map(({ name, path }) => (
            <Link
              className="text-white/50 hover:text-white transition-colors duration-500"
              key={name}
              to={path}
            >
              {name}
            </Link>
          ))}
        </nav>

        {/* Botones: visibles solo en pantallas grandes */}
        <div className="hidden lg:flex gap-2">
          <Button text="Iniciar Sesión" />
          <Button text="Registrarse" />
        </div>
      </div>
    </header>
  );
};
