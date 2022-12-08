import { component$ } from "@builder.io/qwik";
import { twMerge } from "tailwind-merge";
import Header from "~/components/molecules/header/header";
import HeaderText from "~/components/atoms/headerText/headerText";
import Divider from "~/components/atoms/divider/divider";
import TableOfContents from "~/components/organisms/tableOfContents/tableOfContents";
import Accordion from "~/components/molecules/accordion/accordion";

export default component$(() => {
  
  const introduction = {
    title: "Introduction",
    content: ``,
    imageBefore: "",
    imageBeforeAlt: ""
  };
  
  const topic2 = {
    title: "",
    content: ``,
    imageBefore: "",
    imageBeforeAlt: ""
  };
  
  const topic3 = {
    title: "",
    content: ``,
    imageBefore: "",
    imageBeforeAlt: ""
  };

  const contents: string[] = [introduction.title, topic2.title, topic3.title];

  return (
    <>
      <Header text="Market Patterns" hasButton={true} link={"/guides"} />
      <TableOfContents subheadings={contents} title={"market-patterns"} />
      <div class="mx-0 w-full drop-shadow rounded-md">
        <Accordion 
          title={introduction.title} 
          content={introduction.content}
          imageBefore={introduction.imageBefore}
          imageBeforeAlt={introduction.imageBeforeAlt}
        />
        <Accordion
          title={topic2.title}
          content={topic2.content}
          imageBefore={topic2.imageBefore}
          imageBeforeAlt={topic2.imageBeforeAlt}
        />
        <Accordion
          title={topic3.title}
          content={topic3.content}
          imageBefore={topic3.imageBefore}
          imageBeforeAlt={topic3.imageBeforeAlt}
        />
      </div>
    </>
  )
});