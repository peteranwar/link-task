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
  console.log('newsCategories')

  return (
    <div>News</div>
  )
}

export default News