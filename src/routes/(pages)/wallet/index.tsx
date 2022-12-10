import * as UserService from "../../../db/api"
import { component$, useStore, useMount$ } from "@builder.io/qwik";
import Header from "~/components/molecules/header/header";
import WalletCard from "~/components/molecules/walletCard/walletCard";
import BackToTop from "~/components/molecules/backToTop/backToTop";

export default component$(() => {
  const store = useStore({
    wallet: [] as object[] | undefined
  });
  useMount$(() => {
    const wallet = UserService.getUserWallet(1);
    store.wallet = wallet;
  });

  return (
    <>
      <Header text={"Wallet"} hasButton={true} link={"/"} />
      <div>
        {store.wallet?.map((wallet) => {
          return <WalletCard wallet={wallet} />;
        })}
        <BackToTop target={"/wallet"} />
      </div>
    </>
  )
});