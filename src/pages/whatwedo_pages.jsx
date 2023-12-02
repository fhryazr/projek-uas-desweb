import { useState } from 'react';
import WhatWeDo from "../components/whatwedo";  
import WhatWeDoDesc from "../components/whatwedo_desc";

export default function WhatWeDoPage() {
    const [selectedItem, setSelectedItem] = useState(null);

    const handleItemClick = (item) => {
        setSelectedItem(item);
    };

    return (
        <>
            <WhatWeDo handleItemClick={handleItemClick} />
            <WhatWeDoDesc selectedItem={selectedItem} />
        </>
    );
}
