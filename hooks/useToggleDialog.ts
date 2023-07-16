import { _useSelector } from '@/app/hooks';
import { useState } from 'react';



const useToggleDialog = () => {
  const toggle = _useSelector((state) => state.ToggleReducer.value)
  const [showDialog, setShowDialog] = useState(toggle);


  const toggleDialog = () => {
    setShowDialog(prev => !prev);
  };
  return { showDialog, toggleDialog };
};
export default useToggleDialog;
