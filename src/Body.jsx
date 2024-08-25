import Card from "./Card";
import Carousel from "./Carousel";
import img1 from './assets/images/bodycardsImg/1.jpg';
import img2 from './assets/images/bodycardsImg/2.jpg'
import img3 from './assets/images/bodycardsImg/4.jpg'
import img4 from './assets/images/bodycardsImg/5.jpg'
import img5 from './assets/images/bodycardsImg/6.jpg'
import img6 from './assets/images/bodycardsImg/7.jpg'
import img7 from './assets/images/bodycardsImg/8.jpg'
import img8 from './assets/images/bodycardsImg/10.jpg'

function Body() {
    return (
        <>
            <Carousel />
            <div className="m-3 p-3 d-flex justify-content-between">
                {/* Pass image prop */}
                <Card img={img1}  title="Blue Sweatshirt" content="Peter England" price=" Rs.1999"/>
                <Card img={img2} title="Men  Sporty Jacket" content="Puma" price=" Rs.2499"/>
                <Card img={img3}  title="Leather Jacket" content="Allen Solly" price=" Rs.2999"/>
                <Card img={img4}  title="Women Blue Dress" content="Zara" price=" Rs.1499"/>
             
            </div>
            <div className="m-3 p-3 d-flex justify-content-between">
                <Card img={img5}  title=" Smart Watch" content="Apple" price=" Rs.9999"/>
                <Card img={img6}  title=" Smart Band" content="Fastrack" price=" Rs.5999"/>
                <Card img={img7}  title="Fitness Band" content="Samsung" price=" Rs.8999"/>
                <Card img={img8}  title="Women Blue Dress" content="Apple" price=" Rs.7599"/>
            </div>
        </>
    );
}

export default Body;
