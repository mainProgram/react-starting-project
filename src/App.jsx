import Header from "./components/Header/Header";
import CoreConcepts from "./components/CoreConcept/CoreConcepts";
import Example from "./components/CoreConcept/Example";

function App() {

    return (
        <>
            <Header></Header>
            <main>
                <CoreConcepts></CoreConcepts>
                <Example></Example>
            </main>
        </>
    );
}

export default App;
