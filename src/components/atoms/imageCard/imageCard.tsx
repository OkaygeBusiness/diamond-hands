import { component$ } from "@builder.io/qwik";
import { twMerge } from "tailwind-merge";

export interface imageCardProps {
    class?: string;
    src?: string;
    altText?: string;
    textDecoration?: string;
};

export default component$((props: imageCardProps) => {
    
    return (
        <div class={twMerge(props.class, "mt-5 mb-8 h-52")}>
            <img src={props.src} class={twMerge("rounded-xl h-52 mx-auto")} />
            <p class={twMerge("text-sm relative text-center", props.textDecoration)}>{props.altText}</p>
        </div>
    )
});