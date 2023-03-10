import NextLink from 'next/link'
import { chakra } from '@chakra-ui/react'

// wrap the NextLink with Chakra UI's factory function
const CustomLink = chakra(NextLink, {
  // ensure that you're forwarding all of the required props for your case
  shouldForwardProp: (prop) => ['href', 'target', 'children',].includes(prop),
})

export default CustomLink;
