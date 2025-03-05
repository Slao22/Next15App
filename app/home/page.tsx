export default async function Home() {
  const respone = await fetch("https://jsonplaceholder.typicode.com/albums");
  if (!respone.ok) {
    throw new Error("Failed to fetch");
  }

  const albums = await respone.json();

  return (
    <div>
      {albums.map((album) => (
        <div key={album.id}>{album.title}</div>
      ))}
    </div>
  );
}
