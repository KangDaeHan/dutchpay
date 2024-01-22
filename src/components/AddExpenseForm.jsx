import { useState } from 'react';
import {Button, Form } from 'react-bootstrap';
import { useRecoilValue } from 'recoil';
import { groupMembersState } from './../state/groupMembers';



export const AddExpenseForm = () => {
  const members = useRecoilValue(groupMembersState);
  const today = new Date();
  const [date, setDate] = useState([today.getFullYear(), today.getMonth() + 1, today.getDate()].join('-'));
  const [amount, setAmount] = useState(0);
  const [payer, setPayer] = useState(null);
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      // todo 처리
    } else {
      // todo : state 저장
    }
    setValidated(true);
  }

  return (
    <div>
      <h1>form</h1>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <h3>1. 비용 추가</h3>
        <Form.Group>
          <Form.Control 
            type='date'
            name='expenseDate'
            placeholder='결제한 날짜를 선택해 주세요'
          />
        </Form.Group>
        <Form.Group>
          <Form.Control 
            type='text'
            required
            name='expenseDescription'
            placeholder='비용에 대한 설명을 입력해 주세요'
          />
          <Form.Control.Feedback type='invalid'>비용 내용을 입력해 주셔야 합니다.</Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Control.Feedback
            type='number'
            required
            name='expenseAmount'
            placeholder='비용은 얼마였나요?'
          />
          <Form.Control.Feedback type='invalid'>금액을 입력해 주셔야 합니다.</Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Select
            required
            name='expensePayer'
            defaultValue={''}
          >
            <option disabled value={''}>누가 결제 했나요?</option>
            {/* <option>영수</option>
            <option>철수</option> */}
            {members.map(member => 
              <option key={member} value={member}>{member}</option>
            )}
          </Form.Select>
          <Form.Control.Feedback type='invalid'>결제자를 선택해 주셔야 합니다.</Form.Control.Feedback>
        </Form.Group>
        <Button type='submit'>추가하기</Button> 
      </Form>
    </div>
  )
}