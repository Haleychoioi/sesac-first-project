import { useSearchParams } from "react-router-dom";
import { BookListGrid, BookSearchPageContainer, PageTitle, SearchResultsSection } from "./BookSearchPage.styled";
import SearchBookItem from "../../components/SearchBookItem";

interface Book {
  id: number;
  title: string;
  author: string;
  price: number;
  thumbnailUrl?: string;
}

const BookSearchPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query") || "";

  const dummyBooks: Book[] = [
    { id: 1, title: `${query} 도서 1`, author: "작가 A", price: 10000 },
    { id: 2, title: `${query} 도서 2`, author: "작가 B", price: 10000 },
    { id: 3, title: `${query} 도서 3`, author: "작가 C", price: 10000 },
    { id: 4, title: `${query} 도서 4`, author: "작가 D", price: 10000 },
    { id: 5, title: `${query} 도서 5`, author: "작가 E", price: 10000 },
    { id: 6, title: `${query} 도서 6`, author: "작가 F", price: 10000 },
  ];

  const hasResults = query !== "" && dummyBooks.length > 0;

  return <BookSearchPageContainer>
    <PageTitle>{query ? `${query} 검색 결과` : "도서 검색"}</PageTitle>

    <SearchResultsSection>
      {hasResults ? (
        <BookListGrid>
          {dummyBooks.map(book => <SearchBookItem key={book.id} id={book.id}></SearchBookItem>)}
        </BookListGrid>
      )}
    </SearchResultsSection>
  </BookSearchPageContainer>
};

export default BookSearchPage;
