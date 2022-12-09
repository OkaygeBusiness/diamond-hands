import { $, component$ } from "@builder.io/qwik"
import HeaderText from "../../../components/atoms/headerText/headerText"
import Header from "../../../components/molecules/header/header"
import Divider from "../../../components/atoms/divider/divider"
import GuideAndGameCard from "../../../components/molecules/guideAndGameCard/guideAndGameCard"

export default component$(() => {
  return (
    <>
      <Header text="Guides & Quizzes" hasButton={false} />
      <HeaderText text={"Guides"} color={"text-black"} size={"text-3xl"} />
      <Divider class={"my-2"} thickness={"h-1"} />
      <GuideAndGameCard
        title={"Trading Basics"}
        backgroundImage={"https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f"}
        action={"Read"}
        href={"/guides/trading-basics"}
      />
      <GuideAndGameCard
        title={"Market Patterns"}
        backgroundImage={"https://images.unsplash.com/photo-1535320903710-d993d3d77d29"}
        action={"Read"}
        href={"/guides/market-patterns"}
      />
      <Divider class={"my-2"} thickness={"h-2"} color={""} />
      <HeaderText text={"Quizzes"} color={"text-black"} size={"text-3xl"} />
      <Divider class={"my-2"} thickness={"h-1"} />
      <GuideAndGameCard
        title={"Market Patterns Quiz"}
        backgroundImage={"https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3"}
        action={"Play"}
        difficulty={"Easy"}
        href={"/guides/quiz"}
      />
      {/* <PageBottom /> */}
    </>
  )
})
