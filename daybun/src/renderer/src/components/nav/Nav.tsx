import UserNav from "./UserNav";
import userImage1 from "../../assets/blushingKittyKat.png";
import userImage2 from "../../assets/bunnyGirl.png";
import userImage3 from "../../assets/image.png";
import optionSvg from "../../assets/gear-fill.svg";
import searchSvg from "../../assets/search.svg";

export default function Nav (): JSX.Element {

    return (
        <>
            <nav className="w-1/5 h-screen rounded-lg bg-gradient-to-b from-yellow-200 to-pink-300 shadow-[5px_0px_12px_0px_rgba(0,_0,_0,_0.2)]">
                
                {/* navigation between users*/}
                <div className="w-[99%] h-[90%] pt-8 flex flex-col items-center bg-white rounded-tr-xl">
                    <UserNav username="Ash" imagePath={userImage1} />
                    <UserNav username="Nic" imagePath={userImage2} />
                    <UserNav username="Brady" imagePath={userImage3} />
                </div>

                {/* options and search */}
                <div className="w-[99%] h-[10%] flex items-center justify-evenly  bg-white rounded-br-xl border-t-2 border-pink-100">
                    <img src={searchSvg} alt="Search for users button" className="w-1/6 h-3/6 hover:cursor-pointer" />
                    <img src={optionSvg} alt="Go to Options button" className="w-1/6 h-3/6 hover:cursor-pointer"/>
                </div>
                
            </nav>
        </>
        
    );
};