import { component$ } from "@builder.io/qwik";
import { twMerge } from "tailwind-merge";
import SubHeaderText from "~/components/atoms/subHeaderText/subHeaderText";
import Divider from "~/components/atoms/divider/divider";
import ImageCard from "~/components/atoms/imageCard/imageCard";

export interface accordionProps {
  class?: string;
  textDecoration?: string;
  title: string;
  content: string;
  imageBefore?: string;
  imageBeforeAlt?: string;
  imageAfter?: string;
  imageAfterAlt?: string;
};

export default component$((props: accordionProps) => {

  const text = props.content.split("\n").map((item) => <p>{item}</p>)

  const selectorId = props.title.replace(/\s+/g, '-')

  return (
    <details class="my-5">
      <summary id={selectorId} class="my-3 text-xl">{props.title}<Divider class={"my-2"} thickness={"h-0.5"} /></summary>
      <div>
        { props.imageBefore ? <ImageCard src={props.imageBefore} altText={props.imageBeforeAlt} /> : null }
        <p class={props.textDecoration}>{text}</p>
        { props.imageAfter ? <ImageCard src={props.imageAfter} altText={props.imageAfterAlt} /> : null }
      </div>
    </details>
  )
});