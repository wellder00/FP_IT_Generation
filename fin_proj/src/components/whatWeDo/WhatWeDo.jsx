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

  let json = [
    {
      id: 618,
      'interior_design': [
        {
          'src': '/src/icon/wwd1.png',
          'title':
            'Interior Design 1 Interior Design 1Interior Design 1Interior Design 1Interior Design 1Interior Design 1Interior Design 1',
          'description': `Lorem ipsum dolor amet consectetur
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
          'src': '/src/icon/wwd1.png',
          'title': 'Interior Design 2',
          'description': `Lorem ipsum dolor amet consectetur
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
          'src': '/src/icon/wwd1.png',
          'title': 'Interior Design 3',
          'description': `Lorem ipsum dolor amet consectetur
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
          'src': '/src/icon/wwd1.png',
          'title': 'Interior Design 4',
          'description': `Lorem ipsum dolor amet consectetur
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
          'src': '/src/icon/wwd1.png',
          'title': 'Interior Design 5',
          'description': `Lorem ipsum dolor amet consectetur
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
      'id': 619,
      'architecture': [
        {
          'src': '/src/icon/wwd2.png',
          'title': 'Architecture 1',
          'description': `Lorem ipsum dolor amet consectetur
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
          'src': '/src/icon/wwd2.png',
          'title': 'Architecture 2',
          'description': `Lorem ipsum dolor amet consectetur
                      adipiscing elit sed eiusmod tempor
                      incididunt ut labore.`,
        },
        {
          'src': '/src/icon/wwd2.png',
          'title': 'Architecture 3',
          'description': `Lorem ipsum dolor amet consectetur
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
          'src': '/src/icon/wwd2.png',
          'title': 'Architecture 4',
          'description': `Lorem ipsum dolor amet consectetur
                      adipiscing elit sed eiusmod tempor
                      incididunt ut labore.Lorem ipsum dolor amet consectetur
                      adipiscing elit sed eiusmod tempor
                      Lorem ipsum dolor amet consectetur`,
        },
        {
          'src': '/src/icon/wwd2.png',
          'title': 'Architecture 5',
          'description': `Lorem ipsum dolor amet consectetur
                      adipiscing elit sed eiusmod tempor
                      incididunt ut labore.`,
        },
      ],
    },

    {
      'id': 620,
      'planning': [
        {
          'src': '/src/icon/wwd3.png',
          'title': 'Planning 1',
          'description': `Lorem ipsum dolor amet consectetur
                      adipiscing elit sed eiusmod tempor
                      incididunt ut labore.`,
        },
        {
          'src': '/src/icon/wwd3.png',
          'title': 'Planning 2',
          'description': `Lorem ipsum dolor amet consectetur
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
          'src': '/src/icon/wwd3.png',
          'title': 'Planning 3',
          'description': `Lorem ipsum dolor amet consectetur
                      adipiscing elit sed eiusmod tempor
                      incididunt ut labore.`,
        },
        {
          'src': '/src/icon/wwd3.png',
          'title': 'Planning 4',
          'description': `Lorem ipsum dolor amet consectetur
                      adipiscing elit sed eiusmod tempor
                      incididunt ut labore.`,
        },
        {
          'src': '/src/icon/wwd3.png',
          'title': 'Planning 5',
          'description': `Lorem ipsum dolor amet consectetur
                      adipiscing elit sed eiusmod tempor
                      incididunt ut labore. Lorem ipsum dolor amet consectetur
                      adipiscing elit sed eiusmod tempor
                      incididunt ut labore.Lorem ipsum dolor amet consectetur
                      adipiscing elit sed eiusmod tempor
                      incididunt ut labore.`,
        },
        {
          'src': '/src/icon/wwd3.png',
          'title': 'Planning 6',
          'description': `Lorem ipsum dolor amet consectetur`,
        },
        {
          'src': '/src/icon/wwd3.png',
          'title': 'Planning 7',
          'description': `Lorem ipsum dolor amet consectetur
                      adipiscing elit sed eiusmod tempor`,
        },
        {
          'src': '/src/icon/wwd3.png',
          'title': 'Planning 8',
          'description': `Lorem ipsum dolor amet consectetur
                      adipiscing elit sed eiusmod tempor
                      incididunt ut labore. Lorem ipsum dolor amet consectetur`,
        },
        
      ],
    },
  ];
  
  let lastItems = json.map(function (item) {
    let key = Object.keys(item)[1];
    let values = item[key];
    let lastItem = values[values.length - 1];
    return lastItem;
  });

  return (
    <div id='services' className="what-we-do">
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
        {count1 === 0 &&
         count2 === 0 &&
         count3 === 0 &&
         count4 === 0 && (
          <div className="what-we-do__cards-block-wh">
            {
              <>
                <div className="what-we-do__card-wh">
                  <div className="card-img-wh">
                    <img src={lastItems[0].src} alt="value.src" />
                  </div>
                  <div className="card-block-right-wh">
                    <div className="card_title-wh">{lastItems[0].title}</div>
                    <div className="card_description-wh">{lastItems[0].description}</div>
                  </div>
                </div>

                <div className="what-we-do__card">
                  <div className="card-img">
                    <img src={lastItems[1].src} alt="value.src" />
                  </div>
                  <div className="card-block-right">
                    <div className="card_title">{lastItems[1].title}</div>
                    <div className="card_description">{lastItems[1].description}</div>
                  </div>
                </div>

                <div className="what-we-do__card-wh">
                  <div className="card-img-wh">
                    <img src={lastItems[2].src} alt="value.src" />
                  </div>
                  <div className="card-block-right-wh">
                    <div className="card_title-wh">{lastItems[2].title}</div>
                    <div className="card_description-wh">{lastItems[2].description}</div>
                  </div>
                </div>
              </>
            }
          </div>
        )}

        {count1 > 0 && (
          <div className="what-we-do__cards-block-wh">
            {
              <>
                <div className="what-we-do__card-wh">
                  <div className="card-img-wh">
                    <img src={lastItems[0].src} alt="value.src" />
                  </div>
                  <div className="card-block-right-wh">
                    <div className="card_title-wh">{lastItems[0].title}</div>
                    <div className="card_description-wh">{lastItems[0].description}</div>
                  </div>
                </div>

                <div className="what-we-do__card">
                  <div className="card-img">
                    <img src={lastItems[1].src} alt="value.src" />
                  </div>
                  <div className="card-block-right">
                    <div className="card_title">{lastItems[1].title}</div>
                    <div className="card_description">{lastItems[1].description}</div>
                  </div>
                </div>

                <div className="what-we-do__card-wh">
                  <div className="card-img-wh">
                    <img src={lastItems[2].src} alt="value.src" />
                  </div>
                  <div className="card-block-right-wh">
                    <div className="card_title-wh">{lastItems[2].title}</div>
                    <div className="card_description-wh">{lastItems[2].description}</div>
                  </div>
                </div>
              </>
            }
          </div>
        )}
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
                        <img src={value.src} alt="value.src" />
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
                        <img src={value.src} alt="value.src" />
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
                        <img src={value.src} alt="value.src" />
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
      <div className="what-we-do__fone-img">
        <img src="/src/img/fone2.png" alt="" />
      </div>
    </div>
  );
}

export default WhatWeDo;
