import React from 'react';

import LinkFilter from '../containers/LinkFilter';
import { SHOW_ACTIVE, SHOW_ALL, SHOW_COMPLETED } from '../constants/todoFilter';

const FILTER_TITLES =
  {
    SHOW_ACTIVE: 'Active',
    SHOW_ALL: 'All',
    SHOW_COMPLETED: 'Completed'
  }
;

const Footer = props => (
  <footer className="footer">
    <span className="todo-count">
      <strong>0</strong> item left
    </span>
    <ul className="filters">
      {Object.keys(FILTER_TITLES).map(filter => (
        <li key={filter}>
            <LinkFilter filter={filter} >
                {FILTER_TITLES[filter]}
            </LinkFilter>
        </li>

      ))}
    </ul>
    <button className="clear-completed">Clear completed</button>
  </footer>
);

export default Footer;
