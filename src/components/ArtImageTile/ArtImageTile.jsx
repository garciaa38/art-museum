import {Link} from "react-router-dom"

export default function ArtImageTile({ baseimageurl, galleryId, artId }) {
    console.log("ART PROP", baseimageurl, galleryId, artId)
    return (
        <Link to={`/galleries/${galleryId}/art/${artId}`}>
            <img src={baseimageurl} />
        </Link>
    )
}