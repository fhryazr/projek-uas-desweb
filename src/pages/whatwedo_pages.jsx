import { useState } from 'react';
import WhatWeDo from "../components/whatwedo";  
import WhatWeDoDesc from "../components/whatwedo_desc";

export default function WhatWeDoPage() {
    const [selectedItem, setSelectedItem] = useState(null);

    const handleItemClick = (item) => {
        setSelectedItem(item);
    };

    return (
        <div className="flex flex-col lg:flex-row">
            <WhatWeDoDesc selectedItem={selectedItem} />
            <div className="w-full lg:w-1/2">
                <WhatWeDo handleItemClick={handleItemClick} />
            </div>
        </div>
    );
}
