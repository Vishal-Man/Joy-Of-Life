export default function AlbumCard({ image, title, className = '' }) {
  return (
    <figure className={`album ${className}`}>
      <img src={image} alt={`${title} cover`} className="album__img" />
      <figcaption className="album__title">{title}</figcaption>
    </figure>
  );
}
