interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}
export function Button({children}: Props){
    return (
        <button className={`w-20 md:h-10 lg:w-24 lg:h-12
        bg-green-500 dark:bg-gray-800
        ring-2 ring-sky-400 dark:ring-gray-700
        hover:bg-orange-300 hover:ring-red-400
        hover:dark:bg-gray-700 hover:dark:ring-gray-600
        rounded-xl transition delay-150 duration-300`}>
            {children}
        </button>
    )
}