import { $, component$, PropFunction } from "@builder.io/qwik"
import { twMerge } from "tailwind-merge"
import SettingIcon from "../../atoms/settingIcon/settingIcon"
import SettingOptionText from "../../atoms/settingOptionText/settingOptionText"

export interface settingOptionProps {
  title?: string
  description?: string
  path?: string
  path2?: string
  onClick$?: PropFunction<() => void>
  class?: string
  textColor?: string
}

export default component$((props: settingOptionProps) => {
  return (
    <button
      onClick$={
        props.onClick$ ??
        $(() => {
          console.log("Button clicked")
        })
      }
      class={props.class ?? "px-4 py-10 hover:bg-gray-100 flex w-full"}
    >
      <SettingIcon path={props.path ?? ""} path2={props.path2 ?? ""} />
      <SettingOptionText color={props.textColor} title={props.title ?? "Title"} description={props.description ?? ""} />
    </button>
  )
})
