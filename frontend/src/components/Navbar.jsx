import { Button, Container, Flex, HStack, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { PlusSquareIcon } from '@chakra-ui/icons'
import { useColorMode } from '@chakra-ui/color-mode'
import { LuSun } from 'react-icons/lu'
import { IoMoon } from 'react-icons/io5'
import { useColorModeValue } from '@chakra-ui/color-mode'


const Navbar = () => {

    const {colorMode ,toggleColorMode} = useColorMode();
 
    

  return (
   <Container maxW={"1140px"} px={4}  >
<Flex 
h={16}
alignItems={"center"}
justifyContent={"space-between"}
flexDir={{
base: "column",
sm:"row"
}
}>
<Text
  bgGradient='linear(to-r, cyan.400, blue.500)'
  bgClip='text'
  fontSize='6xl'
  fontWeight='extrabold'
>
  <Link to='/'>Product store</Link>
</Text>
<HStack spacing={2} alignItems={"center"}>
    <Link to={"/create"}>
    <Button>
        <PlusSquareIcon />
    </Button>
    </Link>
    <Button onClick={toggleColorMode} >
 {colorMode === "light" ? <IoMoon/> : <LuSun size={20} />}
    </Button>
</HStack>

</Flex>

    </Container>

  )
}

export default Navbar
