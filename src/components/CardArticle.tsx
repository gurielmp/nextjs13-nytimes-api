import Link from "next/link"

interface ArticleDataProps {
  articleData: any
}
export default function CardArticle({
  headline,
  author,
  date,
  snippet,
  url,
}: any) {
  return (
    <div className="card w-96 bg-[#e6edf0] text-black shadow-xl mt-5">
      <div className="card-body">
        <Link
          href={url}
          target="_blank"
          className="my-2 flex h-fit w-[20rem] flex-col rounded-2xl bg-[#98aabf] bg-opacity-50 p-5 shadow-xl shadow-neutral-500 backdrop-blur-sm backdrop-filter"
          key={headline}
        >
          <h3 className="card-title">{headline}</h3>
          <span className="inline-block w-[90px] h-[2px] bg-[#807f7f] mb-[5px]"></span>
          <p className="text-xs">Author: {author}</p>
          <p className="text-xs">Published Date: {date}</p>
          <p className="text-md mt-4">{snippet}</p>
        </Link>
      </div>
    </div>
  )
}
