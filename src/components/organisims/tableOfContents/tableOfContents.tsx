import { component$ } from "@builder.io/qwik";
import HeaderText from "~/components/atoms/headerText/headerText";
import Link from "~/components/atoms/link/link";

export interface tableOfContentsProps {
  class?: string;
  subheadings?: string[];
};

export default component$((props: tableOfContentsProps) => {
  return (
    <div class={"border border-black pl-5 pr-4 pb-4 pt-1 rounded-3xl"}>
      <HeaderText text={"Table of Contents"} color={"text-black"} size={"text-3xl"} class={"my-3"} />
      <table class={props.class}>
        <tbody>
          {props.subheadings?.map((subheading) => {
            return (
              <tr>
                <td>
                  <Link href={`#${subheading.replace(/\s+/g, '-')}`} text={subheading} color={"text-blue-500"} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
});