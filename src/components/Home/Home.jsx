import { Helmet } from "react-helmet";
import Services from "./Services";
import Newsletter from "./Newsletter";
import WhyChooseUs from "./WhyChooseUs";
import HeroSlider from "./HeroSlider";


const Home = () => {
    return (
        <div>
                  <Helmet>
                <meta charSet="utf-8" />
                <title>Home-carrer Hub</title>
                <link rel="canonical" href="http://mysite.com/example"/>
            </Helmet>
{/*             
            <div className="carousel w-full">
  <div id="item1" className="carousel-item w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
      className="w-full" />
  </div>
  <div id="item2" className="carousel-item w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
      className="w-full" />
  </div>
  <div id="item3" className="carousel-item w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
      className="w-full" />
  </div>
  <div id="item4" className="carousel-item w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
      className="w-full" />
  </div>
</div>
<div className="flex w-full justify-center gap-2 py-2">
  <a href="#item1" className="btn btn-xs">1</a>
  <a href="#item2" className="btn btn-xs">2</a>
  <a href="#item3" className="btn btn-xs">3</a>
  <a href="#item4" className="btn btn-xs">4</a>
</div> */}
      <div>
        <HeroSlider></HeroSlider>
      </div>

          <div><Services></Services></div>
       <div>
        <Newsletter></Newsletter>
        </div>

        <div>
          <WhyChooseUs/>
        </div>


    </div>

    );
};

export default Home;