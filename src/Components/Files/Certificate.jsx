import Stack from "../ui/Stack";
import { certificateData } from "../../assets/data";


export const Certificate = () => {
  return (
    <Stack
      randomRotation={true}
      sensitivity={180}
      sendToBackOnClick={false}
      cardDimensions={{ width: 300, height: 400 }}
      cardsData={certificateData}
    />
  );
};
