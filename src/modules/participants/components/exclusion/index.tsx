import Modal from "_components/modal"
import { ParticipantType } from "_modules/participants/types"

export default ({ 
  participant,
  onChange,
}:{
  participant:ParticipantType,
  onChange:( participant:ParticipantType) => void,
}) => {
  return (
    <Modal isLoading={true}>
    </Modal>
  )
}

