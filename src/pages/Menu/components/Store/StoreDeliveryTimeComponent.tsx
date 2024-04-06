import { getI18n } from '@hooks/useGetI18n'
import { Card } from 'primereact/card'

interface DeliveryTimeProps {
  option: any
}

const DeliveryTime = ({ option }: DeliveryTimeProps) => {
  const menuI18n = getI18n('menu')
  return (
    <div className="lg:w-12rem h-4rem lg:mt-0 mt-2 ml-2 w-7">
      <Card className="w-full h-full ml-2 flex align-items-center justify-content-start light-rounded">
        <h3 className="m-0 p-0">{menuI18n.today}</h3>
        <p className="m-0 p-0 text-sm text-700">
          {option == menuI18n.delivery ? '20-30 min  R$ 6,50' : '0 - 10 min ' + menuI18n.free}
        </p>
      </Card>
    </div>
  )
}

export default DeliveryTime
