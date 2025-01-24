import contentData from "../content.json";

/* ==========================================
*   JSON Template Example
*  ==========================================

  "footer": {
    "line_one": "Built & designed by",
    "copyright_line": "All rights reserved."
  },

  * "line_one": "First line in footer message"
  * "copyright_line": "Second line in footer message"
   
  NOTE: line_one will use the first, middle and last name declared in the general section of json file. If you dont have a middle name you can leave it as a blank ""

*/

const Footer = () => {
  const general = contentData.general;

  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="copyright-box">
              <p className="copyright">
                {contentData.footer.line_one}{" "}
                <a href="https://github.com/romeodetimmerman">
                  <strong>
                    Romeo De Timmerman
                  </strong>
                </a>
                .
              </p>
              <div className="credits">
                {contentData.footer.copyright_line} &copy;
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
