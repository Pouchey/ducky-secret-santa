import { useState } from "react"
import ButtonIcon from "_components/button-icon"
import { ParticipantType } from "_modules/participants/types"
import { StyledInput, StyledParticipant } from "./style"

import Trash from "_assets/trash.svg"
import Edit from "_assets/edit.svg"

import Exclusion from  "_modules/participants/components/exclusion"

export default ({ 
  participant,
  onChange,
  onDelete,
}:{
  participant:ParticipantType,
  onChange:( participant:ParticipantType) => void,
  onDelete:( participant:ParticipantType) => void,
}) => {

  const [isEditing, setIsEditing] = useState(false);

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

  const handleDelete = (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    onDelete(participant)
  }

  const handleEdit = (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setIsEditing(!isEditing)
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
      <ButtonIcon glyph={Edit} size={40} onClick={handleEdit}/>
      <ButtonIcon glyph={Trash} size={40} onClick={handleDelete}/>
      {isEditing && <Exclusion participant={participant} onChange={onChange}/>}
    </StyledParticipant>
  )
}