import { useEffect, useState } from "react"

export default function LoginPage() {
    const [maxColumn, setMaxColumn] = useState(0)
    const [maxRow, setMaxRow] = useState(0)
    useEffect(() => {
        setMaxColumn(Math.floor(window.innerWidth / 58))
        setMaxRow(Math.floor(window.innerHeight / 58))
        document.querySelectorAll(".box").forEach(box => {
            box.addEventListener("mouseleave", (e) => {
                console.log("mouseLeave");
                e.target.classList.add("dimmed")
            })
            box.addEventListener("mouseenter", (e) => {
                console.log("mouseLeave");
                e.target.classList.remove("dimmed")
            })

        })
    }, [])
    return (
        <div className="flex relative gap-1 flex-col w-full h-full justify-between">
            <div className="bg-[#896fac34] flex justify-center items-center shadow-black backdrop-blur-xl border-[#b2a4b650] border shadow-2xl w-[30%] h-[50%] rounded-xl mx-[750px] my-[260px] absolute">
                <div className="flex-col flex w-72 gap-5">
                    <span className="text-white/50 font-bold text-3xl text-center">SIGN IN</span>
                    <input className="h-10 px-3  border border-[#b2a4b667] bg-transparent text-black/80 outline-none rounded-lg placeholder:text-[#b2a4b667]" placeholder="E-posta" type="text" />
                    <input className="h-10 border border-[#b2a4b667] bg-transparent px-3 text-[#b2a4b667] outline-none placeholder:text-[#b2a4b667] rounded-lg" placeholder="Password" type="text" />
                    <div className="flex justify-between">
                        <span className="text-white/60">Forgot Password</span>
                        <span className="text-[#590392]">Signup</span>
                    </div>
                    <button className="bg-[#590392] py-2 rounded-lg">Login</button>
                </div>
            </div>
            <div className={`bgColor absolute w-full transition-all duration-1000 h-full bg-gradient-to-b from-transparent via-[#590392] -z-10 to-transparent`}></div>

            {

                [...Array(maxRow)].map(() => {
                    return (
                        <div className="flex justify-between">
                            {

                                [...Array(maxColumn)].map(() => {
                                    return (
                                        <div className="box dimmed">

                                        </div>
                                    )
                                })

                            }
                        </div>
                    )
                })

            }
        </div>


    )
}