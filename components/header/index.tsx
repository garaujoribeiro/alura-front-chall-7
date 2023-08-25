import Image from "next/image";
import Link from "next/link";

import Hamburguer from "../../assets/hamburguer.png";
import Logo from "../../assets/Mobile/Logo mobile.png";

const Header = () => {
  return (
    <header className="flex justify-between items-center bg-black max-w-full py-5 px-5">
      <Image
        sizes="100vw"
        src={Logo}
        alt="Logo da loja meteora"
        quality={100}
      />

      <nav className="hidden sm:block">
        <ul className="flex items-center">
          <li className="text-white ml-5 text-sm ">
            <Link href="/">Home</Link>
          </li>
          <li className="text-white ml-5 text-sm ">
            <Link href="/">Nossas lojas</Link>
          </li>
          <li className="text-white ml-5 text-sm ">
            <Link href="/">Novidades</Link>
          </li>
          <li className="text-white ml-5 text-sm ">
            <Link href="/">Promoções</Link>
          </li>
        </ul>
      </nav>

      <form className="flex items-center justify-end flex-1">
        <input className="max-w-[145px] h-full py-2.5" type="text" />
        <button className="text-sm ml-4 h-full py-2.5 px-3 bg-transparent text-white border border-white ">
          Buscar
        </button>
      </form>

      <Image
        sizes="100vw"
        className="sm:hidden"
        src={Hamburguer}
        alt="Logo da loja meteora"
        quality={100}
      />
    </header>
  );
};

export default Header;
