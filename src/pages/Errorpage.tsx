// src/pages/ErrorPage.tsx
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
`;

const ErrorMessage = styled.h1`
  font-size: 2rem;
  color: #333;
`;

const ErrorButton = styled(Link)`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  &:hover {
    background-color: #0056b3;
  }
`;

const ErrorPage: React.FC = () => {
  return (
    <ErrorContainer>
      <ErrorMessage>Oops! Something went wrong.</ErrorMessage>
      <ErrorButton to="/">Go Back Home</ErrorButton>
    </ErrorContainer>
  );
};

export default ErrorPage;
