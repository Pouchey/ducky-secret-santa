import { useParticipantsContext } from "_modules/participants/hooks/useContext";
import { randomGiveGifts } from "../utils";

export const useGenerate = () => {

  const { state } = useParticipantsContext();
  
  return () => {
   
    try{
      const generatedGifts = randomGiveGifts(state.participants);


      fetch('http://localhost:5173/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          },
          body: JSON.stringify({generatedGifts}),
      })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    }
    catch(e){
      console.error(e);
    }
  };
}
