const Herosection = () => {
    return (
        <main className="herosection">

            <div className="hero content hero-content">
                <h1>YOUR FEET DESERVES THE BEST</h1>
                <p>YOUR FEET DESERVE THE BEST AND WE'RE HERE
                    TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND
                    WE'RE HERE TO HELP YOU WITH OUR SHOES.</p>

                <div className="hero-btn ">
                    <button>Shop Now</button>
                    <button className="secondary-btn">Category</button>
                </div>

                <div className="shop-now">
                    <p>Also Available On</p>
                    <div className="e-comm">
                        <img src="images\flipkart.png" alt="flipkart" />
                        <img src="images\amazon.png" alt="amazon" />
                    </div>
                </div>
            </div>

            <div className="shoe-img">
                <img src="images\shoe_image.png" alt="shoe_img" />
            </div>
            
        </main>

    );
}
export default Herosection;