/* Custom button styled component 
   Button with the app style. 
*/

// Styled
import styled from "styled-components";

export default styled.button`
  background-color: #2f80ed;
  cursor: pointer;
  padding: 12px 20px;
  border-radius: 8px;
  font-weight: bold;
  color: white;
  outline: none;
  border: none;
  width: 100%;
  ${(props) => (props.width ? `width: ${props.width}` : "")}
`;
