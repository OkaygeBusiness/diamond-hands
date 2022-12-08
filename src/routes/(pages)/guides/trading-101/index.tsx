import { component$ } from "@builder.io/qwik";
import { twMerge } from "tailwind-merge";
import Header from "~/components/molecules/header/header";
import HeaderText from "~/components/atoms/headerText/headerText";
import Divider from "~/components/atoms/divider/divider";
import TableOfContents from "~/components/organisms/tableOfContents/tableOfContents";

export default component$(() => {

  const contents: string[] = ["Introduction", "Reading the Market", "Diversifying Your Portfolio"];

  return (
    <>
      <Header text="Trading 101" hasButton={true} link={"/guides"} />
      <TableOfContents subheadings={contents}/>
    </>
  )
});