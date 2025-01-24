import { useAppDispatch } from "@/app/appStore";
import { Categories } from "@/feautures/category/ui/Categories/Categories";
import { Search } from "@/feautures/search/ui/Search/Search";
import { IFilters } from "@/shared/interfaces";
import styles from "./styles.module.css";
import { setFilters } from "@/entities/news/model/newsSlice";
import { Slider } from "@/feautures/slider";
import { CategoryType } from "@/entities/category";

interface Props {
  filter: IFilters;
  dataCategories: CategoryType[];
}

export const NewsFilters = ({ filter, dataCategories }: Props) => {
  const dispatch = useAppDispatch();

  return (
    <div className={styles.filters}>
      {dataCategories && (
        <Slider>
          <Categories
            categories={dataCategories}
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
