// src/pages/books/SearchBookItem.tsx
import React from "react";
import { Link } from "react-router-dom";
import {
  SearchBookItemContainer,
  SearchBookCoverPlaceholder,
  SearchBookItemTitle,
  SearchBookItemAuthor,
  SearchBookItemPrice,
} from "./SearchBookItem.styled";

interface SearchBookItemProps {
  id: number;
  title: string;
  author: string;
  price: number;
  thumbnailUrl?: string;
}

const SearchBookItem: React.FC<SearchBookItemProps> = ({
  id,
  title,
  author,
  price,
  // thumbnailUrl,
}) => {
  return (
    <Link to={`/books/${id}`}>
      <SearchBookItemContainer>
        <SearchBookCoverPlaceholder>표지</SearchBookCoverPlaceholder>
        <SearchBookItemTitle>{title}</SearchBookItemTitle>
        <SearchBookItemAuthor>{author}</SearchBookItemAuthor>
        <SearchBookItemPrice>{price}</SearchBookItemPrice>
      </SearchBookItemContainer>
    </Link>
  );
};

export default SearchBookItem;
