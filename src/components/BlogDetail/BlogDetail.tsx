import React from 'react';
import {jsx} from "@emotion/react";
/** @jsxRuntime classic */
/** @jsx jsx */
export interface BlogDetailProps {
  text: string;
}
export const BlogDetail = ({text}: BlogDetailProps) => {
    return (
      <div className="BlogDetail">{text}</div>
    );
}
