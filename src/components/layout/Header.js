import Link from "next/link";
export default function header() {
  return (
    <header className="flex items-center justify-between">
      <Link className="text-primary font-semibold text-2xl" href={""}>
        SHEIK PIZZA
      </Link>
      <nav className="flex gap-8 text-gray-500 font-semibold items-center">
        <Link href={""}>Home</Link>
        <Link href={""}>Menu</Link>
        <Link href={""}>Contact</Link>
        <Link href={""}>About</Link>
        <Link
          className="bg-primary px-8 py-2 rounded-full text-white font-semibold"
          href={""}
        >
          Login
        </Link>
      </nav>
    </header>
  );
}
