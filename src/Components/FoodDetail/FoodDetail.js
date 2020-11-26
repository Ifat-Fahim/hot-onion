import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import React, { useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import fakedata from "../../fakedata/fakedata";
import "./FoodDetail.css";
import { CartContext } from "../../Contexts/CartContext";

const FoodDetail = () => {
    const { foodId } = useParams();
    const history = useHistory();
    const selectedFood = fakedata.find(
        (data) => Number(data.id) === Number(foodId)
    );
    const { img, title, description, price, id } = selectedFood;
    console.log(selectedFood);
    const { addToCart, quantity, setQuantity } = useContext(CartContext);

    return (
        <div
            className="container"
            style={{ marginTop: "80px", paddingBottom: "20px" }}
        >
            <span onClick={() => history.push("/")}>
                <span className="quit">&times;</span>
            </span>
            <div className="img">
                <img src={process.env.PUBLIC_URL + `/${img}`} alt="" />
            </div>
            <div>
                <h2> {title} </h2>
                <p> {description} </p>
                <div className="btn-group">
                    <h3>${price}</h3>
                    <button
                        onClick={() =>
                            quantity >= 1 && setQuantity(quantity - 1)
                        }
                    >
                        <FontAwesomeIcon className="icon" icon={faMinus} />
                    </button>
                    <p>{quantity}</p>
                    <button onClick={() => setQuantity(quantity + 1)}>
                        <FontAwesomeIcon className="icon" icon={faPlus} />
                    </button>
                </div>
                <button
                    className={`add-to-cart ${
                        quantity === 0 ? "disabled" : ""
                    }`}
                    onClick={() => addToCart(id, quantity)}
                    disabled={quantity === 0 ? true : false}
                >
                    Add To Cart
                </button>
            </div>
        </div>
    );
};

export default FoodDetail;
