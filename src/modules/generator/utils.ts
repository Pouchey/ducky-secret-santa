import { GeneratedGiftType } from "./types";
import { ParticipantType } from "_modules/participants/types";
import { randList, randomOf } from "_utils/random";

export const canGenerate = (participants: ParticipantType[]) : boolean => {
  return true;
}

export const randomGiveGifts = (participants: ParticipantType[]) : GeneratedGiftType[] => {

  let generatedGifts: GeneratedGiftType[] = [];
  let participantsCopy: ParticipantType[] = []

  do{

    generatedGifts = [];
    let participantsCopy = randList([...participants]);

    participants.forEach((participant) => {
      const filteredParticipants = participantsCopy.filter((p) => 
        p.id !== participant.id && !p.exclude.includes(participant.id));

      const gift = randomOf(filteredParticipants);

      generatedGifts.push({
        gifter: participant,
        receiver: gift,
      });

      participantsCopy.splice(participantsCopy.indexOf(gift), 1);
    })


  }
  while(participantsCopy.length > 0)

  return generatedGifts;
}
