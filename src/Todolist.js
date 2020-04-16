/*
 * @Author: your name
 * @Date: 2020-04-16 08:56:28
 * @LastEditTime: 2020-04-16 09:21:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /wwwww/src/Todolist.js
 */
// 也可以通过fragment占位符来改变布局
import React, {Fragment} from 'react';
function Todo() {
    return (
        <Fragment>
            <div >
                <input />
                <button>提交</button>
            </div>
            <ul>
                <li>learing eng</li>
                <li>learing react</li>
            </ul>
        </Fragment>
    );
}

export default Todo;