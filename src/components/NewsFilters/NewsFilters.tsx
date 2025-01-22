import styles from "./styles.module.css";
import { Categories } from "../Categories/Categories";
import { Search } from "../Search/Search";
import { Slider } from "../Slider/Slider";
import { IFilters } from "../../interfaces";
import { useGetCategoryQuery } from "../../store/services/newsApi";
import { useAppDispatch } from "../../store";
import { setFilters } from "../../store/slices/newsSlice";

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
