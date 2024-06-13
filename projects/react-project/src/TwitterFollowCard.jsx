import { useState } from "react"

export function TwitterFollowCard ({children, userName, initialIsFollowing}) {

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)


    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing
        ? 'follow-button-app is-following'
        : 'follow-button-app'

    const handleClick = () => {
        setIsFollowing(!isFollowing) 
    }

    return(
        <article className='article-app'>
            <header className='header-app'>
                <img 
                    className='img-app' 
                    alt="avatar twitter" 
                    src= {`https://unavatar.io/${userName}`} />
                <div className='div-app'>
                    <strong>{children}</strong>
                    <span className='span-app'>@{userName} </span>
                </div>
            </header>
{/* comentario dentro del return*/}
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                <span className='follow-button-text'>{text}</span>
                    <span className='tw-button-unfollow'>Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}