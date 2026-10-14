function Home(props) {

    console.log('Home --->',props)
    return (
        <div>
            <h1 className="heading">Redux Cart</h1>
         <div className="cartContainer">
               <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://www.kindpng.com/picc/m/386-3865678_iphone-screen-wallpaper-download-hd-png-download.png" />
                </div>
                <div className="text-wrapper item">
                    <span>I-Phone</span>
                    <span>Price:$1000.00</span>
                </div>
                <div className="btn-wrapper item">
                    <button onClick={() => props.addToCartHandler([{ price: 1000, name: 'i phone 11' }])} style={{marginTop: "20px"}}>Add to Cart</button>
                    <button onClick={() => props.removeToCartHandler()} style={{backgroundColor:"purple", marginTop: "20px"}}>Remove to Cart</button>
                </div>

            </div>

             <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://www.kindpng.com/picc/m/386-3865678_iphone-screen-wallpaper-download-hd-png-download.png" />
                </div>
                <div className="text-wrapper item">
                    <span>I-Phone</span>
                    <span>Price:$1000.00</span>
                </div>
                <div className="btn-wrapper item">
                    <button onClick={() => props.addToCartHandler([{ price: 1000, name: 'i phone 11' }])} style={{marginTop: "20px"}}>Add to Cart</button>
                    <button onClick={() => props.removeToCartHandler()} style={{backgroundColor:"purple", marginTop: "20px"}}>Remove to Cart</button>
                </div>

            </div>
         </div>
        </div>
    )
}
export default Home