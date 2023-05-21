// type "any" is of no use for us
interface AvatarProps{
    author: string;
    className?: string;
}

//                      (props: AvatarProps)
export function Avatar({author, className}: AvatarProps) {

    const initials = () => {
        // array of names, we're taking first letter from each
        return author.split(" ").map(word => word[0]).join('').toUpperCase()
    }

    return (
        <div className={`border rounded-full w-8 h-8 flex items-center justify-center font-semibold tracking-widest p-5 ${className}`}>
            {initials()}
        </div>
    )
}