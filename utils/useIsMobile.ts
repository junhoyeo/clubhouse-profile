import { useEffect, useState, Dispatch, SetStateAction } from 'react';
import isMobile from 'ismobilejs';

export const useIsMobile = (): [boolean, Dispatch<SetStateAction<boolean>>] => {
  const [value, setValue] = useState<boolean>(false);

  useEffect(
    () => setValue(isMobile(window.navigator).any), //
    [],
  );

  return [value, setValue];
};
