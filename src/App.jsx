import {CORE_CONCEPTS, EXAMPLES} from "./data";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept/CoreConcept";
import TabButton from "./components/TabButton";
import {useState} from "react";

function App() {

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
        <div>
            <Header></Header>
            <main>
                <section id="core-concepts">
                    <h2>Core concepts</h2>
                    <ul>
                        {
                            CORE_CONCEPTS.map((conceptItem) =>  <CoreConcept key={conceptItem.title} {...conceptItem}/>)
                        }
                    {/*    <CoreConcept*/}
                    {/*        title={CORE_CONCEPTS[0].title}*/}
                    {/*    description={CORE_CONCEPTS[0].description}*/}
                    {/*    image={CORE_CONCEPTS[0].image}*/}
                    {/*></CoreConcept>*/}
                    {/*<CoreConcept {...CORE_CONCEPTS[1]}></CoreConcept>*/}
                    {/*<CoreConcept {...CORE_CONCEPTS[2]}></CoreConcept>*/}
                    {/*<CoreConcept {...CORE_CONCEPTS[3]}></CoreConcept>*/}
                </ul>
            </section>
            <section id="examples">
                <h2>Examples</h2>
                <menu>
                    <TabButton isSelected={selectedTopic === 'components'} handleSelect={() => handleSelect("components")}>Components</TabButton>
                    <TabButton isSelected={selectedTopic === 'jsx'} handleSelect={() => handleSelect("jsx")}>JSX</TabButton>
                    <TabButton isSelected={selectedTopic === 'props'} handleSelect={() => handleSelect("props")}>Props</TabButton>
                    <TabButton isSelected={selectedTopic === 'state'} handleSelect={() => handleSelect("state")}>State</TabButton>
                </menu>
                { tabContent }
            </section>
        </main>
    </div>
  );
}

export default App;
