import { getI18n } from '@hooks/useGetI18n'
import { Card } from 'primereact/card'

export const PaymentComponent = () => {
  const menuI18n = getI18n('menu')
  return (
    <Card className="w-20rem">
      <div className="w-full justify-content-center">
        <h3>{menuI18n.website_payment}</h3>
      </div>
      <div>
        <h4>{menuI18n.credit_debit}</h4>
        <div className="w-12">
          <div className="mb-2 w-12 h-3rem">
            <Card className="mb-2 w-9 flex align-items-center h-3rem bg-gray-200">
              <div className="w-12 flex align-items-center justify-content-start">
                <img
                  className="w-3rem"
                  src="https://static.ifood-static.com.br/image/upload/t_high/icones/payments/brands/ca34f400-9ba1-49c9-9f08-d269f97fd678"
                />
                <h3 className="w-12 ml-2">Master Card</h3>
              </div>
            </Card>
          </div>
          <div className="mb-2 w-12 h-3rem">
            <Card className="mb-2 w-6 flex align-items-center h-3rem bg-gray-200">
              <div className="w-12 flex align-items-center justify-content-start">
                <img
                  className="w-3rem"
                  src="https://static.ifood-static.com.br/image/upload/t_high/icones/payments/brands/3fc410d4-a5ea-424c-8ef1-4847fc23723e"
                />
                <h3 className="w-10 ml-2">Visa</h3>
              </div>
            </Card>
          </div>
          <div className="mb-2 w-12 h-3rem">
            <Card className="mb-2 w-6 flex align-items-center h-3rem bg-gray-200">
              <div className="w-12 flex align-items-center justify-content-start">
                <img
                  className="w-3rem"
                  src="https://static.ifood-static.com.br/image/upload/t_high/icones/payments/brands/70764a4a-84bb-4697-82e2-7e63d88f4aa3"
                />
                <h3 className="w-10 ml-2">Elo</h3>
              </div>
            </Card>
          </div>
        </div>
        <div>
          <h4>{menuI18n.others}</h4>
          <div className="flex w-full justify-content-start align-items-center">
            <img className="h-3rem" src="https://getapp.astropay.com/img/payment_methods/IX.svg" />
            <h4>Pix</h4>
          </div>
        </div>
      </div>
    </Card>
  )
}
