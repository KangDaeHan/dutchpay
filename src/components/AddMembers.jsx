import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { CenteredOverlayForm } from "./CenteredOverlayForm"
import { InputTags } from "react-bootstrap-tagsinput";
import { groupMembersState } from "../state/groupMembers";
import { groupNameState } from "../state/groupName";

export const AddMembers = () => {
  const [groupMembers, setGroupMembers] = useRecoilState(groupMembersState);
  const groupName = useRecoilValue(groupNameState);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [validated, setValidated] = useState(false);

  const handelSubmit = (event) => {
    event.preventDefault();

    setFormSubmitted(true);
    setValidated(true);
  }

  const header = `${groupName} 더치 페이 할 그룹 이름 정하기`

  return (
    <CenteredOverlayForm
      title={header}
      validated={validated}
      handelSubmit={handelSubmit}
    >
      <InputTags
        placeholder="이름 넣기"
        onTags={(value) => setGroupMembers(value.values)}
      />
      {formSubmitted && groupMembers.length === 0 && (
        <span>그룹 맴버들의 이름을 입력해 주세요.</span>
      )}
    </CenteredOverlayForm>
  )
}