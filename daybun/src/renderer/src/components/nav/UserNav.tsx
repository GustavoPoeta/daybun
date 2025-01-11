interface Props {
    username: string,
    imagePath: string,
    navWidth: number
}

export default function UserNav ({username, imagePath, navWidth} : Props): JSX.Element {

    console.log(navWidth)

    return (
        <div className={`w-5/6 h-[10%] flex items-center ${navWidth <= 125 ? 'justify-center' : null} md:px-4 sm:px-2 px-0 md:rounded-lg sm:rounded-sm rounded-none border-b-2 mb-4 hover:bg-slate-200 hover:cursor-pointer`}>
            <img src={imagePath} alt={`${username}'s photo`} className="min-w-8 w-1/4 max-w-14 h-4/4 rounded-full"/>
            {
                navWidth <= 125 ? null : <h3 className="ml-4 md:text-base sm:text-sm text-xs">{username}</h3>
            }
        </div>
    );
}