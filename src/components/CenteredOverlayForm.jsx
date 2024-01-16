import { Button, Container, Form, Row } from "react-bootstrap";

export const CenteredOverlayForm = ({title, children, validated, handelSubmit}) => {
  return (
    <div>
      <h1>Dutch Pay</h1>

      <Container>
        <Form noValidate validated={validated} onSubmit={handelSubmit}>
          <Row>
            {title}
          </Row>
          <Row>
            {children}
          </Row>
          <Row>
            <Button type="submit">저장</Button>
          </Row>
        </Form>
      </Container>
    </div>
  )
}