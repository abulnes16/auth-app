/* Login form component 
   Contains the login logic for authenticate the user
*/

// React
import React from "react";

// Styled components
import CustomInput from "../../../components/Input";
import Button from "../../../components/Button";

//Components
import { FaEnvelope } from "react-icons/fa";
import { IoMdLock } from "react-icons/io";

//Constants
import colors from "../../../constants/colors";

const LoginForm = () => {
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
      <Button>Login</Button>
    </form>
  );
};

export default LoginForm;
