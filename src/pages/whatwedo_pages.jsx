import { useState } from 'react';
import WhatWeDoDesc from "../components/whatwedo_desc";
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/Footer';

export default function WhatWeDoPage() {
    const [selectedItem, setSelectedItem] = useState(null);

    const handleItemClick = (item) => {
        setSelectedItem(item);
    };

    return (
        <>  
          <Navbar />
          <div className='mt-[10rem] h-[50vh]'>
            <WhatWeDoDesc selectedItem={selectedItem} handleItemClick={handleItemClick} />
          </div>
          <Footer />
        </>
    );
}
