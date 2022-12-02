import ButtonIcon from "_components/button-icon"
import { ParticipantType } from "_modules/participants/types"
import { StyledInput, StyledParticipant } from "./style"

import Trash from "_assets/trash.svg"
import Edit from "_assets/edit.svg"

export default ({ 
  participant,
  onChange
}:{
  participant:ParticipantType,
  onChange:( participant:ParticipantType) => void
}) => {

  const handleNameChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const newParticipant = {
      ...participant,
      name: e.target.value
    }
    onChange(newParticipant)
  }

  const handleEmailChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const newParticipant = {
      ...participant,
      email: e.target.value
    }
    onChange(newParticipant)
  }

  return (
    <StyledParticipant>
      <StyledInput 
        type="text"
        placeholder="Name"
        value={participant.name}
        onChange={handleNameChange}
      />
      <StyledInput
        type="email"
        placeholder="Email"
        value={participant.email}
        onChange={handleEmailChange}
      />
      <ButtonIcon glyph={Edit} size={40}/>
      <ButtonIcon glyph={Trash} size={40}/>
    </StyledParticipant>

  )
}