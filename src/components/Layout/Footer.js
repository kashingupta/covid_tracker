import React from "react";
import Counter from "../common/Counter";
function Footer() {
  const d = new Date();
  return (
    <>
      <footer className='page-footer font-small teal pt-4 footer'>
        <div className='container-fluid text-center text-md-left'>
          <div className='row'>
            <div className='col-md-6 col-sm-6 mt-md-0 mt-3'>
              <address className='text-white'>
                <h2 className='text-white'>Contact ME!</h2>
                Developed by:
                <a
                  href='https://www.linkedin.com/in/kashin-gupta-3252a51a1/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Kashin Gupta
                </a>
                .<br />
                Reach me at:
                <br />
                Thapar University
                <br />
                Patiala
                <br />
                India
              </address>
            </div>

            <hr className='clearfix w-100 d-md-none pb-3' />

            <div className='col-md-6 col-sm-6 mb-md-0 mb-3'>
            </div>
          </div>
        </div>

        <div className='footer-copyright text-center py-3 cpright text-white'>
          <div className='row'>
            <div className='col-md-10 col-6'>
              <div className='cpright-span'>
                © {d.getFullYear()} Copyright:
                <a
                  href='https://github.com/kashingupta'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Kashin Gupta
                </a>
              </div>
            </div>
            <div className='col-md-2 col-6'>
              <div className='page-hit'>
                <Counter />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
