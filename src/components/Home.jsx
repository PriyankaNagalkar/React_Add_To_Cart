function Home() {
    return (
        <div>
            <div className="add-to-cart">
               <img src="https://static.vecteezy.com/system/resources/previews/071/275/068/non_2x/shopping-cart-icon-representing-online-purchases-checkout-and-store-shopping-vector.jpg"/>
            </div>
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://www.kindpng.com/picc/m/386-3865678_iphone-screen-wallpaper-download-hd-png-download.png" />
                </div>
                <div className="text-wrapper item">
                    <span>I-Phone</span>
                    <span>Price:$1000.00</span>
                </div>
                <div className="btn-wrapper item">
                    <button>Add to Cart</button>
                </div>

            </div>
        </div>
    )
}
export default Home