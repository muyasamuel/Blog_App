import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="flex items-center justify-between font-bold py-8 px-5">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            className="rounded-full object-cover"
            height={25}
            width={25}
            src="https://images.pexels.com/photos/3767673/pexels-photo-3767673.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="logo"
          />
        </Link>
        <p>NjomosBlog</p>
      </div>
      <div>
        <Link href='/'
        className="py-3 px-3 text-sm md:text-base bg-gray-900 text-[#F7AB0A]  flex items-center rounded-full">
            Check Up More of My Stuff
        </Link>
      </div>
    </header>
  );
}

export default Header;
