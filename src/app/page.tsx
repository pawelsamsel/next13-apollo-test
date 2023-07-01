import { getClient } from "@/api/apollo-client";
import { RM_CHARACTERS_QUERY } from "@/api/rmApi/queries/charactersQuery";

export const revalidate = 1;

export default async function Home() {
  const client = getClient();
  const result: any = await client.query({
    query: RM_CHARACTERS_QUERY,
  });
  const { data, networkStatus } = result;

  return (
    <main className="flex min-h-screen flex-col items-start justify-between p-24">
      <h1 className="text-xl mb-8">Apollo client test</h1>
      <h2>
        Date {Date.now()} {networkStatus}
      </h2>
      {data?.characters?.results?.map((character: any) => (
        <div key={character.id}>
          <h2>{character.name}</h2>
          <img src={character.image} alt={character.name} />
        </div>
      ))}
    </main>
  );
}
