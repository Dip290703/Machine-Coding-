import React from 'react'

const Accordian = () => {
    const accordionData = [
  {
    id: 1,
    title: "What is React?",
    content: "React is a JavaScript library for building user interfaces, developed by Facebook."
  },
  {
    id: 2,
    title: "What is useState in React?",
    content: "useState is a Hook that lets you add state to functional components."
  },
  {
    id: 3,
    title: "What is props in React?",
    content: "Props are inputs to components. They are passed from parent to child components."
  },
  {
    id: 4,
    title: "What is the difference between state and props?",
    content: "State is managed within the component, while props are passed down from parent to child."
  }
];

const [activeIndex, setActiveIndex] = React.useState(null);

const toggleAccordion = (index) => {
  if (activeIndex === index) {
    setActiveIndex(null); // Collapse if the same item is clicked
  } else {
    setActiveIndex(index); // Expand the clicked item
  }
};

  return (
    <div>
        <h1>Accordian</h1>
        {
            accordionData.map((item,index)=>(
                <div key={item.id}>
                    <h3 onClick={()=>toggleAccordion(index)} style={{cursor:"pointer"}}>
                        {item.title}
                    </h3>
                    {
                        activeIndex === index && (
                            <p>{item.content}</p>
                        )
                    }
                </div>
            ))
        }
    </div>
  )
}

export default Accordian