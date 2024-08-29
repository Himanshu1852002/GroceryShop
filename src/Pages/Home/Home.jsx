import Hero_Banner from "../../Components/Hero_Banner/Hero_Banner"
import ExploreMenu from '../../Components/Explore_Menu/Explore_Menu'
import Featured_Product from "../../Components/Featured_Product/Featured_Product"
import Offer_Banner from '../../Components/Offer_Banner/Offer_Banner';
import Support_banner from '../../Components/Support_banner/Support_banner';
import Best_Seller from '../../Components/Best_Seller/Best_Seller';
import Offers from '../../Components/Offers/Offers';
import Testimonial from '../../Components/Testimonial/Testimonial';
import { useState } from "react";

const Home = () => {

    const [category, setCategory] = useState("All")

    return (
        <div>
            <Hero_Banner />
            <ExploreMenu category={category} setCategory={setCategory} />
            <Featured_Product />
            <Offer_Banner />
            <Best_Seller />
            <Testimonial />
            <Offers />
            <Support_banner />
        </div>
    )
}

export default Home