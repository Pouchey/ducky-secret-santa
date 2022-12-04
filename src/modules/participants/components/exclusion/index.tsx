import Close from '_assets/close.svg'
import ButtonIcon from "_components/button-icon"
import Modal from "_components/modal"
import { useParticipantsContext } from '_modules/participants/hooks/useContext'
import { ParticipantType } from "_modules/participants/types"
import { StyledContentWrapper, StyledHeader, StyledSelectionInput, StyledSelectionItem, StyledSelectionLabel, StyledSelectionName, StyledSelectionWrapper, StyledTitle } from './style'


export default ({ 
  participant,
  onChange,
  onClose
}:{
  participant:ParticipantType,
  onChange:( participant:ParticipantType) => void,
  onClose:( e:React.MouseEvent<HTMLButtonElement>) => void,
}) => {

  const {state} = useParticipantsContext();
  const participants = state.participants;


  const handleSelectionChange = (id: number) => {
    const newParticipant = {
      ...participant,
       exclude: participant.exclude.includes(id) ? participant.exclude.filter( e => e !== id) : [...participant.exclude, id]
    }
    onChange(newParticipant);
  }

  return (
    <Modal isLoading={false}>
      <StyledContentWrapper>
        <StyledHeader>
          <StyledTitle>Exclure des participants</StyledTitle>
          <ButtonIcon glyph={Close} onClick={onClose} size={32}/>
        </StyledHeader> 
        <StyledSelectionWrapper>
          {participants.map((p:ParticipantType) => p.id !== participant.id && (
            <StyledSelectionItem key={p.id} checked={participant.exclude.includes(p.id)}>            
              <StyledSelectionLabel> Participant {p.id}</StyledSelectionLabel>
              <StyledSelectionName>{p.name || 'inconnu'}</StyledSelectionName>
              <StyledSelectionInput
                type="checkbox"
                checked={participant.exclude.includes(p.id)}
                onChange={() => handleSelectionChange(p.id)}
              />
            </StyledSelectionItem>
          ))}
        </StyledSelectionWrapper>
      </StyledContentWrapper>
    </Modal>
  )
}

