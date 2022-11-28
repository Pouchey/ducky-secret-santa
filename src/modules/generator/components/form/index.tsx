import { useState } from "react"
import Button from "_components/button"
import { ParticipantType } from "_modules/generator/types"
import Participant from "./participant"
import { StyledForm } from "./style"



export default () => {

  const [participants, setParticipants] = useState<ParticipantType[]>([])
  const [participantIds, setParticipantIds] = useState<number[]>([])
  const [count, setCount] = useState<number>(0)


  const addParticipant = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const newParticipant = {
      id: count,
      name: "",
      email: "",
      exclude: []
    }
    setCount(count + 1)
    setParticipants([...participants, newParticipant])
  }

  const updateParticipant = (id: number, participant: ParticipantType) => {
    const newParticipants = participants.map((p) => {
      if (p.id === id) {
        return participant
      }
      return p
    })
    setParticipants(newParticipants)
  }


  return (
    <StyledForm>
      {
        participants.map((participant, index) => (
          <Participant key={index} participant={participant} onChange={updateParticipant} />
        ))
      }
      <Button 
        label="Ajouter une personne"
        onClick={addParticipant}
      />

    </StyledForm>
  )
}