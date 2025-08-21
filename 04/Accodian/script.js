const App = () => {
   const [activeIndex, setActiveIndex] = React.useState(null);
  const accordionRef = React.useRef(null);
  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      // if click happens outside accordion container → close all
      if (accordionRef.current && !accordionRef.current.contains(event.target)) {
        setActiveIndex(null);
      }
    };

    document.addEventListener("click", handleClickOutside);

    // cleanup when component unmounts
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div ref={accordionRef}>
      <h1>Accordion</h1>

      {["Title 1", "Title 2", "Title 3", "Title 4"].map((title, index) => (
        <div key={index} onClick={() => toggle(index)}  style={{
          cursor: "pointer",
          padding: "10px",
          background: "#f1f1f1",
          fontWeight: "bold",
        }}>
          <h2>{title}</h2>
          {activeIndex === index && (
            <p style={{ padding: "10px", background: "#fff" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, quisquam.</p>
          )}
        </div>
      ))}
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(React.createElement(App))