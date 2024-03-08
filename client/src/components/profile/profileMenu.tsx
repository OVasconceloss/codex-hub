export const ProfileMenu: React.FC<{ handleLogout: () => void, handleProfileClick: () => void}> = ({ handleLogout, handleProfileClick }) => {
    return (
        <div className="relative">
            <button
                onClick={handleProfileClick} 
                className="py-2 px-5 mr-5 text-zinc-100 border rounded-sm transition ease-linear hover:text-indigo-500 hover:border-indigo-500">Profile</button>
            <div className="absolute mt-2 w-48 bg-zinc-100 dark:bg-zinc-900 border border-zinc-800 rounded-sm shadow-lg">
                <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800">Logout</button>
            </div>
        </div>
    );
};