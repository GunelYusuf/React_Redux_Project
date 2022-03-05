import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "reactstrap";
import { bindActionCreators } from "redux";
import * as basketActions from "../../redux/actions/basketActions";
import alertify from "alertifyjs";
class BasketDetail extends Component {
    removeFromBasket(product){
       this.props.actions.removeFromBasket(product);
       alertify.error(product.productName + "Removed")
    }
  render() {
    return (
      <div>
        <div class="container-fluid custom-container">
          <div class="row">
            <div class="col-xl-8">
              <div class="shopping-cart mt-25">
                <h4 class="allup-title">Shopping Cart</h4>

                <div class="shopping-cart-table table-responsive">
                  <table class="table">
                    <thead>
                      <tr>
                        <th class="image">Image</th>
                        <th class="product">Product Name</th>
                        <th class="price">Price</th>
                        <th class="quantity">Quantity</th>
                        <th class="total">Total</th>
                        <th class="delete">Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.props.basket.map((cartItem) => (
                        <tr key={cartItem.product.id}>
                          <td>
                            <div class="product-image">
                              <img
                                src="assets/images/product-cart/cart-1.jpg"
                                alt="cart"
                              />
                            </div>
                          </td>
                          <td>
                            <div class="product-title">
                              <h4 class="title">
                                <a href="single-product.html">
                                  {cartItem.product.productName}
                                </a>
                              </h4>
                            </div>
                          </td>
                          <td>
                            <div class="product-price">
                              <span class="price">
                                €{cartItem.product.unitPrice}
                              </span>
                            </div>
                          </td>
                          <td>
                            <div class="product-quantity">
                              <div class="quantity mt-15 d-flex">
                                <button type="button" class="sub">
                                  <i class="fal fa-minus"></i>
                                </button>
                                <input type="text" value={cartItem.quantity} />
                                <button type="button" class="add">
                                  <i class="fal fa-plus"></i>
                                </button>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div class="product-total">
                              <span class="total-amount">€18.90</span>
                            </div>
                          </td>
                          <td>
                            <div class="product-delete">
                              <Button
                                onClick={() =>
                                  this.removeFromBasket(cartItem.product)
                                }
                              >
                                <i class="fal fa-trash-alt"></i>
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div class="cart-btn text-right">
                  <a class="main-btn" href="#">
                    Update cart
                  </a>
                </div>
              </div>
            </div>
            <div class="col-xl-4">
              <div class="row">
                <div class="col-xl-12 col-md-6">
                  <div class="cart-coupon mt-30">
                    <h5 class="title">Discount Coupon Code</h5>
                    <form action="#">
                      <div class="single-form coupon-form d-flex flex-wrap">
                        <input type="text" placeholder="Coupon Code" />
                        <button class="main-btn">Apply Coupon</button>
                      </div>
                    </form>
                  </div>
                </div>
                <div class="col-xl-12 col-md-6">
                  <div class="cart-total mt-30">
                    <div class="sub-total">
                      <div class="single-total">
                        <span class="cart-value">Subtotal</span>
                        <span class="cart-amount">€18.90</span>
                      </div>
                      <div class="single-total">
                        <span class="cart-value">Shipping Cost</span>
                        <span class="cart-amount">€3.90</span>
                      </div>
                    </div>
                    <div class="total">
                      <div class="single-total">
                        <span class="cart-value">Total (tax excl.)</span>
                        <span class="cart-amount">€22.80</span>
                      </div>
                      <div class="single-total">
                        <span class="cart-value">Taxes</span>
                        <span class="cart-amount">€0.00</span>
                      </div>
                    </div>
                    <div class="cart-total-btn text-right">
                      <a class="main-btn" href="#">
                        Proceed to Checkout
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    basket: state.basketReducer
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      removeFromBasket: bindActionCreators(
        basketActions.removeFromBasket,
        dispatch
      ),
    },
  };
}

export default connect(mapDispatchToProps, mapStateToProps)(BasketDetail);
