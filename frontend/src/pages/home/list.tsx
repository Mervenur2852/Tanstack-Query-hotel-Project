import type { FC } from 'react';

import { usePlaces } from '../../utils/service';
import Card from '../../components/card';
import { useSearchParams } from 'react-router-dom';
import type { FilterParams } from '../../types';

const List: FC = () => {
const [searchParams] = useSearchParams();
const paramsObject = Object.fromEntries(searchParams.entries());
  
 const {isLoading, error, data} = usePlaces(paramsObject as FilterParams)

    if (isLoading) return <div>yüklneiyor</div>

    if (error) return <div>{error.message}</div>
    return (
        <div className='mt-10'>
          
            <h1 className='font-bold text-2xl '>Yakınınızdaki Lokasyonlar</h1>
           <div className='grid gap-5 mt-5'>
           { !data  || data?.length === 0 ? (
            <div>
                <h1>Aradığınız kriterlere uygun bir yer bulunamadı</h1>
            </div>
           ) : (data?.map((place) => (
           
           <Card key={place.id} place={place}/>
           )))}
           </div>
        </div>
    );

};

export default List;