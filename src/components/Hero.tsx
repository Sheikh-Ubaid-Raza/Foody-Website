export default function Hero() {
    return (
        <section className="heroSection">
            <div className="heroContent">
                <h1 className="heroTitle">Fast Food Restaurant</h1>
                <p className="heroDescription">
                    Discover the perfect fast food experience with a menu full of tasty burgers, crispy fries, and refreshing drinks. Order easily online for quick delivery or pickup, and enjoy a satisfying meal in no time.
                </p>
                <button className="heroButton">Order Now</button>
            </div>
            <div className="heroImage">
                <img src="/burger-fries.png" alt="Burger and Fries" />
            </div>
        </section>
    );
};
