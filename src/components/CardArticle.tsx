import Link from "next/link"

interface Article {
  headline: {
    main: string
  }
  byline: {
    original: string
  }
  pub_date: string
}

interface CardArticleProps {
  articles: Article[]
}

async function getData() {
  const nytimesApi = "https://api.nytimes.com/svc/search/v2/articlesearch.json"
  const res = await fetch(nytimesApi + "?api-key=" + process.env.NYTIMES_KEY)

  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }

  return res.json()
}

export default async function CardArticle({ articles }: CardArticleProps) {
  const data = await getData()
  return (
    <div className="card w-96 bg-[#bbe6ff] text-black shadow-xl">
      <div className="card-body">
        <h2 className="card-title">New York Times Articles</h2>
        {data.response.docs.map((article: any, index: number) => (
          <Link
            href={article.web_url}
            target="_blank"
            className="card card-bordered p-4 border-[#4d4b4b]"
            key={index}
          >
            <h3 className="card-title">{article.headline.main}</h3>
            <span className="inline-block w-[90px] h-[2px] bg-[#807f7f] mb-[5px]"></span>
            <p className="text-xs">Author: {article.byline.original}</p>
            <p className="text-xs">Published Date: {article.pub_date}</p>
            <p className="text-md mt-4">{article.snippet}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
