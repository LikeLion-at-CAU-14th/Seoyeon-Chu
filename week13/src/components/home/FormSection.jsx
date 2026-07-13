import React, { useContext, useState } from 'react'
import { ThemeColorContext } from '../../context/context';

import { useNavigate } from 'react-router-dom';
import Form from './Form';
import { Card, Button, Title, Wrapper } from '../layout/common';
import { useUserInfo } from '../../context/UserInfoContext';

const FormSection = () => {
    const mode = useContext(ThemeColorContext);
    const navigate = useNavigate();
    const { dispatch } = useUserInfo();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        birth: '',
        gender: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = () => {
        dispatch({
            type: 'SET_USER_INFO',
            payload: formData,
        });

        navigate('/mypage');
    }

  return (
    <Wrapper>
        <Card>
            <Title>회원정보 입력</Title>
            <Form type='text' label='이름' name='name' value={formData.name} onChange={handleChange}/>
            <Form type='email' label='이메일' name='email' value={formData.email} onChange={handleChange}/>
            <Form type='date' label='생년월일' name='birth' value={formData.birth} onChange={handleChange}/>
            <Form label='성별' name='gender' value={formData.gender} onChange={handleChange}/>

            <Button
                mode={mode.button}
                onClick={handleSubmit}
            >
                제출하기
            </Button>
        </Card>
    </Wrapper>
  )
}

export default FormSection