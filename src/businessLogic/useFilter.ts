import { LaunchesType } from '../store/types'
import useGlobal from './useGlobal'

const RANGE = 10
type HookType = () => {
  applyFilter: () => LaunchesType[]
}

const useFilter: HookType = () => {
  const [{ launches, filter }] = useGlobal()

  const applyFilter = () => {
    let filtered
    if (launches) {
      switch (filter) {
        case 'success':
          filtered = launches.filter((each: LaunchesType) => each.success)
          break
        case 'failure':
          filtered = launches.filter((each: LaunchesType) => !each.success && each.details?.length)
          break
        case 'recent':
          filtered = launches.sort((a, b) => b.date_unix - a.date_unix)
          break
        default:
          filtered = launches
      }
      return filtered.slice(0, RANGE)
    }
    return launches
  }

  return {
    applyFilter
  }
}

export default useFilter
