import SectionTittle from "../../../Components/SectionTittle/SectionTittle";
import featuredImage from "../../../assets/home/featured.jpg"
import '../Featured/Featured.css'



const Featured = () => {
    return (
        <div className="featured-items bg-fixed text-white pt-8 my-20">
            <SectionTittle 
            subHeading={'Check it out'}
            heading={'FROM OUR MENU'}></SectionTittle>
            <div className="md:flex justify-center items-center  bg-opacity-60 pb-20 pt-12 px-36">
                <div >
                    <img src={featuredImage} alt="" />
                </div>
                <div className="md:ml-6">
                    <p>March 20, 2023</p>
                    <p>WHERE CAN I GET SOME?</p>
                    <p className="uppercase">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;