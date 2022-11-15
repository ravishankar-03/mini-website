import React from "react";
import { Container } from "react-bootstrap";
const Footer = () => {
  return (
    <React.Fragment>
      <footer className="bg-light border-top py-3 fixed-bottom">
        <Container>
          <div className="text-center d-flex justify-content-between">
            <p>&copy; CodeRavi</p>
            <p>
              <a
                className="p-1"
                href="https://twitter.com/ravishankar1103"
                target="blank"
              >
                <img
                  align="center"
                  src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg"
                  alt="ravishankar1103"
                  height="30"
                  width="40"
                />
              </a>
              <a
                className="p-1"
                href="https://linkedin.com/in/www.linkedin.com/in/ravishankar-kushwah-042230223"
                target="blank"
              >
                <img
                  align="center"
                  src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg"
                  alt="www.linkedin.com/in/ravishankar-kushwah-042230223"
                  height="30"
                  width="40"
                />
              </a>
              <a
                className="p-1"
                href="https://instagram.com/coderavii"
                target="blank"
              >
                <img
                  align="center"
                  src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg"
                  alt="coderavii"
                  height="30"
                  width="40"
                />
              </a>
              <a
                className="p-1"
                href="https://www.youtube.com/c/coderavi"
                target="blank"
              >
                <img
                  align="center"
                  src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/youtube.svg"
                  alt="coderavi"
                  height="30"
                  width="40"
                />
              </a>
            </p>
          </div>
        </Container>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
