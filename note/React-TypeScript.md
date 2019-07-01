# React + JS

1. 某个组件有哪些属性需要传递
2. 某个属性需要应该传递什么类型
3. 传递事件时，有哪些参数
4. 错误发生在运行时
   > 可以使用 propType 来约束属性的类型，但是在发生错误在运行时

# React + TS 可以解决

> 静态

```TSX
// React 函数组件
interface IProps {
    num:number
}
const App:React.FC<IProps> = (props)=>{
    return (
        <div></div>
    )
}

// React 类组件
interface IProps {
    num:number
}
interface IState{
    num:number
}
const App extends React.Component<IProps,IState>{
    state:IState{
        num:number
    }

    handChange(){
        this.setState({
            num:0
        })
    }
    render(){
        return (
            <div onClick={this.handChange}>Hello World</div>
        )
    }
}
```
