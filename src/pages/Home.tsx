import Counter from "../components/home/Counter";
import Hero from "../components/home/hero/Hero";
import SubscribeNews from "../components/home/news/SubscribeNews";
import Faq from "../components/home/faq/Faq";
import Benefits from "../components/home/Benefits";
import Services from "../components/home/ourServices/Services";
import ArticlesSlider from "../components/home/articles/ArticlesSlider";
import NewsSlider from "../components/home/news/NewsSlider";
import Trust from "../components/home/trust/Trust";
// import Pricing from "../components/home/prices/Pricing";

export default function Home() {
  return (
    <div className="text-darktext dark:text-lighttext">
      <Hero />
      <Services />
      <Counter />
      <Benefits />
      {/* <Pricing /> */}
      <Trust />
      <ArticlesSlider />
      <div className="bg-candle mb-24">
        <NewsSlider />
        <SubscribeNews />
      </div>
      <Faq />
    </div>
  );
}
