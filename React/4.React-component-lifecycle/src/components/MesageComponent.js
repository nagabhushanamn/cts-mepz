import React, {Component} from 'react'

class MesageComponent extends Component {

    constructor(props) {
        super(props);
        console.log('MesageComponent - constructor()');
        //console.dir(props);
        this.state = {};
    }

    componentWillMount() {
        console.log('MesageComponent - componentWillMount()');
    }
    componentDidMount() {
        console.log('MesageComponent - componentDidMount()');
        // N/W request
        var resp = "Hello....";
        //this.setState({message:resp});
    }
    componentWillReceiveProps(nextProps) {
        console.log('MesageComponent - componentWillReceiveProps()');
        //console.dir(this.props); console.dir(nextProps);
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('MesageComponent - shouldComponentUpdate()');
        if (this.props.prop2 === nextProps.prop2) {
            return false;
        }
        return true;
    }
    componentWillUpdate(nextProps, nextState) {
        console.log('MesageComponent - componentWillUpdate()');
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('MesageComponent - componentDidUpdate()');
    }
    componentWillUnmount() {
        console.log('MesageComponent - componentWillUnmount()');
    }

    render() {
        console.log('MesageComponent - render()');
        //return null;
        return (
            <div className="well">
                <span className="badge">{this.props.prop1}</span>
                <span className="badge">{this.props.prop2}</span>
            </div>
        );
    }

}

export default MesageComponent