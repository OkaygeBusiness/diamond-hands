import { component$ } from "@builder.io/qwik"
import Header from "~/components/molecules/header/header"
import TableOfContents from "~/components/organisms/tableOfContents/tableOfContents"
import Accordion from "~/components/molecules/accordion/accordion"
import AccordionImagesLayout from "~/components/molecules/accordionImagesLayout/accordionImagesLayout"
import BackToTop from "~/components/molecules/backToTop/backToTop"
import Divider from "~/components/atoms/divider/divider"

export default component$(() => {
  const introduction = {
    title: "Introduction",
    content: `Stock chart patterns often signal transitions between rising and falling trends. A price pattern is a recognizable configuration of price movement identified using a series of trendlines and/or curves. But before we talk about the patterns, lets look at how the stock market moves.
      \n⠀\nThe stock market moves in two directions, rising and declining, which we call trends. When the market is experiencing rise or is expected to rise we call this trend bullish, or a bull market.
      \n⠀\nLikewise, when the market is experiencing decline, or is expected to decline, we call this trend bearish, or a bear market. The stock market is always moving in one of these two directions, and it is important to understand which direction the market is moving in order to make profitable trades.
      \n⠀\nTrends generally follow the performance of the S&P 500, a collection of the 500 largest traded companies listed on the US Stock Exchange. Paying attention to the performance of the S&P 500 is a good way to get a general idea of the direction of the market.
      `,
    imageBefore:
      "https://images.unsplash.com/photo-1563986768711-b3bde3dc821e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1168&q=80",
    imageBeforeAlt: "Image 1: Stock market performance graph"
  }

  const trianglePatterns = {
    title: "Triangle Patterns",
    paragraphOne:
      "Triangles are the most popular and common stock patterns used in technical analysis since they occur frequently compared to other patterns. The three most common types of triangles are symmetrical triangles, ascending triangles, and descending triangles. These chart patterns can last anywhere from a couple of weeks to several months.",
    paragraphTwo:
      "Symmetrical triangles are the most common type of triangle pattern. They occur when two trend lines converge toward each other and signal only that a breakout is likely to occur — there is no upward or downward trend. The magnitude of the breakouts or breakdowns is typically the same as the height of the left vertical side of the triangle, as shown in the figure below.",
    paragraphThree:
      "Ascending triangles are formed when the price of a stock moves sideways for a period of time, then breaks out to the upside. The breakout is usually accompanied by a surge in volume, which is a sign that the breakout is likely to continue. The breakout is typically the same magnitude as the height of the triangle.",
    paragraphFour:
      "The descending triangle is the opposite of the ascending triangle, indicating that demand is decreasing, and a descending upper trend line suggests a breakdown is likely to occur.",
    imageOne:
      "https://www.investopedia.com/thmb/ptYHJ-RFE8FoqYtBfx3ox1OmEaY=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Triangles_AShortStudyinContinuationPatterns3_2-6eb5b82169aa45859c5696835f97244f.png",
    imageOneAlt: "Image 1: Symmetrical triangle pattern",
    imageTwo:
      "https://www.investopedia.com/thmb/NPnXD3Dxdg3G-mAXuXb5OKwBqOQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Triangles_AShortStudyinContinuationPatterns1-bba0f7388b284f96b90ead2b090bf9a8.png",
    imageTwoAlt: "Image 2: Ascending triangle pattern",
    imageThree:
      "https://www.investopedia.com/thmb/Kiax12uW9hh7ij8X2dm7KaG0Iyw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Triangles_AShortStudyinContinuationPatterns2_2-bdc113cc9d874d31bac6a730cd897bf8.png",
    imageThreeAlt: "Image 3: Descending triangle pattern"
  }

  const otherPatterns = {
    title: "Other Common Patterns",
    paragraphOne:
      "Besides the triangle patterns, there are other common patterns that occur frequently in the stock market. These patterns are called continuation patterns because they indicate that the current trend is likely to continue. The most common continuation patterns are the flag, pennant, and wedge patterns.",
    paragraphTwo:
      "Flags are continuation patterns constructed using two parallel trendlines that can slope up, down, or horizontally. Generally, a flag with an upward slope (bullish) appears as a pause in a down trending market; a flag with a downward bias (bearish) shows a break during an up trending market. Typically, the flag's formation is accompanied by declining volume, which recovers as price breaks out of the flag formation.",
    paragraphThree:
      "Pennants are continuation patterns drawn with two trendlines that eventually converge. A key characteristic of pennants is that the trendlines move in two directions—one will be a down trendline and the other an up trendline. The figure below shows an example of a pennant. Often, the volume will decrease during the formation of the pennant, followed by an increase when the price eventually breaks out.",
    paragraphFour:
      "Wedges are continuation patterns similar to pennants in that they are drawn using two converging trendlines; however, a wedge is characterized by the fact that both trendlines are moving in the same direction, either up or down. A wedge angled down represents a pause during an uptrend; a wedge angled up shows a temporary interruption during a falling market. Wedges differ from triangles and pennants in that they reflect only upward and downward price movements, so the wedge generally appears angled.",
    imageOne:
      "https://www.investopedia.com/thmb/1IsoyW7YIGcA0Ysn7yaxuLBo4iU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/dotdash_Final_Introductio_to_Technical_Analysis_Price_Patterns_Sep_2020-02-59df8834491946bcb9588197942fabb6.jpg",
    imageOneAlt: "Image 1: Flag pattern",
    imageTwo:
      "https://www.investopedia.com/thmb/RELelk6BexS9vvaWxfLMZxIzdOk=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/dotdash_Final_Introductio_to_Technical_Analysis_Price_Patterns_Sep_2020-01-c68c49b8f38741a6b909ecc71e41f6eb.jpg",
    imageTwoAlt: "Image 2: Pennant pattern",
    imageThree:
      "https://www.investopedia.com/thmb/XdB1tOTgRy5mKs0wIvoKBjY7cMo=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/dotdash_Final_Wedge_May_2020-01-3fc3337b20824354b64193a8e1a949c5.jpg",
    imageThreeAlt: "Image 3: Rising wedge pattern",
    imageFour:
      "https://www.investopedia.com/thmb/3vyAB3I8qk6jxWRnnDVgC8xA2Qs=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/dotdash_Final_Wedge_May_2020-02-67d7156b6b40435584b05b73f969181c.jpg",
    imageFourAlt: "Image 4: Falling wedge pattern"
  }

  const contents: string[] = [introduction.title, trianglePatterns.title, otherPatterns.title]

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
        <AccordionImagesLayout
          title={trianglePatterns.title}
          paragraphOne={trianglePatterns.paragraphOne}
          paragraphTwo={trianglePatterns.paragraphTwo}
          paragraphThree={trianglePatterns.paragraphThree}
          paragraphFour={trianglePatterns.paragraphFour}
          imageOne={trianglePatterns.imageOne}
          imageOneAlt={trianglePatterns.imageOneAlt}
          imageTwo={trianglePatterns.imageTwo}
          imageTwoAlt={trianglePatterns.imageTwoAlt}
          imageThree={trianglePatterns.imageThree}
          imageThreeAlt={trianglePatterns.imageThreeAlt}
        />
        <AccordionImagesLayout
          title={otherPatterns.title}
          paragraphOne={otherPatterns.paragraphOne}
          paragraphTwo={otherPatterns.paragraphTwo}
          paragraphThree={otherPatterns.paragraphThree}
          paragraphFour={otherPatterns.paragraphFour}
          imageOne={otherPatterns.imageOne}
          imageOneAlt={otherPatterns.imageOneAlt}
          imageTwo={otherPatterns.imageTwo}
          imageTwoAlt={otherPatterns.imageTwoAlt}
          imageThree={otherPatterns.imageThree}
          imageThreeAlt={otherPatterns.imageThreeAlt}
          imageFour={otherPatterns.imageFour}
          imageFourAlt={otherPatterns.imageFourAlt}
        />
      </div>
      <Divider color={"bg-transparent"} />
      <BackToTop target={"/guides/market-patterns"} />
    </>
  )
})
