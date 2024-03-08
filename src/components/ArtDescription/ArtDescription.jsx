import { useParams, Link } from "react-router-dom"

export default function ArtDescription({galleries}) {
    console.log("GALLERIES", galleries)

    const { galleryId, artId } = useParams()
    console.log("GALLERY ID", galleryId);
    console.log("Art ID", artId)

    const currGallery = galleries.find(gallery => gallery.id === Number(galleryId));
    console.log("CURRENT GALLERY", currGallery);

    const currArt = currGallery.objects.find(art => art.id === Number(artId));
    console.log("CURRENT ART", currArt);

    const { name } = currGallery;

    const { title, description, url, creditline, technique, images } = currArt
    return (
        <div>
            <Link to={`/galleries/${galleryId}`}>{`Back to ${name} Gallery`}</Link>
            <Link to={url}>{title}</Link>
            <p>{description}</p>
            <li>{creditline}</li>
            <li>{technique}</li>
            {images.map((image) => {
                return <img key={image.baseimageurl} src={image.baseimageurl}/>
            })}
        </div>
    )
}