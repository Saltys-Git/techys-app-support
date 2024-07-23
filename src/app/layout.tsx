import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {NextUIProvider} from "@nextui-org/system";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Techy's App Support",
    description: "This website serves to give clients a proper support system for their apps.",
    metadataBase: new URL("https://app-support.mytechys.co.uk"),
    keywords: ["Techy's App Support", "Give feedback on Apps"],
    openGraph: {
        description: "This website serves to give clients a proper support system for their apps.",
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={inter.className + " bg-[#28282E]"}>
        <NextUIProvider>
            {children}
        </NextUIProvider>
        </body>
        </html>
    );
}
