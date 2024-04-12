import Link from "next/link";

export default function Header() {
  return (
    <header className="flex flex-col items-center justify-center py-4 gap-4">
      <h1 className="text-4xl font-bold ">Kingsley Zhong</h1>
      {/* <div className="flex items-center justify-center gap-8 md:gap-12 text-lg">
        <div className="flex gap-8">
          <Link href="/">home</Link>
          <Link href="/about">about</Link>
        </div>
        <h1 className="hidden md:block text-4xl font-bold">Kingsley Zhong</h1>
        <div className="flex gap-8">
          <Link href="/work">work</Link>
          <Link href="/blog">blog</Link>
        </div>
      </div> */}
    </header>
  );
}
