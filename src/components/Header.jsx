function Header(props) {
    console.log('header',props.data)
    return (
        <div>
            <div className="add-to-cart">
                <span className="cart-count">{props.data}</span>
                <img src="https://static.vecteezy.com/system/resources/previews/071/275/068/non_2x/shopping-cart-icon-representing-online-purchases-checkout-and-store-shopping-vector.jpg" />
            </div>
        </div>
    )
}

export default Header