import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

const items = [
    {
        title: 'what is react ?',
        content: 'react is the front end javascript framework'
    },
    {
        title: 'why use react?',
        content: 'react is a favorite JS library among engineers'
    },
    {
        title: 'how do you use react?',
        content: 'you use react by creating components'
    }

];

const options = [
    {
        label: 'The Color Red',
        value: 'red'
    },
    {
        label: 'the color Green',
        value: 'green'
    },
    {
        label: 'the color Blue',
        value: 'blue'
    }
];

export default () => {
    const [selected, setSelected] = useState(options[0]);

    return (
        <div>
            <Dropdown 
                selected={selected}
                onSelectedChange={setSelected}
                options={options} 
                />
        </div>
    );
};