import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { Button, Container, Form, Row } from "react-bootstrap";
import { CenteredOverlayForm } from "./CenteredOverlayForm"
import { InputTags } from "react-bootstrap-tagsinput";
import { groupMembersState } from "../state/groupMembers";
import { groupNameState } from "../state/groupName";

export const AddMembers = () => {
  const [groupMembers, setGroupMembers] = useRecoilState(groupMembersState);
  const groupName = useRecoilValue(groupNameState);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handelSubmit = (event) => {
    event.preventDefault();

    setFormSubmitted(true);
  }

  return (
    <CenteredOverlayForm>
      <Container>
        <Form noValidate onSubmit={handelSubmit}>
          <Row>
            <h2>{groupName} 더치 페이 할 그룹 이름 정하기</h2>
          </Row>
          <Row>
            <InputTags
              placeholder="이름 넣기"
              onTags={(value) => setGroupMembers(value.values)}
            />
            {formSubmitted && groupMembers.length === 0 && (
              <span>그룹 맴버들의 이름을 입력해 주세요.</span>
            )}
          </Row>
          <Row>
            <Button type="submit">저장</Button>
          </Row>
        </Form>
      </Container>
    </CenteredOverlayForm>
  )
}