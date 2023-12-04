import { useState } from 'react';
import WhatWeDoDesc from "../components/whatwedo_desc";

export default function WhatWeDoPage() {
    const [selectedItem, setSelectedItem] = useState(null);

    const handleItemClick = (item) => {
        setSelectedItem(item);
    };

    return (
        <>
            <WhatWeDoDesc selectedItem={selectedItem} handleItemClick={handleItemClick} />
        </>
    );
}
