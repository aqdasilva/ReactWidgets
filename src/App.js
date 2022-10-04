import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";

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

const showAccordion = () => {
    if (window.location.pathname === '/accordion') {
        return <Accordion items={items} />;
    }
};

const showList = () => {
    if (window.location.pathname === '/list') {
        return <Search />;
    }
};

const showDropdown = () => {
    if (window.location.pathname === '/dropdown' ) {
        return <Dropdown />;
    }
};

const showTranslate = () => {
    if (window.location.pathname === '/translate') {
        return <Translate />;
    }
};

export default () => {
    return (
        <div>
            {showAccordion()}
            {showList()}
            {showDropdown()}
            {showTranslate()}
        </div>
    );
};