import { useQuery } from "react-query";
import NewsApiEndpoints from "../services/news.api";

const News = () => {

  //  Get News Categories
  const { data: newsCategories } = useQuery(
    ['newsCategories'],
    () => NewsApiEndpoints.getNewsCategories(),
    {
      select: data => {
        return data;
      },
    }
  );

  return (
    <div>News</div>
  )
}

export default News