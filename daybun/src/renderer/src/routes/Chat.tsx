import { Context } from "@renderer/contexts/Context";
import { useContext } from "react";

export default function Chat (): JSX.Element {

    const {navWidth} = useContext(Context);

    const remainingWidth = 100 - navWidth;

    const chatWidth = {
        width: remainingWidth + "%"
    }
    
    return (
        <>
            <div style={chatWidth} className="h-screen">
                {/* output */}
                <div className="h-[88%] w-full bg-gray-100">

                </div>

                {/* input */}
                <div className="h-[12%] flex items-end w-full bg-gradient-to-l from-yellow-200 to-pink-300 bg-gray-300">
                    <div className="h-[98%] w-full bg-white flex items-center justify-center">
                        <input type="text"  className="w-2/4 h-1/2 rounded-xl border border-gray-300 outline-none pl-2"/>
                    </div>
                </div>

            </div>
        </>
    );
}
