export default async function fetcher(endpoint: string, options?: RequestInit) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${endpoint}`, {
    headers: new Headers({ 'Content-Type': 'application/json' }),
    ...options
  });
  const json = res.json();
  return json;
}
