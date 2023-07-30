import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import type { RootState, AppDispatch } from '../redux/store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const _useDispatch: () => AppDispatch = useDispatch
export const _useSelector: TypedUseSelectorHook<RootState> = useSelector



