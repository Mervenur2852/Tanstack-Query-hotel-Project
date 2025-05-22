import type { FC } from 'react';

const Hero: FC = () => {
    return (
        <div className='hero bg-center bg-cover h-[20vh] md:h-[30vh] grid 
        place-items-center rounded-3xl p-5'>
            <div className='text-white text-center'>
                <h1 className='text-3xl md:text-3xl lg
                 font-bold mb-5'>Tripser ile konaklama rezervasyonu yap</h1>
                <p className='md:text-lg lg:text-3xl'>Dünya çapında 1,300,140 oda sizi bekliyor.</p>
            </div>
        </div>
    );

};

export default Hero;