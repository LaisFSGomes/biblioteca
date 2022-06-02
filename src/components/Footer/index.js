import './style.css';
const Footer = (props) => {
  return(
    <section className="footer">
      <p>
      {props.info}
      </p>
    </ section>
  );
}

export default Footer;