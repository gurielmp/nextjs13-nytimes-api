const nytimesApi = "https://api.nytimes.com/svc/search/v2/articlesearch.json"
export async function getArticle() {
  const response = await fetch(nytimesApi + "?api-key=" + 'H0FTkxs6nOqoZAfo9dThOPJyxjF1POgn')
  if (!response.ok) {
    throw new Error("Failed to fetch data")
  }
  return response.json()
}