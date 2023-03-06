import { Col, Row } from "react-bootstrap";
import { FadeLoader } from "react-spinners";

interface LoadingProps {
    isLoading: boolean;
    message?: string;
}

export const LoadingSpinner: React.FC<LoadingProps> = ({isLoading, message}) => {

    return (

        <Row className="justify-content-center">
        {isLoading && (
          <Col className="loadingCard text-center p-3"  xs="auto" md="auto" style={{ position: "fixed", top: "45%", left: "50%", transform: "translate(-50%, -50%)"}}>
              <FadeLoader className="spinner" color={"#425563"} loading={isLoading}  style={{ position: "fixed", top: "55%", left: "50%", transform: "translate(-50%, -50%)"}}/>
            {message && <h3>{message}</h3>}
          </Col>
        )}
      </Row>
    );
};
            