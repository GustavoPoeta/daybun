export default function SearchUser (): JSX.Element {

    return (
        <>
            <div role="search" className="w-full">
                <input type="text" placeholder="type the user/group's name" aria-label="input search for user" className="w-full h-12 pl-4 mb-4 border-y-2"/>
            </div>      
        </>
    );
}