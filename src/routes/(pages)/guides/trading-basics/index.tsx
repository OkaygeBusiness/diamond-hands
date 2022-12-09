import { component$ } from "@builder.io/qwik";
import { twMerge } from "tailwind-merge";
import Header from "~/components/molecules/header/header";
import TableOfContents from "~/components/organisms/tableOfContents/tableOfContents";
import Accordion from "~/components/molecules/accordion/accordion";
import BackToTop from "~/components/molecules/backToTop/backToTop";
import Divider from "~/components/atoms/divider/divider";

export default component$(() => {
  
  const introduction = {
    title: "Introduction",
    content: `Stock trading broadly refers to any buying and selling of stock, but is colloquially used to refer to more shorter-term investments made by very active investors. Stock trading is a difficult and risky enterprise, but with education, you can work to lower risks and increase your likelihood of success.
      \n⠀\nThe stock market isn't necessarily as complicated as it may seem, but before you can start trading, we have to cover two important topics, risk tolerance and diversification.
      `,
    imageBefore: "https://images.unsplash.com/photo-1569025743873-ea3a9ade89f9",
    imageBeforeAlt: "Image 1: Person viewing stock market data"
  };
  
  const riskTolerance = {
    title: "Risk Tolerance",
    content: `Risk tolerance is one of the most important factors in trading stocks. It is the degree of risk that you are willing to endure given the volatility in the value of an investment, or in layman's terms, it means how much value you are willing to lose in order to get even more in return. This often determines the type and amount of investments that an individual chooses. There are three main types of risk tolerance, agressive, moderate, and conservative.
      \n⠀\nAggressive investors are  willing to risk losing money to get potentially better results. This category tends to be market-savvy with an understanding of the volatility of securities and follow strategies for achieving higher than average returns.
      \n⠀\nModerate investors want to grow their money without losing too much. Their goal is to weigh opportunities and risks and this investor's approach is sometimes described as a “balanced” strategy Commonly, moderate investors develop a portfolio that includes a mixture of stocks and bonds, perhaps as a 50/50 or 60/40 structure..
      \n⠀\nConservative investors are willing to accept little to no volatility in their investment portfolios. Retirees or those close to retirement age are often included in this category as they may be unwilling to risk a loss to their principal investment and have a short-term investment strategy. A conservative investor targets vehicles that are guaranteed and highly liquid. Risk-averse individuals commonly opt for bank certificates of deposit (CDs), money markets, or U.S. Treasuries for income and preservation of capital.
      `,
    imageBefore: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    imageBeforeAlt: "Image 1: Person analyzing diagrams"
  };
  
  const diversification = {
    title: "Diversifying your Portfolio",
    content: `Diversification is a popular risk management strategy that mixes a wide variety of investments within a portfolio. A diversified portfolio contains a mix of distinct asset types and investments in an attempt to limit exposure and risk to any single asset.
    \n⠀\nStudies and mathematical models have shown that maintaining a well-diversified portfolio of 25 to 30 stocks yields the most cost-effective level of risk reduction. The investing in more securities generates further diversification benefits, albeit at a drastically smaller rate.
    \n⠀\nThe primary purpose of diversification is to mitigate risk. By spreading your investment across different asset classes, industries, or maturities, you are less likely to experience market shocks that impact every single one of your investments the same. Diversification may also increase the chance of hitting positive news. Instead of hoping for favorable news specific to one company, positive news impacting one of dozens of companies may be beneficial to your portfolio.
    \n⠀\nHowever, there are drawbacks to diversification, too. The more holdings a portfolio has, the more time-consuming it can be to manage—and the more expensive, since buying and selling many different holdings incurs more transaction fees and brokerage commissions. More fundamentally, diversification's spreading-out strategy works both ways, lessening both the risk and the reward.
    `,
    imageBefore: "https://images.unsplash.com/photo-1651341050677-24dba59ce0fd",
    imageBeforeAlt: "Image 1: Computer screen with different stocks"
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
      <Divider color={"bg-transparent"} />
      <BackToTop target={"/guides/trading-basics"} />
    </>
  )
});