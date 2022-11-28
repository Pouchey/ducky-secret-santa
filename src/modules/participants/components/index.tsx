import { useState } from "react"
import Button from "_components/button"
import { ParticipantType } from "_modules/participants/types"
import { useParticipantsContext } from "_modules/participants/hooks/useContext"
import Participant from "./Item"
import { StyledParticipants } from "./style"

export default ()  => {

  const { state, dispatch } = useParticipantsContext();
  const participants = state.participants;
  const [count, setCount] = useState<number>(0)


  const addParticipant = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const newParticipant = {
      id: count,
      name: "",
      email: "",
      exclude: []
    }
    setCount(count + 1);
    dispatch({
      type: "addParticipant",
      payload: newParticipant
    })
  
  }

  const updateParticipant = (participant: ParticipantType) => {
    dispatch({
      type: "updateParticipant",
      payload: participant
    })
  }

  return (
    <StyledParticipants>
      {
        participants.map((participant, index) => (
          <Participant key={index} participant={participant} onChange={updateParticipant} />
        ))
      }
      <Button 
        label="Ajouter une personne"
        onClick={addParticipant}
      />
    </StyledParticipants>
  )
}