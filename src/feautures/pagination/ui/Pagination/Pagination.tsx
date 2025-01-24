import { IPaginationProps } from "../../model/types";
import { PaginationButton } from "../PaginationButton/PaginationButton";

interface Props {
  top?: boolean;
  bottom?: boolean;
  children: React.ReactNode;
}

export const Pagination = ({
  top,
  bottom,
  children,
  ...paginationProps
}: Props & IPaginationProps) => {
  return (
    <>
      {top && <PaginationButton {...paginationProps} />}
      {children}
      {bottom && <PaginationButton {...paginationProps} />}
    </>
  );
};
