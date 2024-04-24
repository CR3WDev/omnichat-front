import { useIsFetching, useIsMutating } from '@tanstack/react-query'
import { ProgressSpinner } from 'primereact/progressspinner'
import './GlobalLoadingStyle.scss'

export const GlobalLoading = () => {
  const excludedQueryKeys: string[] = ['getMessagesByChatId']
  const excludedMutationsKeys: string[] = ['postSendMessage']

  let sum =
    useIsFetching({
      predicate: (key: any) => {
        return !(
          excludedQueryKeys.includes(key?.queryKey.toString()) ||
          (key?.queryKey && key?.queryKey?.toString().includes('DataTable'))
        )
      },
    }) +
    useIsMutating({
      predicate: (key: any) => {
        return !(
          excludedMutationsKeys.includes(key?.queryKey.toString()) ||
          (key?.queryKey && key?.queryKey?.toString().includes('DataTable'))
        )
      },
    })

  const isLoading = sum

  return (
    <div
      style={{ zIndex: 9999999999999999 }}
      className={`globalLoading ${
        !isLoading ? 'hidden' : 'flex justify-content-center align-items-center'
      } `}
    >
      <div className="flex justify-content-center align-content-center p-2 ">
        <ProgressSpinner />
      </div>
    </div>
  )
}
