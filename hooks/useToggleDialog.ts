import {  _useDispatch ,_useSelector } from '@/app/hooks';
import { toggle } from "@/redux/features/toggler/togglerSlice";


const useToggleDialog = () => {
  const isOpen = _useSelector((state) => state.ToggleReducer.active)
  const dispatch = _useDispatch();


  const toggleDialog = () => {
    dispatch(toggle())
  };
  return { isOpen, toggleDialog };
};
export default useToggleDialog;
