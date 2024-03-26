import bannerImage from '@assets/pizzaria/BannerPizzaria.png'
import LogoImage from '@assets/pizzaria/Logo.png'
import { getI18n } from '@hooks/useGetI18n.ts'
import { Avatar } from 'primereact/avatar'
import { Card } from 'primereact/card'
import { Sidebar } from 'primereact/sidebar'
import { useState } from 'react'
import { TabMenuComponent } from '../SeeMoreComponent/TabMenu'
import DeliveryTime from './DeliveryTime'
import { StoreOptionsComponent } from './StoreOptionsComponent'
import SearchComponent from './StoreSearchComponent'

type StoreSearchProps = {
  lojaNome: string
  valorMinimoEntrega: number
  data: any[]
}

export const StoreSearchComponent = ({ lojaNome, valorMinimoEntrega, data }: StoreSearchProps) => {
  const [visibleSeeMore, setVisibleSeeMore] = useState(false)
  const [visibleOptionsDelivery, setVisibleOptionsDelivery] = useState(false)
  const [selectedOption, setSelectedOption] = useState('Entrega')
  const menuI18n = getI18n('menu')

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option)
  }

  return (
    <div>
      <StoreOptionsComponent
        visible={visibleOptionsDelivery}
        onHide={() => setVisibleOptionsDelivery(false)}
        onSelectOption={handleOptionSelect}
      />
      <Sidebar
        className="w-28rem flex justify-content-center"
        visible={visibleSeeMore}
        position="right"
        onHide={() => setVisibleSeeMore(false)}
      >
        <div className="flex w-full justify-content-center">
          <TabMenuComponent />
        </div>
      </Sidebar>
      <div className="flex h-full w-full justify-content-center">
        <img
          src={bannerImage}
          alt="Banner da loja"
          style={{ width: '100%', maxHeight: '200px', objectFit: 'cover' }}
        />
      </div>
      <div className="flex align-items-center justify-content-center mt-2">
        <Avatar className="lg:w-1 h-auto w-3" image={LogoImage} shape="circle" size="xlarge" />
        <div className="flex lg:w-full w-8 h-auto align-items-center md:justify-content-center justify-content-start flex-wrap md:flex-nowrap mx-2">
          <div className="flex align-items-center justify-content-center md:justify-content-start md:w-8 h-2rem">
            <h2 className="text-2xl">{lojaNome}</h2>
          </div>
          <div className="flex align-items-center md:justify-content-end md:w-10 lg:h-auto h-2rem mx-2 ">
            <div>
              <a className="cursor-pointer text-blue-600" onClick={() => setVisibleSeeMore(true)}>
                {menuI18n.read_more}
              </a>
            </div>
            <div className="lg:px-3 p-1 text-500">
              <p> | </p>
            </div>
            <div>
              <p className="text-xs pt-1 text-gray-600">
                {' '}
                Pedido mínimo : R$ {valorMinimoEntrega.toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-2 flex w-12 align-items-center flex-wrap lg:flex-nowrap">
        <div className="w-12">
          <SearchComponent products={data} />
        </div>
        <div className="lg:w-8rem h-4rem lg:mx-2 ml-2 w-4 mt-2 lg:mt-0">
          <Card
            className="w-full h-full mx-2 flex align-items-center justify-content-start cursor-pointer"
            onClick={() => setVisibleOptionsDelivery(true)}
          >
            <h3>{selectedOption}</h3>
          </Card>
        </div>
        <DeliveryTime option={selectedOption} />
      </div>
    </div>
  )
}
