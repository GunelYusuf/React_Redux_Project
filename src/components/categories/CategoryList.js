import React, {Component} from 'react';
import {connect} from 'react-redux';

class CategoryList extends Component {
    render() {
        return (
            <div>
                <h1>Categories</h1>
                <h6>Disabled category: {this.props.currentCategory.categoryName}</h6>
            </div>
        );
    }
}

function mapStateToProps(state){
return {
    currentCategory:state.changeCategoryReducer
     }
}

export default connect(mapStateToProps)(CategoryList)