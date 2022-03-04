import React, { Component } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as basketActions from "../../redux/actions/basketActions";

 class BasketDetail extends Component {
  render() {
    return (
      <div>
      <h1>Basket</h1>
      </div>
    )
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


export  default connect(mapDispatchToProps,mapStateToProps)(BasketDetail);
