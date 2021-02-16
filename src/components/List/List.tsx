import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

export interface ListProps {}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const List = (props: ListProps) => {
  return (
    <StyledContainer className="List">
      게시글 리스트
      <Link to={"/post/1"}>1번 게시물</Link>
      <Link to={"/post/2"}>2번 게시물</Link>
      <Link to={"/post/3"}>3번 게시물</Link>
    </StyledContainer>
  );
};
