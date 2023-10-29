import CardArticle from "@/components/CardArticle"
import SearchArticle from "@/components/SearchArticle"
import { getArticle } from "@/lib/nytimesAPI"

export default async function Home() {
  const articleData = await getArticle()
  return (
    <>
      <h1>Docs</h1>
      <SearchArticle articleData={articleData} />
    </>
  )
}
