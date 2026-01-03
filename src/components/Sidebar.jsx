import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-black text-white p-6">

      <nav className="flex flex-col gap-4">
        <Link href="/">Portfolio</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/skills">Skills</Link>
      </nav>
    </aside>
  );
}