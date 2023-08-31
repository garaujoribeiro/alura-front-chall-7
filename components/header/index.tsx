import Image from "next/image";
import Link from "next/link";

import Hamburguer from "../../assets/hamburguer.png";
import Logo from "../../assets/Mobile/Logo mobile.png";

const Header = () => {
  return (
    <header className="flex flex-wrap md:flex-nowrap justify-between items-center bg-black max-w-full md:py-5 md:px-5">
      <div className="flex justify-between items-center py-5 px-5 md:py-0 md:px-0 w-full md:w-auto">
        <Image
          sizes="100vw"
          src={Logo}
          alt="Logo da loja meteora"
          quality={100}
        />

        <Image
          sizes="100vw"
          className="md:hidden"
          src={Hamburguer}
          alt="Logo da loja meteora"
          quality={100}
        />
      </div>

      <nav className="hidden md:block flex-grow-2">
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

      <form className="flex bg-white md:bg-black py-6 px-6 md:py-0 md:px-3 lg:px-0 w-full md:w-auto justify-center  items-center md:justify-end md:flex-1 basis-full order-last md:order-[0]">
        <input
          placeholder="Digite o produto"
          className="w-full md:w-[80%] lg:w-auto pl-4 text-sm border border-black md:border-white focus:border-secondary outline-0 py-2"
          type="text"
        />

        <button className="text-sm ml-4 h-full py-2 px-3 bg-transparent text-black md:text-white border border-black md:border-white">
          Buscar
        </button>
      </form>
    </header>
  );
};

export default Header;
