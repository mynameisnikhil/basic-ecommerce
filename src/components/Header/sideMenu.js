import React from "react";
import './sideMenu.css'

export const SideMenu = () => {

    return (
      <div class="menu">
        <div class="login">
          <button>Sign Up</button>
          <button>Log In</button>
        </div>
        <div class="category">
          <div class="cat-name">
            <h4>Mobiles</h4>
          </div>
          <div class="cat-list">
            <ul>
              <a href="#">
                <li>Life</li>
              </a>
              <a href="#">
                <li>Love</li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    );
}

export default SideMenu