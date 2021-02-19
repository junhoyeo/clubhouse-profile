import { useEffect, useState } from 'react';
import isMobile from 'ismobilejs';

export const useIsMobile = () => {
  const [value, setValue] = useState<boolean>(false);

  useEffect(
    () => setValue(isMobile(window.navigator).any), //
    [window.navigator],
  );

  return [value, setValue];
};
