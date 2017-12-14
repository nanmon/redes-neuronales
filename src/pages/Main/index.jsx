import React from 'react';
import { Link } from 'react-router-dom';

export default function MainPage() {
  return (
    <aside class="menu">
      {/* <p class="menu-label">
        General
      </p> */}
      <ul class="menu-list">
        <li><Link to="rnn">RNN</Link></li>
        <li><Link to="cnn">CNN</Link></li>
      </ul>
    </aside>
  );
}