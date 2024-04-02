import { Card } from 'primereact/card'

export const AboutComponent = () => {
  return (
    <Card className="w-20rem">
      <div className="flex w-full flex-wrap">
        <p className="text-md text-700">
          Venha saborear a excelência da tradição italiana e brasileira, a Pizzaria Della Mamma,
          desde 2009 vem encantando paladares. Combinando ingredientes frescos, massas artesanais e
          um toque de amor em cada fatia, nossa pizzaria no iFood é a escolha perfeita para momentos
          de prazer gastronômico. Deixe-se levar por uma explosão de sabores autênticos e faça seu
          pedido agora mesmo. Descubra por que somos a preferência de tantos amantes de pizza!
        </p>
      </div>
      <div className="m-0">
        <h3 className="m-0 ">Endereço</h3>
        <p className="m-2">Rua dos Bobos, nº 0</p>
        <p className="m-2">Centro - São Paulo - SP</p>
        <p className="m-2">CEP: 00000-000</p>
        <p className="m-2">Telefone: (11) 0000-0000</p>
      </div>
    </Card>
  )
}


