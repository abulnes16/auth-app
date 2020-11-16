import styled from "styled-components";

const InputContainer = styled.div`
  border: 1px solid #bdbdbd;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 10px 15px;
  width: 100%;
  margin-bottom: 15px;
`;

const Input = styled.input`
  outline: none;
  border: none;
  width: 90%;
`;

const CustomInput = ({ icon, type, placeholder, onChange, value }) => {
  return (
    <InputContainer>
      {icon}
      <Input
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
    </InputContainer>
  );
};

export default CustomInput;
