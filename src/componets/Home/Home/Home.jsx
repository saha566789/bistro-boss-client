import { Helmet } from "react-helmet";
import PopulatMenu from "../../Pages/PopularMenu/PopulatMenu";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import Banner from "../banner/Banner";
import Testimonials from "../testimonials/Testimonials";


const Home = () => {
    return (
        <div>
           <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
          <Banner></Banner>
          <Category></Category>
          <PopulatMenu></PopulatMenu>
          <Featured></Featured>
          <Testimonials></Testimonials>
        </div>
    );
};

export default Home;