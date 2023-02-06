import { Store } from 'use-global-hook'
import { GActionsT, GStateT, LaunchesType, FilterType } from './types'

export const initialState = {
  launches: null,
  filter: null
}

export const actions = {
  setLaunches: ({ state, setState }: Store<GStateT, GActionsT>, launches: LaunchesType[]) => {
    setState({ ...state, launches })
  },
  setFilter: ({ state, setState }: Store<GStateT, GActionsT>, filter: FilterType) => {
    setState({ ...state, filter })
  }
}
