import React from "react";
import stretchingImg from '../../assets/images/ServicesImages/Stretching.png'
import coreImg from '../../assets/images/ServicesImages/Core.png'
import boxingImg from '../../assets/images/ServicesImages/Boxing.png'

export default function ServicesPageServices() {
  const fakeData = [
    {
      name: "Core",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum sed, libero eos ipsa qui itaque possimus praesentium reiciendis, excepturi exercitationem asperiores aliquam nostrum voluptate pariatur consectetur architecto. Molestias, et maiores!",
        image: coreImg
    },
    {
      name: "Boxing",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum sed, libero eos ipsa qui itaque possimus praesentium reiciendis, excepturi exercitationem asperiores aliquam nostrum voluptate pariatur consectetur architecto. Molestias, et maiores!",
        image: boxingImg
    },
    {
      name: "Stretching",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum sed, libero eos ipsa qui itaque possimus praesentium reiciendis, excepturi exercitationem asperiores aliquam nostrum voluptate pariatur consectetur architecto. Molestias, et maiores!",
        image: stretchingImg
    },
    
  ];
  return (
    fakeData.map(item =>{
        <PersonalTraining name={item.name} description={item.description} image={item.image}/>
    })
  )
}
