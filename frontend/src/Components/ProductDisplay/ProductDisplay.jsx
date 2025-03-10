import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {
    const {product}=props
    const {addToCart}=useContext(ShopContext)
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="productdisplay-img">
                <img className='productdisplay-main-img' src={product.image} alt="" />
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-stars">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>{122}</p>
            </div>productdisplay-right-prices
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">
                    ${product.old_price}
                </div>
                <div className="productdisplay-right-price-new">
                    ${product.new_price}
                </div>

            </div>
            <div className="productdisplay-right-description">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci inventore, sequi, in voluptate excepturi impedit iusto ab voluptates eligendi recusandae vitae eum quidem hic voluptatibus, nam eaque beatae qui. Mollitia, possimus! Neque aut molestias nulla. Dolores, vitae consectetur accusantium, repellendus quas optio laudantium libero et, eum ad earum iusto culpa.
            </div>
            <div className="productdisplay-right-size">
                <h1>Select Size</h1>
                <div className="productdisplay-right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XX</div>
                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            <p className='productdisplay-right-category'>
                <span>Category :</span>
                Women, T-Shirt, Crop Top
            </p>
            <p className='productdisplay-right-category'>
                <span>Tags :</span>
                Modern, Latest
            </p>
        </div>
    </div>
  )
}

export default ProductDisplay