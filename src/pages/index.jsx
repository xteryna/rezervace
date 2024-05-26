import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { BookingSummary } from './components/bookingsummary';

document.querySelector('#root').innerHTML = render(
  <div className="container">
    <BookingSummary/>
  </div>
);
