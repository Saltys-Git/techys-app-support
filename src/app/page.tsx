import Image from "next/image";
import {AppForm} from "@/components/Form";

export default function Home() {
    return (
        <div className="container min-h-screen w-full flex flex-col justify-center items-center">
            <Image src={"/logo.png"} alt={"Logo"} height={100} width={100}/>
            <p className="text-2xl text-white font-bold mt-2">Techy&apos;s App Support</p>
            <p className="text-lg text-white font-light">Describe your concern please!</p>
            <AppForm/>
        </div>
    );
}
