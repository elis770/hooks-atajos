import React from 'react';
import { CounterApp } from './components/CounterApp';
import { FormsApp } from './components/FormsApp';
import { FetchApp } from './components/FetchApp';

export const HooksApp = () => {
  return (
    <>
      <h1>aplicacion de hooks</h1>
      <hr />
      <CounterApp/>
      <hr />
      <FormsApp/>
      <hr/>
      <FetchApp/>
    </>
  );
};
