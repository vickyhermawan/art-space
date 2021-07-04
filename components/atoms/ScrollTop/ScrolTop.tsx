import * as React from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import { Button, Box } from "@chakra-ui/react"
import style from '@styles/ScrollTop.module.css';

const ScrollTopArrow = () => {

  const [showScroll, setShowScroll] = React.useState<Boolean>(false)

  React.useEffect(() => {
    window.addEventListener('scroll', checkScrollTop)
    return function cleanup() {
      window.removeEventListener('scroll', checkScrollTop)
    }
  })

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 200) {
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 200) {
      setShowScroll(false)
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Button rightIcon={<FaArrowCircleUp />} bg="teal" onClick={scrollTop} position="fixed" className={style.scrollTop} style={{ display: showScroll ? 'flex' : 'none' }} size="xs">
        Back to Top
      </Button>
    </>
  );
}

export default ScrollTopArrow;