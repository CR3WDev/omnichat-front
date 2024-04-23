import { getI18n } from '@hooks/useGetI18n'
import { Card } from 'primereact/card'
import { Divider } from 'primereact/divider'
import { Message } from 'primereact/message'
import { MdError } from 'react-icons/md'
import { useRouteError } from 'react-router-dom'
export const FrontErrorComponent = () => {
  //@ts-ignore
  const { message, stack, fileName, lineNumber, columnNumber } = useRouteError()
  const ErrorPageI18n = getI18n('Error')
  const messageContent = () => {
    return (
      <div className="p-grid p-justify-center" style={{ maxWidth: '80vw' }}>
        <div className="flex align-items-center">
          <MdError size="40" className="mr-2" />
          <h2 style={{ color: '#FF0000' }}>{message}</h2>
        </div>
        <Card>
          <div className="p-text-bold">{ErrorPageI18n.file}:</div>
          <p>{fileName}</p>
          <Divider />

          <div className="p-text-bold">{ErrorPageI18n.line_column}:</div>
          <p>
            {lineNumber} / {columnNumber}
          </p>
          <Divider />

          <div className="p-text-bold">{ErrorPageI18n.stack}:</div>
          <p style={{ maxWidth: '70vw' }}>{stack}</p>
        </Card>
      </div>
    )
  }

  return (
    <div className="flex justify-content-center m-4">
      <Message
        style={{
          border: 'solid rgba(239, 68, 68, 0.8)',
          borderWidth: '0 0 0 6px',
          color: '#fff',
        }}
        severity="info"
        content={messageContent}
      />
    </div>
  )
}
