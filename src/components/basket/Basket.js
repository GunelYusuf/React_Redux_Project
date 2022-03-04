import { connect } from "react-redux";
import React, { Component } from "react";
import { Badge } from "reactstrap";
import { bindActionCreators } from "redux"
import * as basketActions from "../../redux/actions/basketActions";

 class Basket extends Component {
  renderEmpty() {
    return (
      <div className="header-cart">
        <div className="cart-btn">
          <a href="#">
            <i className="icon ion-bag"></i>
            <span className="text">Cart :</span>
            <span className="total">$0.00</span>
            <span className="count">0</span>
          </a>
        </div>
      </div>
    );
  }

  renderSummary() {
    return (
      <>
        <div className="header-cart">
          <div className="mini-cart">
            <ul className="cart-items">
              {this.props.basket.map((cartItem) => (
                <li key={cartItem.product.id}>
                  <div className="single-cart-item d-flex">
                    <div className="cart-item-thumb">
                    <a href="single-product.html">
                      <img
                        src="assets/images/product-cart/cart-2.jpg"
                        alt="product"
                      />
                    </a>
                    <span className="product-quantity">{cartItem.quantity}</span>
                  </div>
                    <div className="cart-item-content media-body">
                      <h5 className="product-name">
                        {cartItem.product.productName}
                        <Badge
                          color="danger"
                          onClick={() =>
                            this.props.actions.removeFromBasket(
                              cartItem.product
                            )
                          }
                        >
                          x
                        </Badge>
                      </h5>
                      <span className="product-price">€18.90</span>
                      <span className="product-color">
                        <strong>Color:</strong> White
                      </span>
                      <a href="#" className="product-close">
                        <i className="fal fa-times"></i>
                      </a>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="price_content">
              <div className="cart-subtotals">
                <div className="products price_inline">
                  <span className="label">Subtotal</span>
                  <span className="value">€30.80</span>
                </div>
                <div className="shipping price_inline">
                  <span className="label">Shipping</span>
                  <span className="value">€7.00</span>
                </div>
                <div className="tax price_inline">
                  <span className="label">Taxes</span>
                  <span className="value">€0.00</span>
                </div>
              </div>
              <div className="cart-total price_inline">
                <span className="label">Total</span>
                <span className="value">€37.80</span>
              </div>
            </div>

            <div className="checkout text-center">
              <a href="checkout.html" className="main-btn">
                Checkout
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
  render() {
    return (
      <div>
      {/* {this.props.basket.length > 0 ? this.renderSummary() : this.renderEmpty()} */}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    basket: state.basketReducer
  };
}
function mapDispatchToProps(dispatch){
    return{
        actions:{
            removeFromBasket: bindActionCreators(basketActions.removeFromBasket,dispatch)
          }
    }
}


export  default connect(mapDispatchToProps,mapStateToProps)(Basket);
