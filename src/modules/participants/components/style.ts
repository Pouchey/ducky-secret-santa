import styled from 'styled-components';

export const StyledParticipants = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const StyledParticipant = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 16px;
  width: 100%;
  height: 40px;
  margin-bottom:8px;
`

export const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 0 8px;
  outline: none;
`
