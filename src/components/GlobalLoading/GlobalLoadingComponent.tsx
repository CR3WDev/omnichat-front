import { ProgressSpinner } from 'primereact/progressspinner'
import { useIsFetching, useIsMutating } from 'react-query'
import './GlobalLoadingStyle.scss'

export const GlobalLoadingComponent = () => {
  const excludedQueryKeys: string[] = ['getMessagesByChatId']
  const excludedMutationsKeys: string[] = ['postSendMessage']

  let sum =
    useIsFetching({
      predicate: (key: any) => {
        return !excludedQueryKeys.includes(key?.queryKey.toString())
      },
    }) +
    useIsMutating({
      predicate: (key: any) =>
        !excludedMutationsKeys.includes(key?.options?.mutationKey.toString()),
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
