import { Avatar } from '@chakra-ui/react'
import type { VFC } from 'react'

type Props = {
  name: string
  src: string | undefined
}

const UserAvatar: VFC<Props> = (props) => {
  return (
    <Avatar
      name={props.name}
      src={props.src}
      size={'md'}
      cursor={'pointer'}
      transition={'0.2s'}
      _hover={{ opacity: 0.9 }}
    />
  )
}

export { UserAvatar }
