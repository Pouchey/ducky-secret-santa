import Button from '_components/button'
import Participants from '_modules/participants/components'
import { ParticipantsProvider } from '_modules/participants/hooks/useContext'
import { StyledForm } from "./style"

export default () => {
  
  return (
    <ParticipantsProvider >
      <StyledForm>
        <Participants/>
        <Button label="Générer" onClick={(e) => e.preventDefault()}/>
      </StyledForm>
    </ParticipantsProvider>
  )
}