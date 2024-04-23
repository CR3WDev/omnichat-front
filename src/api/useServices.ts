import { MutationKey, useMutation, useQuery } from 'react-query'
import { api } from './axios'

export const useService = () => {
  const useGet = (key: MutationKey, path: string, enabled: boolean) => {
    return useQuery({
      queryKey: key,
      queryFn: () => {
        return api.get(path)
      },
      enabled: enabled || false,
    })
  }
  const useGetTable = <T>(key: MutationKey, path: string) => {
    return useQuery({
      queryKey: key,
      queryFn: (data: T | any) => {
        return api.post(path, data)
      },
      enabled: false,
    })
  }
  const usePost = <T>(key: MutationKey, path: string) => {
    return useMutation({
      mutationKey: key,
      mutationFn: (data: T | any) => {
        return api.post<T | any>(path, data)
      },
    })
  }
  const useDelete = (key: MutationKey, path: string) => {
    return useMutation({
      mutationKey: key,
      mutationFn: () => {
        return api.delete(path)
      },
    })
  }
  const usePut = <T>(key: MutationKey, path: string) => {
    return useMutation({
      mutationKey: key,
      mutationFn: (data: T | any) => {
        return api.put(path, data)
      },
    })
  }

  return {
    usePost,
    useDelete,
    useGetTable,
    usePut,
    useGet,
  }
}
