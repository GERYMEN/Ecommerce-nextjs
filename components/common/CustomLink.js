import styled from "@emotion/styled";
import Link from "next/link";
import React from "react";



const Anchor = styled("a")`
  text-decoration: none !important;
`;

const CustomLink = ({
  className,
  href,
  as,
  onClick,
  children,
}) => (
  <Link href={href} as={as} passHref onClick={onClick}>
    <Anchor className={className || ""}>{children}</Anchor>
  </Link>
);

export default CustomLink;
