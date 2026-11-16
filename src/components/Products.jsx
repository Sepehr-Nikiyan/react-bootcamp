import { useSearchParams } from "react-router-dom";

function Products() {
  const [searchParams, setSearchParams] = useSearchParams();

  const category = searchParams.get("category") || "all";
  const page = Number(searchParams.get("page") || 1);

  return (
    <div>
      <h1>Products Page</h1>

      <p>Category: {category}</p>
      <p>Page: {page}</p>

      <button onClick={() => setSearchParams({ category: "books", page: "1" })}>
        Books
      </button>

      <button onClick={() => setSearchParams({ category: "phones", page: "1" })}>
        Phones
      </button>

      <button
        onClick={() =>
          setSearchParams({ category, page: String(page + 1) })
        }
      >
        Next Page
      </button>
    </div>
  );
}

export default Products;