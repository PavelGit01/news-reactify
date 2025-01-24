import { useAppDispatch } from "@/app/appStore";
import { Categories } from "@/feautures/category/ui/Categories/Categories";
import { Search } from "@/feautures/search/ui/Search/Search";
import { IFilters } from "@/shared/interfaces";
import styles from "./styles.module.css";
import { useGetCategoryQuery } from "@/entities/category/api/categoryApi";
import { setFilters } from "@/entities/news/model/newsSlice";
import { Slider } from "@/feautures/slider";

interface Props {
  filter: IFilters;
}

export const NewsFilters = ({ filter }: Props) => {
  const { data: dataCategories } = useGetCategoryQuery(null);

  const dispatch = useAppDispatch();

  return (
    <div className={styles.filters}>
      {dataCategories && (
        <Slider>
          <Categories
            categories={dataCategories.categories}
            setSelectedCategory={(category) =>
              dispatch(setFilters({ key: "category", value: category }))
            }
            selectCategory={filter.category}
          />
        </Slider>
      )}

      <Search
        keywords={filter.keywords}
        setKeyWords={(keywords) =>
          dispatch(setFilters({ key: "keywords", value: keywords }))
        }
      />
    </div>
  );
};
