"use client"

import { useState } from "react"
import CardArticle from "./CardArticle"

interface ArticleDataProps {
  articleData: any
}

interface Article {
  headline: {
    main: string
  }
  byline: {
    original: string
  }
  pub_date: string
  web_url: string
  snippet: string
}

export default function SearchArticle({ articleData }: ArticleDataProps) {
  const [searchText, setSearchText] = useState("")

  const searchArticle = (articles: Article[]) => {
    return articles.filter((article: Article) =>
      article.headline.main.toLowerCase().includes(searchText.toLowerCase())
    )
  }

  const filteredArticle = searchArticle(articleData.response.docs)

  return (
    <>
      <div className="form-control w-96 mb-5">
        <input
          type="text"
          value={searchText}
          id="newsTitle"
          placeholder="Search News by Title"
          className="input input-bordered w-full text-slate-700 bg-white md:w-auto"
          onChange={(e) => setSearchText(e.target.value)}
        />
        {filteredArticle.map((article: Article) => {
          return (
            <CardArticle
              key={article.headline.main}
              headline={article.headline.main}
              author={article.byline.original}
              date={article.pub_date}
              snippet={article.snippet}
              url={article.web_url}
            />
          )
        })}
      </div>
    </>
  )
}
