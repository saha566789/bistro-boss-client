import { Helmet } from "react-helmet";
import Cover from "../../../componets/Pages/shared/Cover/Cover";
import manuImg from "../../../assets/menu/menu-bg.png"
import dessertsImg from "../../../assets/menu/dessert-bg.jpeg"
import useMenu from "../../../hooks/useMenu";
import SectionTittle from "../../SectionTittle/SectionTittle";
import MenuCategory from "../menuCategory/MenuCategory";


const Menu = () => {
    const [menu] =useMenu()
    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');
    return (
        <div>
             <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover
            img={manuImg}
            title={"Our menu"}
            ></Cover>
              <SectionTittle subHeading="Don't Miss" heading="Today's Offer"></SectionTittle>
              <MenuCategory items={offered}></MenuCategory>
                {/* dessert menu items  */}
            <MenuCategory items={desserts} title="dessert" img={dessertsImg}></MenuCategory>
            <MenuCategory items={pizza} title={"pizza"} ></MenuCategory>
        </div>
    );
};

export default Menu;