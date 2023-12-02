import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOut } from "../store/booksSlice.js";

function Header({ pageTitle }) {
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(logOut());
  }

  return (
    <>
      <h1>{pageTitle}</h1>

      <div className="header-btns">
        <NavLink to="/">
          <button className="btn">Book List</button>
        </NavLink>

        <NavLink to="/add-book">
          <button className="btn">Add Book +</button>
        </NavLink>

        <button onClick={handleSignOut} className="btn transparent">
          Logout
        </button>
      </div>
    </>
  );
}

export default Header;
