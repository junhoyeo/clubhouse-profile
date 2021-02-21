import { useEffect, useState, Dispatch, SetStateAction } from 'react';
import isMobile from 'ismobilejs';

export const useIsMobile = (): [boolean, Dispatch<SetStateAction<boolean>>] => {
  const [value, setValue] = useState<boolean>(false);

  useEffect(
    // Only iOS for now
    () => setValue(isMobile(window.navigator).apple.device), //
    [],
  );

  return [value, setValue];
};
