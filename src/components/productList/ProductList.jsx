import React from "react";
import "./ProductList.css";
import Product from "../product/Product";
import {products} from '../../data';

const ProductList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <div className="pl-title">
                    Create & inspire. It's Drake
                </div>
                <p className="pl-desc">
                    Lama is a creative portfolio that your work has
                    been waiting for. Beautiful homes, stunning
                    portfolio styles & a whole lot more awaits inside.
                </p>
            </div>
            <div className="pl-list">
                {products.map((item) => {
                    const {id, img, link} = item;
                    return(
                        <Product key={id} img={img} link={link}/>
                    )
                })}
            </div>
        </div>
    );
};

export default ProductList;
