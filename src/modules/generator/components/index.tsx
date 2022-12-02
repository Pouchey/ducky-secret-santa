import background from '_assets/background.png';
import Form from "./form"
import { StyledContainer, StyledImageBackground } from "./style"

export default () => {
  return (
    <StyledContainer>
      <StyledImageBackground src={background} alt="background"/>
      <Form />
    </StyledContainer>
  )
}