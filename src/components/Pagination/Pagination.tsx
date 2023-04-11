function Pagination() {
  return (
    <div className="customers__pagination_wrapper">
      <p className="customers__pagination_info">
        Showing data 1 to 8 of 256K entries
      </p>
      <div className="customers__btn_wrapper">
        <button className="customers__pagination_btn">{"<"}</button>
        <button className="customers__pagination_btn">1</button>
        <button className="customers__pagination_btn">2</button>
        <button className="customers__pagination_btn">3</button>
        <button className="customers__pagination_btn">4</button>
        <div>...</div>
        <button className="customers__pagination_btn">40</button>
        <button className="customers__pagination_btn">{">"}</button>
      </div>
    </div>
  );
}

export default Pagination;
