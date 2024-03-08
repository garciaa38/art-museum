import {Link} from "react-router-dom"

export default function ArtImageTile({ artId, galleryId, artUrl }) {
    
    return (
        <Link to={`/galleries/${galleryId}/art/${artId}`}>
            <img src={artUrl} />
        </Link>
    )
}