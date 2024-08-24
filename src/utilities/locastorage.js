const getStoredCart = () =>{
    const storeCart = localStorage.getItem('cart')
    if(storeCart){
        return JSON.parse(storeCart)
    }
    return [];
}

const savedCart = cart =>{
    const cartstringyfy = JSON.stringify(cart)
    localStorage.setItem('cart', cartstringyfy)
}

const addtols = id =>{
    const cart = getStoredCart()
    cart.push(id)
    savedCart(cart)
}
export {addtols,getStoredCart}