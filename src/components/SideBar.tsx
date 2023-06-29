import { Link, Outlet } from "react-router-dom";
import DragonList from "./List";
import { dragonsList } from "../data/dragonsList";

export default function Sidebar() {
  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div>
          <form id="search-form" role="search">
            <input 
              type="search" 
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              name="q"
            />
            <div 
              id="search-spinner"
              aria-hidden
              hidden={true}
            />
            <div 
              className="sr-only"
              aria-live="polite"
            ></div>
          </form>
          <form method="post">
            <button type="submit">New</button>
          </form>
        </div>
        <nav>
          <ul>
            <DragonList dragons={dragonsList}/>
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  )
}