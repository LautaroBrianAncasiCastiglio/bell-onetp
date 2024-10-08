import { GrCart } from "react-icons/gr";
import { FaRegUser } from "react-icons/fa";
import Link from "next/link";

function Header() {
    return (
        <header className="flex w-full bg-zinc-800 justify-between items-center p-3">
            <Link href="/" className="text-lg text-white font-bold ">
                bell
            </Link>
            <div className="flex gap-x-2">
                <Link
                    href="/carrito"
                    className="text-white p-2  rounded-sm transition delay-100 hover:bg-white hover:text-black "
                >
                    <GrCart />
                </Link>
                <Link
                    href="/"
                    className="text-white p-2  rounded-sm transition delay-100 hover:bg-white hover:text-black "
                >
                    <FaRegUser />
                </Link>
            </div>
        </header>
    );
}

export default Header;
