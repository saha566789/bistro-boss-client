import PopulatMenu from "../../Pages/PopularMenu/PopulatMenu";
import Category from "../Category/Category";
import Banner from "../banner/Banner";


const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <Category></Category>
          <PopulatMenu></PopulatMenu>
        </div>
    );
};

export default Home;