import { component$ } from "@builder.io/qwik";
import { twMerge } from "tailwind-merge";
import HeaderText from "~/components/atoms/headerText/headerText";

export interface tableOfContentsProps {
  class?: string;
  title?: string;
  subheadings?: string[];
};

export default component$((props: tableOfContentsProps) => {
  return (
    <div class={twMerge("border border-black pl-5 pr-4 pb-4 pt-1 rounded-3xl", props.class)}>
      <HeaderText text={"Table of Contents"} color={"text-black"} size={"text-3xl"} class={"my-3"} />
      <table>
        <tbody>
          {props.subheadings?.map((subheading) => {
            return (
              <tr>
                <td>
                  <a href={`/guides/${props.title}#${subheading.replace(/\s+/g, '-')}`} class={"text-blue-500"}>{subheading}</a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
});