import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "./../actions/userActions";
const Header = () => {
  const cartstate = useSelector((state) => state.CartReducer);
  const userstate = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userstate;
  const dispatch = useDispatch();
  //console.log(currentUser);
  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 navbar-light bg-light">
        <a className="navbar-brand" href="/">
          PIZZA HUB
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            {currentUser ? (
              <>
                <div className="dropdown mt-2">
                  <div
                    style={{ color: "black" }}
                    className="dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {currentUser.name}
                  </div>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <a className="dropdown-item" href="/orders">
                      Orders
                    </a>
                    <a
                      className="dropdown-item"
                      href="/login"
                      onClick={() => {
                        dispatch(logoutUser());
                      }}
                    >
                      <li>Log Out</li>
                    </a>
                  </div>
                </div>
                <li className="nav-item">
                  <a className="nav-link" href="/cartscreen">
                    Cart {cartstate.cartItems.length}
                  </a>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <a className="nav-link" href="/login">
                  Login
                </a>
              </li>
            )}

            {/* <li className="nav-item">
              <a className="nav-link" href="/cartscreen">
                Cart {cartstate.cartItems.length}
              </a>
            </li> */}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
