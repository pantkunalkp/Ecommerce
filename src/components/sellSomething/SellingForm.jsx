import React from "react";
import "../login/Login.css";
import ExtraButton from "../buttons/ExtraButton";

const SellingForm = () => {
  return (
    <div className="login-form">
      <form className="login-form-main">
        <input
          type="text"
          placeholder="Item Name"
          //   onChange={updateName}
          required
        />{" "}
        <input type="text" placeholder="Price" required /> <br />
        <input
          type="message"
          placeholder="Description"
          // onChange={updatePassword}
          required
        />{" "}
        <br />
        <input type="text" placeholder="Category" />
        <button>Upload Image </button>
      </form>
      <ExtraButton button="Done" />
    </div>
  );
};

export default SellingForm;
