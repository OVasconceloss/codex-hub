export const ProfileMenu: React.FC<{ handleLogout: () => void, handleProfileClick: () => void}> = ({ handleLogout, handleProfileClick }) => {
    return (
        <div className="relative">
            <button
                onClick={handleProfileClick} 
                className="py-2 px-5 mr-3 text-zinc-100 border rounded-sm transition ease-linear hover:text-indigo-500 hover:border-indigo-500">Profile</button>
            <div className="absolute p-2 mt-2 w-48 bg-zinc-50 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 rounded-sm shadow-lg">
                <button onClick={handleLogout} className="block w-full text-left px-4 py-2 hover:bg-zinc-100 text-red-500 dark:hover:bg-zinc-800 rounded-sm">
                    <i className="fa-solid fa-right-from-bracket"></i> Logout
                </button>
            </div>
        </div>
    );
};