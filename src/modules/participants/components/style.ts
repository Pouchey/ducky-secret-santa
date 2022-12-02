import { rgba } from 'polished';
import styled from 'styled-components';


export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
`;

export const StyledParticipantsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  max-height:600px;
  padding: 16px;
  border-radius: 8px;
  background-color: ${({ theme }) => rgba(theme.color.black, 0.6)};
  box-shadow: 0 0 8px 0 ${({ theme }) => rgba(theme.color.black, 0.8)};
`;


export const StyledParticipants = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height:100%;
  overflow-y: scroll;

`;

export const StyledParticipant = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 40px 40px;
  grid-gap: 16px;
  width: 100%;
  height: 40px;
  margin-bottom:8px;
`

export const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 0 8px;
  outline: none;
`
