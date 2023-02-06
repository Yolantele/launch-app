import axios from 'axios'
import { API_ENDPOINT } from '../constants'
import useGlobal from './useGlobal'
// import { useRollbar } from '@rollbar/react'
type HookType = () => {
  getLaunches: () => void
}

const useAPI: HookType = () => {
  const [, { setLaunches }] = useGlobal()
  // const { info } = useRollbar()

  const getLaunches = async () => {
    try {
      const res = await axios.get(`${API_ENDPOINT}launches`)
      setLaunches(res.data)
    } catch (error: any) {
      // info(error.toString()) <-- switch on ROLLBAR Error Logger instance to log errors to interface
      console.log(error)
    }
  }

  return {
    getLaunches
  }
}

export default useAPI
