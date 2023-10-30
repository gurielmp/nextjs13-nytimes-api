const nytimesApi = "https://api.nytimes.com/svc/search/v2/articlesearch.json"
export async function getArticle() {
  const response = await fetch(nytimesApi + "?api-key=" + process.env.NYTIMES_KEY)
  if (!response.ok) {
    throw new Error("Failed to fetch data")
  }
  return response.json()
}