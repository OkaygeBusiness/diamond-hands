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
    content: `Stock trading broadly refers to any buying and selling of stock, but is colloquially used to refer to more shorter-term investments made by very active investors. Stock trading is a difficult and risky enterprise, but with education, you can work to lower risks and increase your likelihood of success.
    \n⠀\nThe stock market isn't necessarily as complicated as it may seem, but before you can start trading, we have to cover two important topics, risk tolerance and diversification.`,
    imageBefore: "https://images.unsplash.com/photo-1569025743873-ea3a9ade89f9",
    imageBeforeAlt: "Image 1: Person viewing stock market data"
  };
  
  const riskTolerance = {
    title: "Risk Tolerance",
    content: ``,
    imageBefore: "",
    imageBeforeAlt: ""
  };
  
  const diversification = {
    title: "Diversifying your Portfolio",
    content: ``,
    imageBefore: "",
    imageBeforeAlt: ""
  };

  const contents: string[] = [introduction.title, riskTolerance.title, diversification.title];

  return (
    <>
      <Header text="Trading Basics" hasButton={true} link={"/guides"} />
      <TableOfContents subheadings={contents} title={"trading-basics"} />
      <div class="mx-0 w-full drop-shadow rounded-md">
        <Accordion 
          title={introduction.title} 
          content={introduction.content}
          imageBefore={introduction.imageBefore}
          imageBeforeAlt={introduction.imageBeforeAlt}
        />
        <Accordion
          title={riskTolerance.title}
          content={riskTolerance.content}
          imageBefore={riskTolerance.imageBefore}
          imageBeforeAlt={riskTolerance.imageBeforeAlt}
        />
        <Accordion
          title={diversification.title}
          content={diversification.content}
          imageBefore={diversification.imageBefore}
          imageBeforeAlt={diversification.imageBeforeAlt}
        />
      </div>
    </>
  )
});