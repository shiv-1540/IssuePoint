import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CreateUserComponent from './CreateUserComponent';

const CreateUserWrapper = () => {
    const navigate = useNavigate();
    const params = useParams();

    return <CreateUserComponent navigate={navigate} params={params} />;
};

export default CreateUserWrapper;
