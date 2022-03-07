import React from "react";
import TextInput from "../toolbox/TextInput";

const ProductDetail = (product, categories, onSave, onChange) => {
  return (
    <form onSubmit={onSave}>
      <h2>{product.id ? "Update" : "Add"}</h2>
      <TextInput name="productName" label="Product Name" value={product.productName} onChange={onChange}
      error="Xeta"/>
      <button type="submit" className="btn btn-succes">Save</button>
    </form>
  );
};

export default ProductDetail;
