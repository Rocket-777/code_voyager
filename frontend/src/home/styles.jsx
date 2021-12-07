import styled from 'styled-components'

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin-top: 20px;
  padding: 5px;
  padding-bottom: 30px;
  border: 3px solid lightgray;
  border-radius: 10px;
  background-color: lightsteelblue;
`;
const StyledTextInp = styled.div`
  display: flex;
  width: 40%;
  margin-top: 15px;
  justify-content: space-between;
`;

const StyledButton = styled.button`
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
`;

const StyledButtonContainer = styled.div`
  margin-top: 15px;
  width: 40%;
`;

const StyledSignTest = styled.a`
  margin-top: 20px;
  font-size: 20px;
  color: white;
`;
export {StyledForm, StyledTextInp, StyledButton, StyledButtonContainer, StyledSignTest}