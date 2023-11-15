import React, { useContext, useEffect } from 'react'
import { Kontext } from '../Kontext/Kontext'
import { useParams } from 'react-router-dom';
import Breadcrumb from '../Komponenty/Breadcrumb/Breadcrumb';
import { useBreadcrumb } from '../Kontext/BreadcrumbContext';

const Produkt = () => {
  const {all_product} = useContext(Kontext);
  const { productId} = useParams();
  const product = all_product.find((e)=> e.id === Number(productId));
  const { clearBreadcrumbs } = useBreadcrumb();
  useEffect(() => {
    return () => {
      clearBreadcrumbs();
    };
  }, []);

  return (
    <div>
        <Breadcrumb product={product}/>
    </div>
  )
}

export default Produkt