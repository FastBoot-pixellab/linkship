import Link from "next/link"
import { useEffect, useState } from "react"

function Avatar({ username, className }) {
    const [menuOpened, setMenuOpened] = useState(false)

    function exitAccount() {
        // TODO
    }

    useEffect(() => {
        document.onclick = (event) => {
            // Hide menu if user clicks somewhere
            if(event.target.id != 'avatar' && event.target.id != 'avatarMenu') {
                setMenuOpened(false)
            }
        }
    }, [])

    return (
        <div className={`${className}`}>
            <button id="avatar" onClick={() => { setMenuOpened(!menuOpened) }} className={`bg-[#734aff] mb-2 flex items-center justify-center min-w-[45px] max-w-[45px] min-h-[45px] max-h-[45px] rounded-full text-white text-xl unselectable`}>
                {username[0].toUpperCase()}
            </button>
            <div id="avatarMenu" class={`z-10 absolute left-1/2 -translate-x-1/2 sm:left-auto divide-y divide-gray-100 rounded-lg shadow w-44 bg-gray-600 ${!menuOpened && 'hidden'}`}>
                <ul class="py-2 text-sm text-gray-300" aria-labelledby="dropdownDefaultButton">
                    <li>
                        <Link href="/myst" class="block px-4 py-2 hover:bg-gray-500 hover:text-white">Профиль</Link>
                    </li>
                    <li>
                        <Link href="/settings" class="block px-4 py-2 hover:bg-gray-500 hover:text-white">Настройки</Link>
                    </li>
                    <li>
                        <a onClick={() => { exitAccount() }} class="text-red-400 block px-4 py-2 hover:bg-gray-500 hover:text-red-300 cursor-pointer">Выйти</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Avatar