// src/pages/books/BookSearchPage.styled.ts
import styled from "styled-components";

export const BookSearchPageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
`;

export const PageTitle = styled.h1`
  font-size: 2em;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin-bottom: 40px;
`;

export const SearchResultsSection = styled.section`
  margin-top: 20px;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px dashed #e0e0e0;
  border-radius: 8px;
  background-color: #fcfcfc;
  padding: 20px;
`;

export const SearchResultMessage = styled.p`
  font-size: 1.2em;
  color: #888;
  text-align: center;
  padding: 20px;
`;

export const BookListGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
`;
