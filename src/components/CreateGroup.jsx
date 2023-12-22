import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { Button, Container, Form, Row } from "react-bootstrap";
import { CenteredOverlayForm } from "./CenteredOverlayForm"
import { groupNameState } from '../state/groupName';

export const CreateGroup = () => {
  const setGroupName = useSetRecoilState(groupNameState);
  const [valiGroupName, setValiGroupName] = useState(false);
  const [validated, setValidated] = useState(false);

  const handelSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity()) {
      setValiGroupName(true);
    } else {
      event.stopPropagation();
      setValiGroupName(false);
    }

    setValidated(true);

  }

  return (
    <CenteredOverlayForm>
      <Container>
        <Form noValidate validated={validated} onSubmit={handelSubmit}>
          <Row>
            <h2>더치 페이 할 그룹 이름 정하기</h2>
          </Row>
          <Row>
            <Form.Group controlId="validationGroupName">
              <Form.Control 
                type="text"
                required
                placeholder="더치페이 할 항목"
                onChange={(e) => setGroupName(e.target.value)}
              />
              <Form.Control.Feedback 
                type="invalid"
                data-valid={valiGroupName}
                >
                그룹 이름을 입력해주세요.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row>
            <Button type="submit">저장</Button>
          </Row>
        </Form>
      </Container>
    </CenteredOverlayForm>
  )
}