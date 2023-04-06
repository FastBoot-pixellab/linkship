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
            <button id="avatar" onClick={() => { setMenuOpened(!menuOpened) }} className={`bg-[#734aff] mb-2 flex items-center justify-center min-w-[40px] max-w-[40px] min-h-[40px] max-h-[40px] rounded-full text-white text-xl unselectable`}>
                {username[0].toUpperCase()}
            </button>
            <div id="avatarMenu" className={`z-10 absolute left-1/2 -translate-x-1/2 sm:left-auto divide-y divide-gray-100 rounded-lg shadow w-44 bg-gray-600 ${!menuOpened && 'hidden'}`}>
                <ul className="py-2 text-gray-300" aria-labelledby="dropdownDefaultButton">
                    <li>
                        <Link href="/myst" className="block px-4 py-2 hover:bg-gray-500 hover:text-white">Profile</Link>
                    </li>
                    <li>
                        <Link href="/settings" className="block px-4 py-2 hover:bg-gray-500 hover:text-white">Settings</Link>
                    </li>
                    <li>
                        <a onClick={() => { exitAccount() }} className="text-red-400 block px-4 py-2 hover:bg-gray-500 hover:text-white cursor-pointer">Log out</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Avatar