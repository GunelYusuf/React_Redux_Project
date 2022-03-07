import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {getCategories} from '../../redux/actions/categoryActions';
import {saveProduct} from '../../redux/actions/productActions';

function AddOrUpdateProduct({
  products,
  categories,
  getProducts,
  getCategories,
  saveProduct,
  history,
  ...props
}) {
  const [product, setProduct] = useState({ ...props.product });
  useEffect(() => {
    if (categories.length === 0) {
      getCategories();
    }
    setProduct({ ...props.product });
  },[props.product]);

  function handleChange(event) {
    const { name, value } = event.target;
    setProduct((previousProduct) => ({
      ...previousProduct,
      [name]: name === "categoryId" ? parseInt(value, 10) : value,
    }));
  }

  function handleSave(event) {
      event.preventDefault();
      saveProduct(product).then(() =>{
          history.push('/');
      })

  }

}

const mapDispatchToProps={
    getCategories,saveProduct
}

export default connect(mapDispatchToProps)(AddOrUpdateProduct)