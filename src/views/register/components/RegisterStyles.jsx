import styled from "styled-components";

export const RegisterContainer = styled.div`
  .register {
    &__footer {
      p {
        margin: 25px 0;
      }
    }
  }
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 80%;
  margin: 20px auto;
`;

export const Paragraph = styled.p`
  margin-bottom: 10px;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: -0.035em;
  ${(props) => (props.fontSize ? `font-size: ${props.fontSize}` : "")}
`;

export const RegisterMessageContainer = styled.div`
  margin-bottom: 30px;
`;
