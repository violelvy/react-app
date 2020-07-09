/*
 * @Author: your name
 * @Date: 2020-04-15 22:13:10
 * @LastEditTime: 2020-07-08 17:53:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-app/src/index.js
 */
import React from 'react';
import ReactDOM from 'react-dom';
// all in js
// import App from './App';
import Todolist from './Todolist'

ReactDOM.render(
  <React.StrictMode>
    <Todolist />
  </React.StrictMode>,
  document.getElementById('root')
);
