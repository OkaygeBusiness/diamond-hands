import { $, component$, PropFunction, QwikMouseEvent } from "@builder.io/qwik"
import { twMerge } from "tailwind-merge"
import Button from "~/components/atoms/button/button"

export interface modalProps {
  title: string
  content?: string
  color?: string
  buttonCancel?: string
  buttonConfirm?: string
  cancelOnClick$?: PropFunction<() => void>
  confirmOnClick$?: PropFunction<() => void>
}

export default component$((props: modalProps) => {
  return (
    <div class="flex justify-center items-center static">
      <div class="bg-white rounded-lg absolute place-content-center shadow">
        <div class="w-96 border-t-8 border-red-600 rounded-lg flex">
          <div class="w-full pt-9 pr-4 flex flex-col justify-center items-center">
            <h3 class="font-bold text-red-600">{props.title}</h3>
            <p class="py-4 text-sm text-gray-400">{props.content ?? ""}</p>
          </div>
        </div>

        <div class="p-4 space-x-4 flex">
          <Button
            class="w-1/2 px-4 py-3 text-center hover:bg-gray-200 hover:text-black font-bold rounded-lg text-sm"
            text={props.buttonCancel ?? "Cancel"}
            color="bg-gray-100 text-gray-400"
            onClick$={() => {props.cancelOnClick$ ?? console.log("Cancel Clicked")}}
          />
          <Button
            class="w-1/2 px-4 py-3 text-center rounded-lg hover:bg-red-700 hover:text-white font-bold text-sm"
            text={props.buttonConfirm ?? "Confirm"}
            color="bg-red-600 text-white"
            onClick$={() =>props.confirmOnClick$ ?? console.log("Reset Wallet Clicked")}
          />
        </div>
      </div>
    </div>
  )
})
