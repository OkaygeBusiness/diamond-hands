import { component$ } from "@builder.io/qwik";
import { twMerge } from "tailwind-merge";
import SubHeaderText from "~/components/atoms/subHeaderText/subHeaderText";

export interface HistoryCardProps {
    stockData: object;
    date: string;
    amount: number;
    brokerFee: number;
};

export default component$((props: HistoryCardProps) => {
    return (
        <div>
            
        </div>
    )
});