import TabButton from "../TabButton";
import {EXAMPLES} from "../../data";
import {useState} from "react";
import Section from "../Section";

export default function Example() {


    const [selectedTopic, setSelectedTopic] = useState("")

    let tabContent = <p>Select a topic</p>;

    if(selectedTopic) {
        tabContent =
            <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
            </div>
    }

    function handleSelect(text) {
        setSelectedTopic(text);
    }

    return (
        <Section  title="Examples" id="examples">
            <menu>
                <TabButton isSelected={selectedTopic === 'components'}
                           handleSelect={() => handleSelect("components")}>Components</TabButton>
                <TabButton isSelected={selectedTopic === 'jsx'} handleSelect={() => handleSelect("jsx")}>JSX</TabButton>
                <TabButton isSelected={selectedTopic === 'props'}
                           handleSelect={() => handleSelect("props")}>Props</TabButton>
                <TabButton isSelected={selectedTopic === 'state'}
                           handleSelect={() => handleSelect("state")}>State</TabButton>
            </menu>
            {tabContent}
        </Section>
    );
}