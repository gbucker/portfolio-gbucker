import Link from "next/link";
import GradientText from "./GradientText";
import FlickeringText from "./FlickeringText";

export default function NameHeader({className}: {className?: string}) {
  return (
    <div className={`${className}`}>
      <Link href="/">
      <h1 className="text-5xl xl:text-7xl pr-20 md:pr-0 font-extrabold text-gray-800">Eu sou <GradientText>Gustavo Bucker</GradientText></h1></Link>
      <p className="mt-5 ml-1 text-xl md:text-2xl text-gray-800">Audiovisual <FlickeringText/> Comédia</p>
    </div>
  );
}