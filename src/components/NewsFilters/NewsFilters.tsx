import styles from "./styles.module.css";
import { Categories } from "../Categories/Categories";
import { Search } from "../Search/Search";
import { getCategories } from "../../api/apiNews";
import { useFetch } from "../../helpers/hooks/useFetch";
import { Slider } from "../Slider/Slider";
import { CategoriesApiResponse, IFilters } from "../../interfaces";

interface Props {
  filter: IFilters;
  changeFilter: (key: string, value: string | number | null) => void;
}

export const NewsFilters = ({ filter, changeFilter }: Props) => {
  const { data: dataCategories } = useFetch<CategoriesApiResponse, null>(
    getCategories
  );

  return (
    <div className={styles.filters}>
      {dataCategories && (
        <Slider>
          <Categories
            categories={dataCategories.categories}
            setSelectedCategory={(category) =>
              changeFilter("category", category)
            }
            selectCategory={filter.category}
          />
        </Slider>
      )}

      <Search
        keywords={filter.keywords}
        setKeyWords={(keywords) => changeFilter("keywords", keywords)}
      />
    </div>
  );
};
