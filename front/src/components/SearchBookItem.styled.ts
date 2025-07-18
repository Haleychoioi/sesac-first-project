// src/pages/books/SearchBookItem.styled.ts
import styled from "styled-components";

export const SearchBookItemContainer = styled.div`
  width: 180px;
  height: 280px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 10px;
  background-color: #fff;
  cursor: pointer;

  & > a {
    text-decoration: none;
    color: inherit;
  }
`;

export const SearchBookCoverPlaceholder = styled.div`
  width: 120px;
  height: 180px;
  background-color: #f0f0f0;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #666;
  font-size: 0.9em;
  border: 1px dashed #ccc;
`;

export const SearchBookItemTitle = styled.h4`
  font-size: 1em;
  font-weight: bold;
  margin: 5px 0;
  color: #333;
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const SearchBookItemAuthor = styled.p`
  font-size: 0.85em;
  color: #666;
  margin: 0;
`;

export const SearchBookItemPrice = styled.p`
  font-size: 0.85em;
  color: #666;
  margin: 0;
`;
