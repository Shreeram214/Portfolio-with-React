
function Footer(props) {
  return (
    <>
      <footer className={`footer-07 row justify-content-center navbar-${props.mode} bg-${props.mode}`}>
        <div className="container">
          <div className="row justify-content-center">
            <div className={`col-md-12 text-center text-${props.mode === 'light'?'dark' :'light'}`}>
              <h2 className="footer-heading my-5">
                <a href="/" className={`logo text-${props.mode === 'light'?'dark' :'light'}`}>
                  Shreeam
                </a>
              </h2>
              <p className="menu">
                <a href="/" className={`text-${props.mode === 'light'?'dark' :'light'}`}>Home</a>
                <a href="/" className={`text-${props.mode === 'light'?'dark' :'light'}`}>Agent</a>
                <a href="/" className={`text-${props.mode === 'light'?'dark' :'light'}`}>About</a>
                <a href="/" className={`text-${props.mode === 'light'?'dark' :'light'}`}>Listing</a>
                <a href="/" className={`text-${props.mode === 'light'?'dark' :'light'}`}>Blog</a>
                <a href="/" className={`text-${props.mode === 'light'?'dark' :'light'}`}>Contact</a>
              </p>
              <ul className="ftco-footer-social p-0">
                <li className="ftco-animate">
                  <a
                    href="/"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Twitter"
                  >
                    <span className="ion-logo-twitter">
                    <i className="fa-brands fa-twitter"></i>
                    </span>
                  </a>
                </li>
                <li className="ftco-animate">
                  <a
                    href="/"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Facebook"
                  >
                    <span className="ion-logo-facebook">
                    <i className="fa-brands fa-square-facebook"></i>
                    </span>
                  </a>
                </li>
                <li className="ftco-animate">
                  <a
                    href="/"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Instagram"
                  >
                    <span className="ion-logo-instagram">
                    <i className="fa-brands fa-instagram"></i>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-12 text-center">
              <p className={`copyright text-${props.mode === 'light'?'dark' :'light'}`}>
                Copyright &copy;{new Date().getFullYear()} All rights reserved by&nbsp;  
                <a href="/" target="_blank">
                 Colorlib.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
