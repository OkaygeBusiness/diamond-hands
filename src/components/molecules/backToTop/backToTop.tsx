import { component$ } from "@builder.io/qwik";
import { twMerge } from "tailwind-merge";

export interface backToTopProps {
  class?: string;
  target: string;
};

export default component$((props: backToTopProps) => {
  return (
    <div class={twMerge("bg-[#80AB82] w-[130px] h-[40px] my-10 mx-auto rounded-xl flex justify-center content-center", props.class)}>
      <a href={props.target} class={"relative text-gray-800 mt-1.5 font-medium"}>Back to Top</a>
    </div>
  )
});