import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1> An App about films</h1>
      <Link href="/">Home</Link>
      <Link href="films">Films</Link>
    </div>
  );
}
