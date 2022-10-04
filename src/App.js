import React, { Component, useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";


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

const showComponent = (route, Component) => {
    return window.location.pathname === route
        ? Component
        : null;
};

export default () => {
    const [selected, setSelected] = useState(options[0]);

    return (
        <div>
            <Header></Header>
            <Route path="/">
                <Accordion items={items} />
            </Route>
            <Route path={"/list"}>
                <Search />
            </Route>
            <Route path={"/dropdown"}>
                <Dropdown
                    label="select a color"
                    options={options}
                    selected={selected}
                    onSelectedChange={setSelected}
                     />
            </Route>
            <Route path={"/translate"}>
                <Translate />
            </Route>
        </div>
    );
};