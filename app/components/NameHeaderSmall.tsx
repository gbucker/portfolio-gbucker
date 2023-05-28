import Link from "next/link";
import GradientText from "./GradientText";

export default function NameHeaderSmall({className}: {className?: string}) {
  return (
    <Link href="/"><GradientText className={`text-2xl md:text-3xl font-bold ${className}`}>Gustavo Bucker</ GradientText></Link>
  );
}