export default async function Page() {
  const respone = await fetch("http://localhost:3000/api/books");
  const books = await respone.json();

  return (
    <main>
      <code>{JSON.stringify(books, null, 2)}</code>
    </main>
  );
}
