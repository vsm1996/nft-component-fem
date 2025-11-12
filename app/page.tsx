import Image from "next/image";

import NFTImage from "../public/images/image-equilibrium.jpg";
import ViewIcon from "../public/images/icon-view.svg";
import EquilibriumIcon from "../public/images/icon-ethereum.svg";
import ClockIcon from "../public/images/icon-clock.svg";
import Avatar from "../public/images/image-avatar.png";

export default function Home() {
  return (
    <main className="min-h-dvh flex flex-col p-[12px] items-center justify-center font-[family-name:var(--font-outfit)] bg-slate-950">
      <div className="bg-slate-900 p-300 w-[350px] rounded-[15px] text-blue-500 flex flex-col gap-300">
        <div className="relative group peer overflow-hidden rounded-[--space-100]">
          <div className="hidden group-hover:flex absolute inset-0 m-auto flex items-center justify-center w-full overflow-hidden bg-cyan mix-blend-lighten">
            <Image
              alt="view icon"
              src={ViewIcon}
              objectPosition="center"
              objectFit="contain"
            />
          </div>
          <Image src={NFTImage} alt="NFT image" objectFit={"contain"} />
        </div>
        <div className="flex flex-col gap-200 peer-hover:[&>h1]:text-cyan">
          <h1 className="text-white text-1 transition-colors duration-300 ease-in-out">
            Equilibrium #3429
          </h1>
          <p className="text-2">
            Our Equilibrium collection promotes balance and calm.
          </p>
          <div className="flex items-center justify-between mt-100">
            <span className="text-cyan flex items-center gap-100">
              <Image alt="Equilibrium icon" src={EquilibriumIcon} />
              <p className="text-3-bold"> 0.041 ETH </p>
            </span>
            <span className="flex items-center gap-100">
              <Image alt="clock icon" src={ClockIcon} />
              <p className="text-3">3 days left </p>
            </span>
          </div>
        </div>
        <div className="h-[1px] w-full bg-blue-800" />
        <div className="flex items-center justify-start gap-100 peer-hover:[&_span]:text-cyan">
          <div className="w-8 rounded-full border border-white overflow-hidden">
            <Image alt="avatar" src={Avatar} />
          </div>
          <p className="justify-self-center text-3">
            {" "}
            Creation of{" "}
            <span className="text-white transition-colors duration-300 ease-in-out">
              {" "}
              Jules Wyvern{" "}
            </span>{" "}
          </p>
        </div>
      </div>
    </main>
  );
}
