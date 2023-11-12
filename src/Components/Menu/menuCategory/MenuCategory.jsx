import { Link } from "react-router-dom";
import Cover from "../../../componets/Pages/shared/Cover/Cover";
import MenuItems from "../../../componets/Pages/shared/menuItem/MenuItems";


const MenuCategory = ({items,title,img}) => {
    return (
        <div>
              { title && <Cover img={img} title={title}></Cover>}
        <div className="grid grid-cols-1 lg:grid-cols-2">
            {
                items.map(item=><MenuItems
                key={item.id}
                item={item}
                ></MenuItems>)
            }
        </div>
        <Link to={`/order/${title}`}><button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button></Link>
        </div>
    );
};

export default MenuCategory;