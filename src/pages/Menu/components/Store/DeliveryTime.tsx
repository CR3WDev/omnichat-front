import { Card } from 'primereact/card'

interface DeliveryTimeProps {
  option: string
}

const DeliveryTime = ({ option }: DeliveryTimeProps) => {
  return (
    <div className="lg:w-12rem h-4rem lg:mt-0 mt-2 ml-2 w-7 ">
      <Card className="w-full h-full ml-2 flex align-items-center justify-content-start">
        <h3 className="m-0 p-0">Hoje</h3>
        <p className="m-0 p-0 text-sm text-700">
          {option === 'Entrega' ? '20-30 min  R$ 6,50' : '0 - 10 min  Gratis'}
        </p>
      </Card>
    </div>
  )
}

export default DeliveryTime
