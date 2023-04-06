import Head from "next/head"

import Button from "@/components/ui/Button"
import Header from "@/components/Header"

function Home() {
    return (
        <>
            <Head>
                <title>Linkship</title>
            </Head>
            <Header />
            <div className="container flex gap-10 mt-10 xl:mt-[200px]">
                <div className="flex flex-col gap-4">
                    <span className="text-4xl font-bold text-gray-700">The best place for your profile</span>
                    <span className="text-xl text-gray-600">Bio, social media or just a links to anything? <b>There's everything you need.</b></span>
                    {/* <input type="text" disabled className="font-bold py-1 px-2 outline outline-1 outline-[#5422ff] rounded-l-md w-[160px]" value="https://linkship.ru/" /> */}
                    <div className="flex flex-col gap-3 md:flex-row md:gap-0 items-center">
                        <div className="flex items-center">
                            <span className="flex unselectable h-[34px] px-2 items-center border border-gray-400 rounded-l-md">https://linkship.ru/</span>
                            <input type="text" name="username" className="py-1 px-2 outline outline-1 outline-gray-400 rounded-r-md max-w-[170px]" placeholder={`awesome_cat${Math.floor(Math.random() * (Math.floor(99) - Math.ceil(10) + 1) + Math.ceil(10))}`} />
                        </div>
                        <Button text="Let's go!" className="ml-3" />
                    </div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#734aff" fillOpacity="1" d="M0,128L80,149.3C160,171,320,213,480,197.3C640,181,800,107,960,90.7C1120,75,1280,117,1360,138.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
            <div className="bg-[#734aff] h-[1000px]">
                
            </div>
        </>
    )
}

export default Home