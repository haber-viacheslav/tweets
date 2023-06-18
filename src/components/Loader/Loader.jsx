import { createPortal } from 'react-dom';
import { Rings } from 'react-loader-spinner';
import { LoadingWpr } from './Loader.styled';

const LoaderSpinner = document.querySelector('#loader');

export const Loader = () => {
  return createPortal(
    <LoadingWpr>
      <Rings
        height="200"
        width="200"
        color="#0026fd"
        radius="6"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="loading"
      />
    </LoadingWpr>,
    LoaderSpinner
  );
};
