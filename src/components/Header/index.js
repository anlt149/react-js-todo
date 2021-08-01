import PropTypes from "prop-types";
import Button from "../Button";

const Header = ({ title, onAdd, displayInput }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        text={displayInput ? "Close" : "Add"}
        color={displayInput ? "red" : "green"}
        onClick={onAdd}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
