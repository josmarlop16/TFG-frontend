import { faSmile, faFaceGrinHearts, faFaceLaughBeam, faFaceRollingEyes, faFaceTired } from '@fortawesome/free-solid-svg-icons';

export const getFaceIcon = (rating: number) => {
  if (rating < 5) {
    return faFaceTired;
  } else if (rating >= 5 && rating < 6) {
    return faFaceRollingEyes;
  } else if (rating >= 6 && rating < 7) {
    return faSmile;
  } else if (rating >= 7 && rating < 8) {
    return faFaceLaughBeam;
  } else {
    return faFaceGrinHearts;
  }
};