import React from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx, css} from '@emotion/react'
import {BlogDetail} from "../BlogDetail/BlogDetail";
export interface ContentProps {
}
export const Content = (props: ContentProps) => {
  const styleCss = css`
    height: 100%;
    margin: 100px auto;
  `;

  return (
    <div className="Content" css={styleCss}>
      <BlogDetail text={"오늘 뭐하지"}></BlogDetail>
      <BlogDetail text={"꺄 내일 재택"}></BlogDetail>
      <BlogDetail text={"술술술"}></BlogDetail>
    </div>
  );
}
