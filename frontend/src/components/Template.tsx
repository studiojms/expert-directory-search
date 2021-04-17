import { ReactElement } from 'react';
import { Link, NavLink } from 'react-router-dom';

type Props = {
  children: ReactElement;
};

function Template({ children }: Props) {
  return (
    <>
      <header className="app-header">
        <nav>
          <div className="nav-wrapper">
            <NavLink to="/">
              <h1>Expert Directory</h1>
            </NavLink>
            <ul className="nav-items">
              <li>
                <NavLink to="">Add</NavLink>
              </li>
              <li>
                <NavLink to="">List</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <main className="app-container">{children}</main>
    </>
  );
}

export default Template;
