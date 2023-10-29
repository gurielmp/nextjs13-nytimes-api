import CardArticle from "@/components/CardArticle"

export default function Home() {
  return (
    <>
      <div className="form-control mb-5">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-24 md:w-auto"
        />
      </div>
      <CardArticle articles={[]} />
    </>
  )
}
