import { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';

type Props = {
  children: ReactElement;
};

function Template({ children }: Props) {
  return (
    <>
      <header className="app-header">
        <nav>
          <div className="nav-wrapper">
            <h1>Expert Directory</h1>
            <ul className="nav-items">
              <li>
                <NavLink to="/" activeClassName="active" exact>
                  List Members
                </NavLink>
              </li>
              <li>
                <NavLink to="/create-member" activeClassName="active" exact>
                  Create Member
                </NavLink>
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
