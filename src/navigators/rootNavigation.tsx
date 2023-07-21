import {createRef} from 'react';

export const navigationRef = createRef();

export const navigate = (name: string, params: {data: string}) =>
  navigationRef.current?.navigate(name, params);

export const goBack = () => navigationRef.current?.goBack();
