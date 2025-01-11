import UserNav from "./UserNav";
import userImage1 from "../../assets/blushingKittyKat.png";
import userImage2 from "../../assets/bunnyGirl.png";
import userImage3 from "../../assets/image.png";
import SearchUser from "./SearchUser";
import optionSvg from "../../assets/gear-fill.svg";
import { useState, useRef } from "react";
import useMousePosition from "@renderer/hooks/useMousePosition";

export default function Nav(): JSX.Element {

    const navTab = useRef<HTMLDivElement>(null);

    const [isUserResizing, setIsUserResizing] = useState<boolean>();
    const {x} = useMousePosition();
    
    const handleResizeNavBar = () => {
        const rect = navTab.current?.getBoundingClientRect();

        if (!x) {
            return;
        }

        if (!rect) {
            return;        
        }

        const positionDiff = x - rect.x;

        const newWidth = positionDiff + rect.width; 

        if (newWidth < 300) {
            return;
        }

        const navTabStyle = {
            width: newWidth
        };

        return navTabStyle;
    };


    return (
        <nav 
            ref={navTab} 
            style = {isUserResizing ? handleResizeNavBar() : undefined}
            className="w-1/5 h-screen flex rounded-lg bg-gradient-to-b from-yellow-200 to-pink-300 shadow-[5px_0px_12px_0px_rgba(0,_0,_0,_0.2)]"
        >

            <div className="w-[99%] h-full">
                    {/* navigation between users*/}
                <div className="w-full h-[90%] pt-8 flex flex-col items-center bg-white rounded-tr-xl">
                    <SearchUser />
                    <UserNav username="Ash" imagePath={userImage1} />
                    <UserNav username="Nic" imagePath={userImage2} />
                    <UserNav username="Brady" imagePath={userImage3} />
                </div>

                {/* options and search */}
                <div className="w-full h-[10%] flex items-center justify-evenly  bg-white rounded-br-xl border-t-2 border-pink-100">
                    <img src={optionSvg} alt="Go to Options button" className="w-1/6 h-2/6 hover:cursor-pointer" />
                </div>
            </div>

            <div 
                onMouseDown={() => setIsUserResizing(true)} 
                onMouseUp={() => setIsUserResizing(false)}
                className="w-[1%] h-full hover:cursor-e-resize"
            ></div>

        </nav>
    );
};