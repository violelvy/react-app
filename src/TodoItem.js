/*
 * @Author: your name
 * @Date: 2020-04-18 21:58:04
 * @LastEditTime: 2020-04-21 09:21:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /wwwww/src/TodoItem.js
 */
import React, {Component} from 'react'
class TodoItem extends Component {
    constructor(props) {
        super (props);
        this.handleClick = this.handleClick.bind(this)
    }
    render() {
    return(
        
        <div onClick={this.handleClick}>{this.props.content}</div>
        // 子组件通过this.props.属性名称来接收父组件传递的值
        
    )
    }
    handleClick() {
        this.props.handleDelete(this.props.index)
    }
    // 子组件调用父组件方法修改父组件内容
    
}
export default TodoItem