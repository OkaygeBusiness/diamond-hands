import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { twMerge } from "tailwind-merge";
import SubHeaderText from "~/components/atoms/subHeaderText/subHeaderText";
import Divider from "~/components/atoms/divider/divider";

export interface guideAndGameCardProps {
  class?: string;
  title: string;
  backgroundImage?: string;
  href?: string;
  action?: string;
  difficulty?: string;
};

export default component$((props: guideAndGameCardProps) => {



  return (
    <Link href={props.href}>
      <div class={"h-60 flex flex-col justify-center"}>
        { props.difficulty ? <p class={"relative text-white top-11 left-3 z-10"}>Difficulty: {props.difficulty}</p> : <Divider class={"my-2"} color={""} /> }
        <img src={props.backgroundImage} class={twMerge("mt-3 rounded-xl w-fit h-60 brightness-[0.65]")} />
        <div class={"flex flex-row justify-between"}>
          <SubHeaderText text={props.title} color={"text-white"} size={"text-2xl"} class={"relative left-3 bottom-10 z-2"} />
          <p class={"text-white relative bottom-8 right-3"}>{props.action} &gt;</p>
        </div>
      </div>
    </Link>
  )
});