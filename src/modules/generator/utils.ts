import { GeneratedGiftType } from "./types";
import { ParticipantType } from "_modules/participants/types";
import { randList, randomOf } from "_utils/random";

export const canGenerate = (participants: ParticipantType[]) : boolean => {
  return true;
}

export const isGenerateSuccess = (generatedGifts: GeneratedGiftType[]) : boolean => {
  
  return !generatedGifts.every(gift => {
    //  object gifters and receivers are not undefined or null
    return gift.gifter && gift.receiver;
  });

}

const MAX_TRIES = 1000;

export const randomGiveGifts = (participants: ParticipantType[]) : GeneratedGiftType[] => {

  let generatedGifts: GeneratedGiftType[] = [];
  let participantsCopy: ParticipantType[] = []
  let tries = 0;

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

    tries++;

  }
  while(isGenerateSuccess(generatedGifts) && tries < MAX_TRIES);

  if(tries >= MAX_TRIES){
    throw new Error("Could not generate gifts");
  }

  return generatedGifts;
}
