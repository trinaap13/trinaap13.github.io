import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { useEffect, useState } from "react";
import meImg from "../assets/images/KP_noBackground.png";

export const Banner = () => {
  /* Index of currently displayed word */
  const [loopNum, setLoopNum] = useState<number>(0);

  /* is the word being typed out or deleted? */
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const toRotate = ["Welcome", "よこうそ", "Bienvenido", "Nnabata", "欢迎"];
  const [text, setText] =
    useState<string>(""); /* Portion of word being displayed */

  /* transition time b/w each word */
  const period: number = 2000;

  /* How fast a letter appears after one is typed */
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  useEffect(() => {
    let ticks = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticks);
    };
  }, [delta, text, tick]);

  return (
    <>
      <section className="banner" id="home">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={6} xl={7}>
              <span className="tagline">Welcome to my portfolio</span>
              <h1>
                {`HELLO `}
                <span className="wrap">{text}</span>
              </h1>
              <p>BACKGROUND ABOUT MYSELF</p>
              <button onClick={() => console.log("HIHI")}>
                Let's connect <ArrowRightCircle size={25} />
              </button>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <img src={meImg} alt="Replace w/ photo of me; edit animation" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
