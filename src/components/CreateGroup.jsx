import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { Form } from "react-bootstrap";
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
    <CenteredOverlayForm
      title= "더치 페이 할 그룹 이름 정하기"
      validated= {validated}
      handelSubmit= {handelSubmit}
    >
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
    </CenteredOverlayForm>
  )
}