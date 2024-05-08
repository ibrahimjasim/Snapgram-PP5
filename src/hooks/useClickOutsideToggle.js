import { useEffect, useRef, useState } from 'react'

// Custom hook to manage toggle state and handle clicks outside a specific component
const useClickOutsideToggle = () => {
    // State to track the expansion status of a component (like a dropdown menu)
    const [expanded, setExpanded] = useState(false)
    // Ref to attach to the component we want to monitor for outside clicks
    const ref = useRef(null)

    // Effect that sets up the event listener for clicks outside the referenced component
    useEffect(() => {
      // Function to be called on mouse up event
      const handleClickOutSide = (event) => {
        // Check if the click is outside the ref'ed component
        if (ref.current && !ref.current.contains(event.target)) {
          setExpanded(false)  // Set expanded to false to collapse the component
        }
      }
  
      // Add event listener for mouse up events on the document
      document.addEventListener('mouseup', handleClickOutSide)

      // Cleanup function to remove the event listener
      return () => {
        document.removeEventListener('mouseup', handleClickOutSide)
      }
    }, [ref])  // Depend on ref to make sure the effect function has the latest ref

    // Return the state, setter function, and ref for external use
    return {
        expanded,
        setExpanded,
        ref
    };
}

export default useClickOutsideToggle;