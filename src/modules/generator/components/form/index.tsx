import Button from '_components/button'
import { useGenerate } from '_modules/generator/hooks/useServices'
import { canGenerate } from '_modules/generator/utils'
import Participants from '_modules/participants/components'
import { useParticipantsContext } from '_modules/participants/hooks/useContext'
import { StyledForm } from "./style"

export default () => {
  
  const { state } = useParticipantsContext();

  const generate = useGenerate();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(canGenerate(state.participants))
      generate()
    else 
      alert("You need at least 2 participants")
  }

  return (
      <StyledForm onSubmit={onSubmit}>
        <Participants/>
        <Button label="Générer" type="submit"/>
      </StyledForm>
  )
}