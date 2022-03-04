import React, { Component } from "react";
import { Badge, Button, Table } from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as productActions from "../../redux/actions/productActions";
import * as basketActions from "../../redux/actions/basketActions";
import alertify from "alertifyjs";
class ProductList extends Component {
  componentDidMount() {
    this.props.actions.getProducts();
  }
  addToBasket = (product) => {
    this.props.actions.addToBasket({ quantity: 1, product })
    alertify.success(product.productName + "add to Basket");
  };
  render() {
    return (
      <div>
        <h1>
          <Badge color="warning">Product</Badge> -{" "}
          <Badge color="success">
            {this.props.currentCategory.categoryName}
          </Badge>
        </h1>
        <Table bordered>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Unit Price</th>
              <th>Quantity Per Unit</th>
              <th>Units In Stock</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product) => (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td>{product.productName}</td>
                <td>{product.unitPrice}</td>
                <td>{product.quantityPerUnit}</td>
                <td>{product.unitsInStock}</td>
                <td>
                  <Button
                    color="success"
                    onClick={() => this.addToBasket(product)}
                  >
                    Add
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    products: state.productListReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getProducts: bindActionCreators(productActions.getProducts, dispatch),
      addToBasket: bindActionCreators(basketActions.addToBasket, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
