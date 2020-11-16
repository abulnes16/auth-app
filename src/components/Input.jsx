import styled from "styled-components";

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #bdbdbd;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 10px 15px;
  width: 100%;
  margin-bottom: 15px;

  span {
    margin-right: 5px;
  }
`;

const Input = styled.input`
  outline: none;
  border: none;
  background: transparent;
  width: 90%;
`;

const CustomInput = ({ icon, type, placeholder, onChange, value }) => {
  return (
    <InputContainer>
      <span>{icon}</span>
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
