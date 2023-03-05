import Image from 'next/image';
import { chakra } from '@chakra-ui/react';

const CNImage = chakra(Image, {
    baseStyle: { maxH: 120, maxW: 120 },
    shouldForwardProp: (prop) =>
    [
      `width`,
      `height`,
      `src`,
      `alt`,
      `rounded`,
      `maxWidth`,
      `maxHeight`,
    ].includes(prop),
});

export default CNImage;
