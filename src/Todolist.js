/*
 * @Author: MonicaWoo
 * @Date: 2020-04-16 08:56:28
 * @LastEditTime: 2020-04-17 17:02:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /wwwww/src/Todolist.js
 */
// 也可以通过fragment占位符来改变布局
import React, {Component, Fragment} from 'react';

class Todo extends Component {
    // 一个类一定有一个constructor
    constructor (props) {
        // 当使用组件的时候，此函数最优先执行
        super (props);
        //Todo组件继承了React里面的Component组件，
        //所以需要在创建Todo的时候,super指的是父类，也就是Component这个类
        //要调用父类的构造函数，调用一次，这是JS继承经常要做的事情。
        //一个接受props参数，一个调用super (props);方法。固定的写法
        //react定义数据，定义在状态里面。
        this.state = {         //定义的数据
            inputValue:'',     //输入框的内容
            list: [
                
            ]            //展示的内容
        }
    }
    render() {
        return (
            <Fragment>
                {/* tips: 在jsx中使用js的变量，得需要最外层使用花括号 */}
                <div >
                    <input 
                        // 原生绑定事件驼峰
                        onChange={this.handleInput.bind(this)}
                        value={this.state.inputValue}
                    />
                    <button onClick={this.handleButtonClick.bind(this)}>提交</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            // item 每一项对应的内容
                            // index 每一项对应的下标
                        return <li 
                                key={index} 
                                onClick={this.delValue.bind(this, index)}
                            >{item}</li>
                        })
                    }
                </ul>
            </Fragment>
        );  
    }
    handleInput (e) {
        // 想改变state的数据，必须调用this.setState({})
        // console.log(e.target)
        // 打印出dom节点
        // console.log(e.target.value)
        // this.state.inputValue = e.target.value
        // 错误，this指向问题，state is undefined
        // console.log(this)
        // undefined
        this.setState({
            inputValue: e.target.value
        })
    }
    handleButtonClick () {
        this.setState({
            list:[...this.state.list, this.state.inputValue],
            inputValue:''
        })
    }
    delValue (index) {
        // immutsble
        // state不允许我们做任何的改变
        const list = [...this.state.list]
        list.splice(index,1)
        console.log('ddd',index)
        this.setState({
            list: list
        })
    }
}
export default Todo;