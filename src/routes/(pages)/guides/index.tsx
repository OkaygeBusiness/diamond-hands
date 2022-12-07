import { $, component$ } from "@builder.io/qwik";
import HeaderText from "../../../components/atoms/headerText/headerText";
import Header from "../../../components/molecules/header/header";
import Divider from "../../../components/atoms/divider/divider";

export default component$(() => {
  return (
    <>
      <Header text="Guides & Quizzes" hasButton={false} />
      <HeaderText text={"Guides"} color={"text-black"} size={"text-3xl"} />
      <Divider class={"my-2"} thickness={"h-1"} />
      <HeaderText text={"Quizzes"} color={"text-black"} size={"text-3xl"} />
      <Divider class={"my-2"} thickness={"h-1"} />
    </>
  )
});