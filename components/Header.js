import Image from "next/image"

import Avatar from "./AvatarMenu"

import logo from "@/public/linkship-full.svg"

function Header() {
    return (
        <header className="container flex flex-col gap-3 sm:gap-0 sm:flex-row items-center py-3">
            <Image src={logo} width={150} className="unselectable" />
            <Avatar username="Unity" className="sm:ml-auto" />
        </header>
    )
}

export default Header