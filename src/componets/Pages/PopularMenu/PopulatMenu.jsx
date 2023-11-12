import { useEffect, useState } from "react";
import SectionTittle from "../../../Components/SectionTittle/SectionTittle";
import MenuItems from "../shared/menuItem/MenuItems";
import useMenu from "../../../hooks/useMenu";


const PopulatMenu = () => {
const [menu] = useMenu()
const popular = menu.filter(item => item.category === 'popular');
    

    // const [menu,setMenu] = useState([])

    // useEffect(()=>{
    //     fetch('menu.json')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         const popularItems = data.filter(item =>item.category === 'popular')
    //         setMenu(popularItems)})
    // },[])
    return (
       <section className="mb-4">
        <SectionTittle   heading={"From Our Menu"}>
          
        </SectionTittle>
        <div className="grid grid-cols-1 lg:grid-cols-2">
            {
                popular.map(item=><MenuItems
                key={item.id}
                item={item}
                ></MenuItems>)
            }
        </div>
       </section>
    );
};

export default PopulatMenu;