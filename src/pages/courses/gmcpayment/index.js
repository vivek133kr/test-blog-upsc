import Image from "next/image";
import Head from "next/head";

import { Inter } from "next/font/google";
import PaymentGMCSuccessPage from "@/Components/Skills/Payment/PaymentGMCpage";

const inter = Inter({ subsets: ["latin"] });

export default function Payment() {
  return (
    <div>
      <Head>
        <title>Payment</title>
      </Head>
      <PaymentGMCSuccessPage />
    </div>
  );
}
