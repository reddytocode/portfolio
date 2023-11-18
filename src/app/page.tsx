import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  const linkedin = "https://www.linkedin.com/in/reddy-tintaya/";
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p>{`"Be the senior you needed when you were a junior."`}</p>

        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" reddytocode"}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={40}
              height={10}
              priority
            />
          </a>
        </div>
      </div>

      <div className="fixed flex items-center justify-center w-full h-full">
        <Button color="primary" variant="bordered">
          Click here
        </Button>
      </div>
    </main>
  );
}
