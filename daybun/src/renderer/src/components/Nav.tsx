export default function Nav (): JSX.Element {

    return (
        <>
            <nav className="w-1/5 h-screen rounded-lg bg-gradient-to-b from-yellow-200 to-pink-300 shadow-[5px_0px_12px_0px_rgba(0,_0,_0,_0.2)]">
                
                {/* navigation between users*/}
                <div className="w-[99%] h-[90%] bg-white rounded-tr-xl"></div>

                {/* options and search */}
                <div className="w-[99%] h-[10%] bg-white rounded-br-xl border-t-2 border-pink-100">

                </div>
                
            </nav>
        </>
        
    );
};