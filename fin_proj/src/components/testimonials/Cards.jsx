function Cards({selectedItem}) {
  return (
    <div className="cards_wrap">
    <div className="testimonials_card">      
      <div>
        <img src={selectedItem.src} alt=""/>
      </div>
      <div className="testimonials_card__description-block">
        <h6>
          {selectedItem.title} <span>{selectedItem.work}</span>
        </h6>
        <div>
           {selectedItem.description}
        </div>
      </div>
    </div>
    </div>
  );
}

export default Cards;
