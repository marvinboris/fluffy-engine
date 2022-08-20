import React from 'react';

import InternPreloader from './Preloader';

const Preloader = () => <div className="py-5 my-3 text-center">
    {/* <Spinner color="darkblue" style={{ width: '15rem', height: '15rem' }} type="grow" className="my-2" /> */}
    <InternPreloader />
</div>;

export default Preloader;