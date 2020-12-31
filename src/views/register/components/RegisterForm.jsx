/* Register form component
   Manage the register logic for creating an account 
   in the app 
*/

// React
import React from "react";

// Styled components
import Button from "../../../components/Button";
import CustomInput from "../../../components/Input";

//Components
import { FaEnvelope } from "react-icons/fa";
import { IoMdLock } from "react-icons/io";

//Constants
import colors from "../../../constants/colors";

const RegisterForm = () => {
  return (
    <form>
      <div>
        <CustomInput
          icon={<FaEnvelope color={colors.iconLight} />}
          type="text"
          placeholder="Email"
        />
      </div>
      <div>
        <CustomInput
          icon={<IoMdLock size="1.3em" color={colors.iconLight} />}
          type="text"
          placeholder="Password"
        />
      </div>
      <Button>Start coding now</Button>
    </form>
  );
};

export default RegisterForm;
