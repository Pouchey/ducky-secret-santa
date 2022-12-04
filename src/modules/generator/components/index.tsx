import background from '_assets/background.png';
import { ParticipantsProvider } from '_modules/participants/hooks/useContext';
import Form from "./form"
import { StyledContainer, StyledImageBackground } from "./style"

export default () => {
  return (
    
    <ParticipantsProvider >
    <StyledContainer>
      <StyledImageBackground src={background} alt="background"/>
      <Form />
    </StyledContainer>
    </ParticipantsProvider>
  )
}