import NavBar from '../components/NavBar.jsx'
import NavItem from '../components/NavItem.jsx'

test('NavBar', () => {
  expect(
    <NavBar></NavBar>
  ).toBe(
    <nav class="navbar">
      <NavItem text="Events" url={window.location.href + 'events/'}></NavItem>
      <NavItem text="Partners" url={window.location.href + 'partners/'}></NavItem>
      <NavItem text="Subscribe" url={window.location.href + 'subscribe/'}></NavItem>
      <NavItem text="Contact Us" url={window.location.href + 'contact-us/'}></NavItem>
    </nav>
  );
});