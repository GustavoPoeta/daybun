import UserNav from "./UserNav";
import userImage1 from "../../assets/blushingKittyKat.png";
import userImage2 from "../../assets/bunnyGirl.png";
import userImage3 from "../../assets/image.png";
import SearchUser from "./SearchUser";
import optionSvg from "../../assets/gear-fill.svg";
import { useState, useRef, useEffect } from "react";
import useWindowDimensions from "@renderer/hooks/useWindowDimesions";
import { Context } from "@renderer/contexts/Context";
import { useContext } from "react";

interface navTabStyle {
    width: number
}

export default function Nav(): JSX.Element {

    const { setNavWidth } = useContext(Context);

    const navTab = useRef<HTMLDivElement>(null);

    const {width} = useWindowDimensions();

    const [isUserResizing, setIsUserResizing] = useState<boolean>(false);
    const [navTabStyle, setNavTabStyle] = useState<navTabStyle>({
        width: width * 0.2,
    });

    useEffect(() => {
        const handleMouseUp = () => {
            setIsUserResizing(false);
        };
    
        const handleMouseMove = (event: MouseEvent) => {
            if (isUserResizing && navTab.current) {

                const rect = navTab.current.getBoundingClientRect();
                const newWidth = event.clientX - rect.left;

                if (newWidth >= 100 && newWidth <= width * 0.5) {
                    setNavTabStyle({
                        width: newWidth,
                    });
                    setNavWidth(newWidth);
                }

            }
        };
    
        if (isUserResizing) {
            document.addEventListener("mousemove", handleMouseMove);
            document.addEventListener("mouseup", handleMouseUp);
        }
    
        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        };
    }, [isUserResizing]);
    

    return (
        <nav 
            ref={navTab} 
            style = {navTabStyle}
            className="h-screen flex rounded-lg bg-gradient-to-b from-yellow-200 to-pink-300 shadow-[5px_0px_12px_0px_rgba(0,_0,_0,_0.2)]"
        >

            <div className="w-[99%] h-full">
                    {/* navigation between users*/}
                <div className="w-full h-[90%] pt-8 flex flex-col items-center bg-white rounded-tr-xl">
                    <SearchUser />
                    <UserNav username="Ash" navWidth={navTabStyle.width} imagePath={userImage1} />
                    <UserNav username="Nic" navWidth={navTabStyle.width} imagePath={userImage2} />
                    <UserNav username="Brady" navWidth={navTabStyle.width} imagePath={userImage3} />
                </div>

                {/* options and search */}
                <div className="w-full h-[10%] flex items-center justify-evenly  bg-white rounded-br-xl border-t-2 border-pink-100">
                    <img src={optionSvg} alt="Go to Options button" className="w-1/6 h-2/6 hover:cursor-pointer" />
                </div>
            </div>

            <div 
                onMouseDown={() => setIsUserResizing(true)} 
                onMouseUp={() => setIsUserResizing(false)}
                className={isUserResizing ? "w-screen h-full absolute hover:cursor-e-resize" : "w-[1%] h-full hover:cursor-e-resize"}
            ></div>

        </nav>
    );
};