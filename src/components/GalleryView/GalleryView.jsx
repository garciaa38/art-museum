import { Navigate, useParams } from "react-router-dom";

export default function GalleryView({galleries}) {

    const { galleryId } = useParams();
    console.log(galleryId);

    const currGallery = galleries.find(gallery => gallery.id === Number(galleryId));
    console.log(currGallery);

    if (!currGallery) {
        return <Navigate to="/" replace={true} />
    }

    const {name} = currGallery
    return (
        <div>
            <h1>{`Hello from GalleryView`}</h1>
            <h2>{name}</h2>
        </div>
    )
}