import { Pagination } from "@/feautures/pagination/ui/Pagination/Pagination";
import { TOTAL_PAGES } from "@/shared/constant/constant";
import NewsList from "@/widgets/news/ui/NewsList/NewsList";
import { IFilters } from "@/shared/interfaces";
import { INews } from "@/entities/news";
import { usePaginationNews } from "../../utils/hooks/usePaginationNews";

interface Props {
  filters: IFilters;
  news: INews[];
  isLoading: boolean;
}

export const NewsListWithPagination = ({ filters, news, isLoading }: Props) => {
  const { handleNextPage, handlePreviousPage, handlePageClick } =
    usePaginationNews(filters);

  return (
    <Pagination
      top={true}
      bottom={true}
      totalPages={TOTAL_PAGES}
      handleNextPage={handleNextPage}
      handlePreviousPage={handlePreviousPage}
      handlePageClick={handlePageClick}
      currentPage={filters.page_number}
    >
      <NewsList
        isLoading={isLoading}
        news={news}
        type="item"
        direction="column"
      />
    </Pagination>
  );
};
