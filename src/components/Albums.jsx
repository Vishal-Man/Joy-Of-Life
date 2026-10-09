import AlbumCard from './AlbumCard.jsx';
import pic3 from '../assets/pic3.jpg';
import pic2 from '../assets/pic2.jpg';
import pic5 from '../assets/pic5.jpg';

const albums = [
  { title: 'Album 1', image: pic3 },
  { title: 'Album 2', image: pic2 },
  { title: 'Album 3', image: pic5 },
];

export default function Albums() {
  return (
    <section id="albums" className="albums">
      <div className="albums__stack">
        {albums.map((a, i) => (
          <AlbumCard key={a.title} {...a} className={`album--${i + 1}`} />
        ))}
      </div>
      <span id="members" />
      <span id="merchandise" />
    </section>
  );
}
