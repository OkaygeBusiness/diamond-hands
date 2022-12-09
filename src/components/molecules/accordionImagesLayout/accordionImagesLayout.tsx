import { component$ } from "@builder.io/qwik";
import { twMerge } from "tailwind-merge";
import Divider from "~/components/atoms/divider/divider";
import ImageCard from "~/components/atoms/imageCard/imageCard";

export interface accordionProps {
  class?: string;
  textDecoration?: string;
  title: string;
  paragraphOne: string;
  paragraphTwo?: string;
  paragraphThree?: string;
  paragraphFour?: string;
  imageOne?: string;
  imageOneAlt?: string;
  imageTwo?: string;
  imageTwoAlt?: string;
  imageThree?: string;
  imageThreeAlt?: string;
  imageFour?: string;
  imageFourAlt?: string;
  imageBefore?: string;
  imageBeforeAlt?: string;
  imageOneTextDecoration?: string;
  imageTwoTextDecoration?: string;
  imageThreeTextDecoration?: string;
  imageFourTextDecoration?: string;
};

export default component$((props: accordionProps) => {

  // const text = props.content.split("\n").map((item) => <p>{item}</p>)

  const selectorId = props.title.replace(/\s+/g, '-')

  return (
    <details class="my-5">
      <summary id={selectorId} class="my-3 text-xl">{props.title}<Divider class={"my-2"} thickness={"h-0.5"} /></summary>
      <div>
        { props.imageBefore ? <ImageCard src={props.imageBefore} altText={props.imageBeforeAlt} /> : null }
        { props.paragraphOne ? <p class={twMerge(props.textDecoration, "mb-5")}>{props.paragraphOne}</p> : null}
        { props.imageOne ? <ImageCard src={props.imageOne} altText={props.imageOneAlt} textDecoration={props.imageOneTextDecoration} /> : null }
        { props.paragraphTwo ? <p class={twMerge(props.textDecoration, "mb-5")}>{props.paragraphTwo}</p> : null}
        { props.imageTwo ? <ImageCard src={props.imageTwo} altText={props.imageTwoAlt} textDecoration={props.imageTwoTextDecoration} /> : null }
        { props.paragraphThree ? <p class={twMerge(props.textDecoration, "mb-5")}>{props.paragraphThree}</p> : null}
        { props.imageThree ? <ImageCard src={props.imageThree} altText={props.imageThreeAlt} textDecoration={props.imageThreeTextDecoration} /> : null }
        { props.paragraphFour ? <p class={twMerge(props.textDecoration, "mb-5")}>{props.paragraphFour}</p> : null}
        { props.imageFour ? <ImageCard src={props.imageFour} altText={props.imageFourAlt} textDecoration={props.imageFourTextDecoration} /> : null }
      </div>
    </details>
  )
});