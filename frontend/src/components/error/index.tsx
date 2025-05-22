import type { FC } from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';

interface Props {
    message?: string;
}

const Error: FC<Props> = ({message}) => {
    return (
        <div className="flex justify-center items-center h-[60vh]  flex-col gap-5">
            <FaExclamationTriangle className="text-red-500 text-3xl" />
            <p className='text-red-500  font-bold'>Bir hata oluştu</p>
            
            <p className='font-semibold'>{message}</p>
        </div>
    );

};

export default Error;