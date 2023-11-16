import {useQuery} from '@tanstack/react-query'
import useIncaptor from './useIncaptor'
import useAuthState from './useAuthState'

const useMyjobs=()=>{
    const  axiosincaptor=useIncaptor()
    const {user}=useAuthState()
    const {data:jobs,isPending,refetch} = useQuery({
  queryKey: ['jobsid'],
  queryFn: async () => {
  const {data}=await axiosincaptor.get(`/myjobs?email=${user?.email}`)
  return data
  }
})

return {jobs,isPending,refetch}
}


export default useMyjobs;