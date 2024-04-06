import { getI18n } from '@hooks/useGetI18n'
import bannerImage from '@utils/assets/pizzaria/BannerPizzaria.png'
import LogoImage from '@utils/assets/pizzaria/Logo.png'
import { Avatar } from 'primereact/avatar'
import { Button } from 'primereact/button'
import { Card } from 'primereact/card'
import { Sidebar } from 'primereact/sidebar'
import { useState } from 'react'
import { TabMenuComponent } from '../SeeMore/SeeMoreTabMenuComponent'
import DeliveryTime from './StoreDeliveryTimeComponent'
import { StoreOptionsComponent } from './StoreOptionsComponent'
import { SearchComponent } from './StoreSearchComponent'

type StoreProps = {
  StoreName: string
  MinimumValueDelivery: number
  data: any[]
}

export const StoreComponent = ({ StoreName, MinimumValueDelivery, data }: StoreProps) => {
  const menuI18n = getI18n('menu')
  const [visibleSeeMore, setVisibleSeeMore] = useState(false)
  const [visibleOptionsDelivery, setVisibleOptionsDelivery] = useState(false)
  const [selectedOption, setSelectedOption] = useState([menuI18n.delivery])

  const handleOptionSelect = (option: any) => {
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
          alt="BannerStore"
          style={{ width: '100%', maxHeight: '200px', objectFit: 'cover' }}
        />
      </div>
      <div className="flex align-items-center justify-content-center mt-2">
        <Avatar className="lg:w-1 h-auto w-3" image={LogoImage} shape="circle" size="xlarge" />
        <div className="flex lg:w-full w-8 h-auto align-items-center md:justify-content-center justify-content-start flex-wrap md:flex-nowrap mx-2">
          <div className="flex align-items-center justify-content-center md:justify-content-start md:w-8 h-2rem">
            <h2 className="text-2xl">{StoreName}</h2>
          </div>
          <div className="flex align-items-center md:justify-content-end md:w-10 lg:h-auto h-2rem lg:mx-2 ">
            <div>
              <Button text className="cursor-pointer m-0 p-0" onClick={() => setVisibleSeeMore(true)}>
                {menuI18n.read_more}
              </Button>
            </div>
            <div className="lg:px-3 p-1 text-500">
              <p> | </p>
            </div>
            <div>
              <p className="text-xs pt-1 pl-1 text-gray-600">
                {' '}
                {menuI18n.minimum_value} {MinimumValueDelivery.toFixed(2)}
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
            className="w-full h-4rem mx-2 flex align-items-center justify-content-center cursor-pointer light-rounded"
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
