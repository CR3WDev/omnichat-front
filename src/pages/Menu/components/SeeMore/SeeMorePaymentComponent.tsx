import { getI18n } from '@hooks/useGetI18n';
import { paymentMethods } from '@utils/mock';
import { Card } from 'primereact/card';

export const PaymentComponent = () => {
  const menuI18n = getI18n('menu')

  return (
    <Card className="w-20rem light-rounded">
      <div className="w-full justify-content-center">
        <h3>{menuI18n.website_payment}</h3>
      </div>
      <div>
        <h4>{menuI18n.credit_debit}</h4>
        <div className="w-12">
          {paymentMethods.map((method, index) => (
            <div className="mb-2 w-12 h-3rem" key={index}>
              <Card className="mb-2 w-9 flex align-items-center h-3rem bg-payment">
                <div className="w-12 flex align-items-center justify-content-start">
                  <img
                    className="w-3rem"
                    src={method.image}
                    alt={method.name}
                  />
                  <h3 className="w-12 ml-2">{method.name}</h3>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
}
