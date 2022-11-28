import { ParticipantType } from "_modules/participants/types"
import { StyledInput, StyledParticipant } from "./style"

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
      {/* 
        Delete button
        Open exlusion modal button
      */}
    </StyledParticipant>

  )
}