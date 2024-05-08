import { useEffect, useRef, useState } from 'react'

/* Custom hook to manage toggle state and handle clicks outside a specific component*/
const useClickOutsideToggle = () => {
    
    const [expanded, setExpanded] = useState(false)
    
    const ref = useRef(null)

    /* Effect that sets up the event listener for clicks outside the referenced component*/
    useEffect(() => {
      /* Function to be called on mouse up event*/
      const handleClickOutSide = (event) => {
       
        if (ref.current && !ref.current.contains(event.target)) {
          setExpanded(false)  // Set expanded to false to collapse the component
        }
      }
  
      
      document.addEventListener('mouseup', handleClickOutSide)

      
      return () => {
        document.removeEventListener('mouseup', handleClickOutSide)
      }
    }, [ref]) 

    /* Return the state, setter function, and ref for external use*/
    return {
        expanded,
        setExpanded,
        ref
    };
}

export default useClickOutsideToggle;