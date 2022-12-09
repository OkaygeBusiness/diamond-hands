import { component$ } from "@builder.io/qwik";
import { twMerge } from "tailwind-merge";
import SubHeaderText from "~/components/atoms/subHeaderText/subHeaderText";

export interface HistoryCardProps {
    class?: string;
    textDecoration?: string;
    key: number;
    action: string;
    stockData: object;
    date: string;
    brokerFee: number;
    quantity: number;
};

export default component$((props: HistoryCardProps) => {

    const { name, shortName, price } = JSON.parse(JSON.stringify(props.stockData));

    const totalBuyPrice = ((price * props.quantity) + props.brokerFee).toFixed(2);
    const totalSellPrice = ((price * props.quantity) - props.brokerFee).toFixed(2);

    return (
        <div class={twMerge(props.class, "h-[210px] w-[350px] bg-[#021127] rounded-xl text-[#FCFCFC] font-medium my-7 px-4 py-3")} key={props.key} >
            <SubHeaderText text={`Action: ${props.action[0].toUpperCase() + props.action.substring(1)}`} color={"text-[#6499E3]"} />
            <SubHeaderText text={`${name} - ${shortName}`} color={"mb-1 text-[#6499E3]"} />
            <p class={twMerge(props.textDecoration)} >Final Total: ${ props.action === "buy" ? totalBuyPrice : totalSellPrice }</p>
            <p class={twMerge(props.textDecoration)} >Share Price: {price}</p>
            <p class={twMerge(props.textDecoration)} >Number of Shares: {props.quantity}</p>
            <p class={twMerge(props.textDecoration)} >Broker Fee (2% Fee): ${props.brokerFee}</p>
            <p class={twMerge(props.textDecoration)} >Date: {props.date}</p>
        </div>
    )
});