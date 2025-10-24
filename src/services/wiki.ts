export async function fetchWikiSummary(term: string) {
  const slug = encodeURIComponent(term);
  const baseFR = `https://fr.wikipedia.org/api/rest_v1/page/summary/${slug}`;
  const baseEN = `https://en.wikipedia.org/api/rest_v1/page/summary/${slug}`;

  try {
    const res = await fetch(baseFR);
    if (res.ok) return await res.json();

    const resEN = await fetch(baseEN);
    if (resEN.ok) return await resEN.json();
  } catch (e) {
    console.warn("Erreur lors de la récupération Wikipédia :", e);
  }
  return null;
}
