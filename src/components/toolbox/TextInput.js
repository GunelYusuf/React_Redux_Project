import React from "react";

const TextInput = ({ label, name, value, onChange, error, placeholder }) => {
  let wrapperClass = "form-group";
  if (error && error.length > 0) {
    wrapperClass += " has-error";
  }
  return (
    <div className={wrapperClass}>
      <label htmlFor={name} />
      <div className="field">
        <input
          className='form-control'
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          type="text"
        />
        {error&& <div className='alert alert-danger'>{error}</div>}
      </div>
    </div>
  );
};

export default TextInput;
