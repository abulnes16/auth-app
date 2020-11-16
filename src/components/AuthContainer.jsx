import styled from "styled-components";

const AuthContainer = styled.div`
  .register {
    &__footer {
      p {
        margin: 25px 0;
      }
    }
  }

  @media screen and (min-width: 768px) {
    width: 60%;
    margin: ${(props) => (props.login ? "80px" : "0")} auto 0;
    padding: 40px 60px;
    border: 1px solid #bdbdbd;
    box-sizing: border-box;
    border-radius: 24px;
  }

  @media screen and (min-width: 1024px) {
    width: 35%;
  }
`;

export default AuthContainer;
