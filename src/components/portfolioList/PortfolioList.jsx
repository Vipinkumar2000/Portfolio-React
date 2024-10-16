import "./portfolioList.scss";

const PortfolioList = ({ title, active, setSelected, id }) => {
  return (
    <div className="portfolioList">
      <li
        className={active ? "portfolioList active" : "portfolioList"}
        onClick={() => setSelected(id)}
      >
        {title}
      </li>
    </div>
  );
};

export default PortfolioList;
