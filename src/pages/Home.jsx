import { useTranslation } from "react-i18next";
import { useQuery } from "react-query";

import Hero from "../components/Home/Hero";
import HomeApiEndpoints from "../services/home.api";
import ThingsWeDo from "../components/Home/ThingsWeDo";

import News from "../components/Home/News";

const Home = () => {
  const { t } = useTranslation();


  //  get Banner Data
  const { data: bannerData } = useQuery(
    ['bannerData'],
    () => HomeApiEndpoints.getHeroBanner(),
    {
      select: data => {
        return data.slides;
      },
    }
  );




  return (
    <div className="home-page">
      {/* Hero Sec */}
      {<Hero {...{ bannerData }} />}


      {/* Things We Do */}
      <ThingsWeDo />


      {/* News Sec */}
      <News  />
    </div>
  )
}

export default Home