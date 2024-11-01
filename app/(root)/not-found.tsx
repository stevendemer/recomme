import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen flex justify-center items-center">
      <h2 className="text-xl text-center font-body">Page not found !</h2>
      <Link href="/">Return home</Link>
    </div>
  );
}
