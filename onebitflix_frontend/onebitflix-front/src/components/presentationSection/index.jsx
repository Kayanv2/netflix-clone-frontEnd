import styles from "./styles.module.scss";
import { Container, Row, Col, Button } from "reactstrap";
import Link from "next/link";

const PresentationSection = function () {
  return (
    <>
      <Container>
        <Row>
          <Col md>
            <p className={styles.subTitle}>ACESSO ILIMITADO</p>
            <p className={styles.title}>
              Tenha acesso aos melhores <br /> tutoriais de Programação.
            </p>
            <p className={styles.description}>
              Estude de onde estiver, a qualquer momento, e continue <br></br>
              evoluindo como programador.
            </p>
            <Link href="/register">
              <Button outline className={styles.btnCta}>
                Acesse agora{" "}
                <img
                  src="/buttonPlay.svg"
                  alt="ButtonImg"
                  className={styles.btnImg}
                ></img>
              </Button>
            </Link>
          </Col>
          <Col md>
            <img
              src="/homeNoAuth/imgPresentation.png"
              alt="imgIndex"
              className={styles.imgPresentation}
            ></img>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PresentationSection;
