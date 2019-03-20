   /*方法一
        function tick() {
            const element = (
                <div>
                    <h1>This is a test!</h1>
                    <h2>现在是：{new Date().toLocaleTimeString()}</h2>
                </div>
            );
            ReactDOM.render(
                element,
                document.getElementById('example')
            );
        }
        */

        /*方法二 
        function Clock(props) {
            return (
                <div>
                    <h1>This is a test!</h1>
                    <h2>现在时间是：{props.date.toLocaleTimeString()}</h2>
                </div> 
            );
        }
        function tick(){
            ReactDOM.render(
                <Clock date={new Date()} />,
                document.getElementById('example')
            );
        }
        */
        //方法三
        /*
        class Clock extends React.Component {
            render() {
                return (
                    <div>
                        <h1>This is a test!</h1>
                        <h2>现在时间是：{this.props.date.toLocaleTimeString()}</h2>
                    </div> 
                );
            }
        }
        function tick(){
            ReactDOM.render(
                <Clock date={new Date()} />,
                document.getElementById('example')
            );
        }
        setInterval(tick, 1000);
        */
       /*
        var i = 0;
        var arr = [
            <p key="a1">登山</p>,
            <p key="a2">跑步</p>
            
        ];
        var myStyle = {
            fontSize: 20,
            color: '#ff0000'
        };
        const element = (
        <div className="box">
            <h1 style={myStyle}>这里是一个标题</h1>
            <p>这里是段落文字{i++}</p>
            <p>这里是段落文字{i == 1 ? '第二' : '其他'}</p>
            <div>{arr}</div>
        </div>   
    );
    ReactDOM.render(
        element,
        document.getElementById("example")
    );
    */
//组件嵌套实例
/*
function Name(props) {
    return <h1>网站名称：{props.name}</h1>;
}
function Url(props) {
    return <h1>网站地址：{props.url}</h1>;
}
function NickName(props) {
    return <h1>网站别名：{props.nickname}</h1>;
}
function ShowMessage() {
    return (
        <div>
            <Name name="上海宽域" />
            <Url url="http://www.keymond.com" />
            <NickName nickname="宽域网络" />
        </div>
    );
}
ReactDOM.render(
    <ShowMessage />,
    document.getElementById("example")
);
*/

//组件state(状态)
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    tick() {
        this.setState({
            date: new Date()
        });
    }
    render() {
        return (
            <div>
                <h1>上海宽域</h1>
                <h2>现在时间是：{this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}
ReactDOM.render(
    <Clock />,
    document.getElementById("example")
);