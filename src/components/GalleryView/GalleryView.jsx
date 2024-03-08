import { Navigate, useParams } from "react-router-dom";
import ArtImageTile from "../ArtImageTile/index.js";

export default function GalleryView({galleries}) {

    const { galleryId } = useParams();
    console.log("GALLERY ID", galleryId);

    const currGallery = galleries.find(gallery => gallery.id === Number(galleryId));
    console.log("CURRENT GALLERY", currGallery);

    if (!currGallery) {
        return <Navigate to="/" replace={true} />
    }

    const {name, objects} = currGallery

    console.log("OBJECTS", objects)

    return (
        <div>
            <h1>{`Hello from GalleryView`}</h1>
            <h2>{name}</h2>
            {objects.map((art) => (
                // console.log("ART OBJECT", art.images)
                <ArtImageTile key={art.id} artId={art.id} galleryId={galleryId} artUrl={art.primaryimageurl} {...art} />
             ))}
        </div>
    )
}