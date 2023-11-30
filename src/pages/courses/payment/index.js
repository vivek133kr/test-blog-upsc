import Image from "next/image";
import Head from "next/head";

import { Inter } from "next/font/google";
import PaymentSuccessPage from "@/Components/Skills/Payment/PaymentPage";

const inter = Inter({ subsets: ["latin"] });

export default function Payment() {
  return (
    <div>
      <Head>
        <title>Payment</title>
      </Head>
      <PaymentSuccessPage />
    </div>
  );
}
