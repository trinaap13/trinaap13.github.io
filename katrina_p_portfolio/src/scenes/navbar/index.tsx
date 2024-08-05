import {useState} from "react";
import { Bars3Icon, XMarkIcon} from "@heroicons/react/24/outline";
import Logo from "@/assets/Logo.png";

type Props = {}

const Navbar = (props: Props) => {
    const flexBetween = "flex items-center justify-between";
    return <>
        <nav>
            {/* fixed top-0 is fixed at the top of the screen as we scroll */}
            { /* z-30 ensures it pops up before everything else */ }
            { /* w-full to ensure it takes up entire space */ }
            { /* py-6 padding of y */ }
           <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
               { /* mx-auto to center in middle position */ }
               <div className={`${flexBetween} mx-auto w-5/6`}>
                    <div className={`${flexBetween} w-full gap-16`}>
                        {/* LEFT SIDE */}
                        <img alt="logo" src={Logo}/>

                        {/* RIGHT SIDE */}
                        <div className={`${flexBetween} w-full`}>
                            <div className={`${flexBetween} gap-8 text-sm`}>
                                <p>Home</p>
                                <p>About</p>
                                <p>Education</p>
                                <p>Projects</p>
                                <p>Contact</p>
                            </div>
                            <div className={`${flexBetween} gap-8`}>
                                <p>Maybe change me</p>
                                <p>Maybe Change me too</p>
                            </div>
                        </div>
                    </div>
               </div>
           </div>
        </nav>
    </>
}

export default Navbar