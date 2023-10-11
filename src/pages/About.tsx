import React from 'react'
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    // PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    // PopoverAnchor,
    Button,
    Drawer,
    DrawerBody,
    // DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Tooltip,
    useDisclosure
  } from '@chakra-ui/react'
const About = () => {

    const [size, setSize] = React.useState('')
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const handleClick = (newSize: string) => {
      setSize(newSize)
      onOpen()
    }
  
    const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'full']

    

  return (
    <div>About

<Popover placement='top-start'>
  <PopoverTrigger>
    <button className='my-btn'>Click me</button>
  </PopoverTrigger>
  <PopoverContent>
    <PopoverHeader fontWeight='semibold'>Popover placement</PopoverHeader>
    <PopoverArrow />
    <PopoverCloseButton />
    <PopoverBody className='popout-body'>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore.
    </PopoverBody>
  </PopoverContent>
</Popover>

<Tooltip label="Hey, I'm here!" placement='bottom-end' aria-label='A tooltip'>
  Hover me
</Tooltip>

{sizes.map((size) => (
        <Button
          onClick={() => handleClick(size)}
          key={size}
          m={4}
        >{`Open ${size} Drawer`}</Button>
      ))}
       <Drawer onClose={onClose} isOpen={isOpen} size={size}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>{`${size} drawer contents`}</DrawerHeader>
          <DrawerBody>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Consequat nisl vel pretium lectus quam id. Semper quis lectus
              nulla at volutpat diam ut venenatis. Dolor morbi non arcu risus
              quis varius quam quisque. Massa ultricies mi quis hendrerit dolor
              magna eget est lorem. Erat imperdiet sed euismod nisi porta.
              Lectus vestibulum mattis ullamcorper velit.
            </p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

    </div>
  )
}

export default About