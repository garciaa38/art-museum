import {NavLink} from "react-router-dom";
import "./GalleryNavigation.css"

export default function GalleryNavigation({galleries}) {
    console.log(galleries[0].id)
    return (
        <nav>
            <h1>{`Galleries`}</h1>
            <NavLink to={'/'}>{`Home`}</NavLink>
            {galleries.map((art) => (
                <NavLink key={art.id} to={`galleries/${art.id}`}>{art.name}</NavLink>
            ))}
        </nav>
    )
}