import { ButtonFunc } from '../index';
import React, { useState } from 'react';

function WhatWeDo() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);

  const hendlclick1 = () => {
    setCount1(count1 + 1);
    if (count1 === 0) {
      setCount2(0);
      setCount3(0);
      setCount4(0);
    }
  };
  const hendlclick2 = () => {
    setCount2(count2 + 1);
    if (count2 === 0) {
      setCount1(0);
      setCount3(0);
      setCount4(0);
    }
  };
  const hendlclick3 = () => {
    setCount3(count3 + 1);
    if (count3 === 0) {
      setCount2(0);
      setCount1(0);
      setCount4(0);
    }
  };
  const hendlclick4 = () => {
    setCount4(count4 + 1);
    if (count4 === 0) {
      setCount2(0);
      setCount1(0);
      setCount3(0);
    }
  };

  var json = [
    {
      id: 618,
      interior_design: [
        {
          src: '/src/icon/wwd1.png',
          title:
            'Interior Design 1 Interior Design 1Interior Design 1Interior Design 1Interior Design 1Interior Design 1Interior Design 1',
          description: `Lorem ipsum dolor amet consectetur
                      adipiscing elit sed eiusmod tempor
                      incididunt ut labore.Lorem ipsum dolor amet consectetur
                      adipiscing elit sed eiusmod tempor
                      incididunt ut labore.Lorem ipsum dolor amet consectetur
                      adipiscing elit sed eiusmod tempor
                      incididunt ut labore.Lorem ipsum dolor amet consectetur
                      adipiscing elit sed eiusmod tempor
                      incididunt ut labore.Lorem ipsum dolor amet consectetur
                      adipiscing elit sed eiusmod tempor
                      incididunt ut labore.Lorem ipsum dolor amet consectetur
                      adipiscing elit sed eiusmod tempor
                      incididunt ut labore.Lorem ipsum dolor amet consectetur
                      adipiscing elit sed eiusmod tempor
                      incididunt ut labore.Lorem ipsum dolor amet consectetur
                      adipiscing elit sed eiusmod tempor
                      incididunt ut labore.Lorem ipsum dolor amet consectetur
                      adipiscing elit sed eiusmod tempor
                      incididunt ut labore.Lorem ipsum dolor amet consectetur
                      adipiscing elit sed eiusmod tempor
                      incididunt ut labore.`,
        },
        {
          src: '/src/icon/wwd1.png',
          title: 'Interior Design 2',
          description: `Lorem ipsum dolor amet consectetur
                      adipiscing elit sed eiusmod tempor
                      incididunt ut labore.Lorem ipsum dolor amet consectetur
                      adipiscing elit sed eiusmod tempor
                      incididunt ut labore.Lorem ipsum dolor amet consectetur
                      adipiscing elit sed eiusmod tempor
                      incididunt ut labore.Lorem ipsum dolor amet consectetur
                      adipiscing elit sed eiusmod tempor
                      incididunt ut labore.Lorem ipsum dolor amet consectetur
                      adipiscing elit sed eiusmod tempor
                      incididunt ut labore.Lorem ipsum dolor amet consectetur
                      adipiscing elit sed eiusmod tempor
                      incididunt ut labore.`,
        },
        {
          src: '/src/icon/wwd1.png',
          title: 'Interior Design 3',
          description: `Lorem ipsum dolor amet consectetur
                      adipiscing elit sed eiusmod tempor
                      incididunt ut labore.Lorem ipsum dolor amet consectetur
                      adipiscing elit sed eiusmod tempor
                      incididunt ut labore.Lorem ipsum dolor amet consectetur
                      adipiscing elit sed eiusmod tempor
                      incididunt ut labore.Lorem ipsum dolor amet consectetur
                      adipiscing elit sed eiusmod tempor
                      incididunt ut labore.Lorem ipsum dolor amet consectetur
                      adipiscing elit sed eiusmod tempor
                      incididunt ut labore.Lorem ipsum dolor amet consectetur
                      adipiscing elit sed eiusmod tempor
                      incididunt ut labore.Lorem ipsum dolor amet consectetur
                      adipiscing elit sed eiusmod tempor
                      incididunt ut labore.`,
        },
        {
          src: '/src/icon/wwd1.png',
          title: 'Interior Design 4',
          description: `Lorem ipsum dolor amet consectetur
                      adipiscing elit sed eiusmod tempor
                      incididunt ut labore.Lorem ipsum dolor amet consectetur
                      adipiscing elit sed eiusmod tempor
                      incididunt ut labore.Lorem ipsum dolor amet consectetur
                      adipiscing elit sed eiusmod tempor
                      incididunt ut labore.Lorem ipsum dolor amet consectetur
                      adipiscing elit sed eiusmod tempor
                      incididunt ut labore.Lorem ipsum dolor amet consectetur
                      adipiscing elit sed eiusmod tempor
                      incididunt ut labore.Lorem ipsum dolor amet consectetur
                      adipiscing elit sed eiusmod tempor
                      incididunt ut labore.`,
        },
        {
          src: '/src/icon/wwd1.png',
          title: 'Interior Design 5',
          description: `Lorem ipsum dolor amet consectetur
                      adipiscing elit sed eiusmod tempor
                      incididunt ut labore.Lorem ipsum dolor amet consectetur
                      adipiscing elit sed eiusmod tempor
                      incididunt ut labore.Lorem ipsum dolor amet consectetur
                      adipiscing elit sed eiusmod tempor
                      incididunt ut labore.Lorem ipsum dolor amet consectetur
                      adipiscing elit sed eiusmod tempor
                      incididunt ut labore.Lorem ipsum dolor amet consectetur
                      adipiscing elit sed eiusmod tempor
                      incididunt ut labore.`,
        },
      ],
    },
    {
      id: 619,
      architecture: [
        {
          src: '/src/icon/wwd2.png',
          title: 'Architecture 1',
          description: `Lorem ipsum dolor amet consectetur
                      adipiscing elit sed eiusmod tempor
                      Lorem ipsum dolor amet consectetur
                      Lorem ipsum dolor amet consectetur
                      adipiscing elit sed eiusmod tempor
                      Lorem ipsum dolor amet consectetur
                      Lorem ipsum dolor amet consectetur
                      adipiscing elit sed eiusmod tempor
                      Lorem ipsum dolor amet consectetur`,
        },
        {
          src: '/src/icon/wwd2.png',
          title: 'Architecture 2',
          description: `Lorem ipsum dolor amet consectetur
                      adipiscing elit sed eiusmod tempor
                      incididunt ut labore.`,
        },
        {
          src: '/src/icon/wwd2.png',
          title: 'Architecture 3',
          description: `Lorem ipsum dolor amet consectetur
                      adipiscing elit sed eiusmod tempor
                      incididunt ut labore.Lorem ipsum dolor amet consectetur
                      adipiscing elit sed eiusmod tempor
                      Lorem ipsum dolor amet consecteturLorem ipsum dolor amet consectetur
                      adipiscing elit sed eiusmod tempor
                      Lorem ipsum dolor amet consecteturLorem ipsum dolor amet consectetur
                      adipiscing elit sed eiusmod tempor
                      Lorem ipsum dolor amet consecteturLorem ipsum dolor amet consectetur
                      adipiscing elit sed eiusmod tempor
                      Lorem ipsum dolor amet consecteturLorem ipsum dolor amet consectetur
                      adipiscing elit sed eiusmod tempor
                      Lorem ipsum dolor amet consecteturLorem ipsum dolor amet consectetur
                      adipiscing elit sed eiusmod tempor
                      Lorem ipsum dolor amet consectetur`,
        },
        {
          src: '/src/icon/wwd2.png',
          title: 'Architecture 4',
          description: `Lorem ipsum dolor amet consectetur
                      adipiscing elit sed eiusmod tempor
                      incididunt ut labore.Lorem ipsum dolor amet consectetur
                      adipiscing elit sed eiusmod tempor
                      Lorem ipsum dolor amet consectetur`,
        },
        {
          src: '/src/icon/wwd2.png',
          title: 'Architecture 5',
          description: `Lorem ipsum dolor amet consectetur
                      adipiscing elit sed eiusmod tempor
                      incididunt ut labore.`,
        },
      ],
    },

    {
      id: 620,
      planning: [
        {
          src: '/src/icon/wwd3.png',
          title: 'Planning 1',
          description: `Lorem ipsum dolor amet consectetur
                      adipiscing elit sed eiusmod tempor
                      incididunt ut labore.`,
        },
        {
          src: '/src/icon/wwd3.png',
          title: 'Planning 2',
          description: `Lorem ipsum dolor amet consectetur
                      adipiscing elit sed eiusmod tempor
                      incididunt ut labore.Lorem ipsum dolor amet consectetur
                      adipiscing elit sed eiusmod tempor
                      incididunt ut labore.Lorem ipsum dolor amet consectetur
                      adipiscing elit sed eiusmod tempor
                      incididunt ut labore.Lorem ipsum dolor amet consectetur
                      adipiscing elit sed eiusmod tempor
                      incididunt ut labore.`,
        },
        {
          src: '/src/icon/wwd3.png',
          title: 'Planning 3',
          description: `Lorem ipsum dolor amet consectetur
                      adipiscing elit sed eiusmod tempor
                      incididunt ut labore.`,
        },
        {
          src: '/src/icon/wwd3.png',
          title: 'Planning 4',
          description: `Lorem ipsum dolor amet consectetur
                      adipiscing elit sed eiusmod tempor
                      incididunt ut labore.`,
        },
        {
          src: '/src/icon/wwd3.png',
          title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, maxime.',
          description: `Lorem ipsum dolor amet consectetur
                      adipiscing elit sed eiusmod tempor
                      incididunt ut labore. Lorem ipsum dolor amet consectetur
                      adipiscing elit sed eiusmod tempor
                      incididunt ut labore.Lorem ipsum dolor amet consectetur
                      adipiscing elit sed eiusmod tempor
                      incididunt ut labore.`,
        },
      ],
    },
  ];

  return (
    <div className="what-we-do">
      <div className="what-we-do__wrapper _container">
        <div className="what-we-do__wrap">
          <div className="pre-title">WHAT WE DO</div>
          <div className="title">Our Service</div>
          <div className="what-we-do__buttom-block">
            <ButtonFunc
              onClick={() => hendlclick1()}
              class={count1 === 1 ? 'active' : 'what-we-do-but'}
            >
              ALL
            </ButtonFunc>
            <ButtonFunc
              onClick={() => hendlclick2()}
              class={count2 === 1 ? 'active' : 'what-we-do-but'}
            >
              INTERIOR DESIGN
            </ButtonFunc>
            <ButtonFunc
              onClick={() => hendlclick3()}
              class={count3 === 1 ? 'active' : 'what-we-do-but'}
            >
              ARCHITECTURE
            </ButtonFunc>
            <ButtonFunc
              onClick={() => hendlclick4()}
              class={count4 === 1 ? 'active' : 'what-we-do-but'}
            >
              PLANNING
            </ButtonFunc>
          </div>
        </div>

        {/*{json.map((item) => {
          const keys = Object.keys(item);
          const lastKey = keys[keys.length - 1];
          const lastArray = item[lastKey];
          const lastEl = lastArray[lastArray.length - 1];
          console.log(lastEl);          
        })}*/}

        {count2 > 0 && (
          <div className="what-we-do__cards-block-wh">
            {json
              .map((value) => value.interior_design)
              .flat()
              .map((value, index) => {
                if (value && value.src && value.title && value.description) {
                  return (
                    <div key={`${value}_${index}`} className="what-we-do__card-wh">
                      <div className="card-img-wh">
                        <img src={value.src} alt="" />
                      </div>
                      <div className="card-block-right-wh">
                        <div className="card_title-wh">{value.title}</div>
                        <div className="card_description-wh">{value.description}</div>
                      </div>
                    </div>
                  );
                }
                return null;
              })}
          </div>
        )}
        {count3 > 0 && (
          <div className="what-we-do__cards-block">
            {json
              .map((value) => value.architecture)
              .flat()
              .map((value, index) => {
                if (value && value.src && value.title && value.description) {
                  return (
                    <div key={`${value}_${index}`} className="what-we-do__card">
                      <div className="card-img">
                        <img src={value.src} alt="" />
                      </div>
                      <div className="card-block-right">
                        <div className="card_title">{value.title}</div>
                        <div className="card_description">{value.description}</div>
                      </div>
                    </div>
                  );
                }
                return null;
              })}
          </div>
        )}
        {count4 > 0 && (
          <div className="what-we-do__cards-block-wh">
            {json
              .map((value) => value.planning)
              .flat()
              .map((value, index) => {
                if (value && value.src && value.title && value.description) {
                  return (
                    <div key={`${value}_${index}`} className="what-we-do__card-wh">
                      <div className="card-img-wh">
                        <img src={value.src} alt="" />
                      </div>
                      <div className="card-block-right-wh">
                        <div className="card_title-wh">{value.title}</div>
                        <div className="card_description-wh">{value.description}</div>
                      </div>
                    </div>
                  );
                }
                return null;
              })}
          </div>
        )}
      </div>
    </div>
  );
}

export default WhatWeDo;
