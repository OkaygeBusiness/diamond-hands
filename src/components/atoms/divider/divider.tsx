import { component$ } from "@builder.io/qwik";
import { twMerge } from "tailwind-merge";

export interface dividerProps {
    class?: string;
    color?: string;
    thickness?: string;
    style?: string;
}

export default component$((props: dividerProps) => {
    return <div class={twMerge(props.class, props.color ?? "bg-black", props.thickness ?? "h-1", props.style ?? "rounded")} />;
});