import Header from "./components/Header.js";
import CoreConcept from "./components/CoreConcept.js";
import TabButton from "./components/TabButton.js";
import { CORE_CONCEPTS } from "./data.js";
import { EXAMPLES } from "./data.js";
import { useState } from "react";

function App() {
  const [selectedTopic, setTopic] = useState(null);

  function handleSelect(selectedButton) {
    setTopic(selectedButton);
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2> Core Concepts </h2>
          <ul>
            {CORE_CONCEPTS.map((concepItem) => (
              <CoreConcept key={concepItem.title} {...concepItem} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2> Examples </h2>
          <menu>
            <TabButton
              isSelected={selectedTopic === "components"}
              onSelect={() => {
                handleSelect("components");
              }}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onSelect={() => {
                handleSelect("jsx");
              }}
            >
              Jsx
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onSelect={() => {
                handleSelect("props");
              }}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onSelect={() => {
                handleSelect("state");
              }}
            >
              State
            </TabButton>
          </menu>
          {selectedTopic && (
            <div>
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
