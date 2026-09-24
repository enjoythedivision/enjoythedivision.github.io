import "./Footer.scss";
export default function Footer() {
  return <footer className="container site-footer">
    <div className="footer"><span>© {new Date().getFullYear()}</span><a href="https://www.youtube.com/watch?v=j8APlgvLV6o" target="_blank" rel="noreferrer">On repeat?</a></div>
  </footer>;
}

