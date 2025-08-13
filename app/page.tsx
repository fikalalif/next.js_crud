import Contacts from "./contacts/page";

export default function Home({
  searchParams,
}: {
  searchParams?: { query?: string; page?: string };
}) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <main>  
      <Contacts query={query} currentPage={currentPage} showActions={false}/>
    </main>
  );
}
