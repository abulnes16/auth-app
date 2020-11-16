import React from "react";

// Styled components
import Button from "../../../components/Button";
import CustomInput from "../../../components/Input";

const RegisterForm = () => {
  return (
    <form>
      <div>
        <CustomInput  type="text" placeholder="Email" />
      </div>
      <div>
        <CustomInput type="text" placeholder="Password" />
      </div>
      <Button>Start coding now</Button>
    </form>
  );
};

export default RegisterForm;
