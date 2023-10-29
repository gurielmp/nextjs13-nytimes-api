import React from "react"
import { render, screen } from "@testing-library/react"
import CardArticle from "@/components/CardArticle"

it("renders CardArticle component", () => {
  render(
    <CardArticle
      key="article1"
      headline="Sample Article"
      author="John Doe"
      date="2022-01-01"
      snippet="This is a sample article."
      url="https://example.com/article"
    />
  )

  // Assert that the rendered output includes the expected content
  expect(screen.getByText("Sample Article")).toBeInTheDocument()
  expect(screen.getByText("Author: John Doe")).toBeInTheDocument()
  expect(screen.getByText("Published Date: 2022-01-01")).toBeInTheDocument()
  expect(screen.getByText("This is a sample article.")).toBeInTheDocument()
})
