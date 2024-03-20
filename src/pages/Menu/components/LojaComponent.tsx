import React from 'react';
import { Card } from 'primereact/card';
import { Avatar } from 'primereact/avatar';

import bannerImage from '../../../assets/BannerPizzaria.png'
import LogoImage from '../../../assets/Logo.png'

interface LojaComponenteProps {
  lojaNome: string;
  valorMinimoEntrega: number;
}

const LojaComponente: React.FC<LojaComponenteProps> = ({ lojaNome, valorMinimoEntrega }) => {


  return (
    <div>
      {/* Banner */}
      <div className='flex h-full w-full justify-content-center'>
        <img src={bannerImage} alt="Banner da loja" style={{ width: '100%', maxHeight: '200px', objectFit: 'cover' }} />
      </div>

      {/* Logo, Nome da Loja e Valor Mínimo para Entrega */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '20px' }}>
        {/* Logo e Nome da Loja */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Avatar image={LogoImage} shape="circle" size="xlarge" style={{ marginRight: '10px', width: '150px', height:'150px'  }} />
          <div>
            <h3>{lojaNome}</h3>
            {/* Outras informações da loja, se necessário */}
          </div>
        </div>

        {/* Valor Mínimo para Entrega */}
        <div>
          <p>Valor Mínimo para Entrega: R$ {valorMinimoEntrega.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default LojaComponente;
