import React,{Component} from'react';


class TodoList extends Component{


    constructor (){
        super();
        this.state= {
            Input: '',
            Items: []
        }

    }
    onChange(event){
        this.setState ({

            Input: event.target.value
        },()=> console.log(this.state.Input))

    }

    addTodo(event){
        event.preventDefault();
        this.setState({
            Items: [...this.state.Items, this.state.Input],
            Input: ''

    },()=> console.log(this.state.Items));
    }

    deleteTodo(event){
        event.preventDefault();

        const array = this.state.Items
        const index = array.indexOf(event.target.value)
        array.splice(index,1)
        this.setState({
            Items: array

        });
    }

    renderTodos() {
        return this.state.Items.map((item) => {
            return (
                <div  key={item}>
                    {item} | <button onClick={this.deleteTodo.bind(this)} >X</button>
                </div>
            );
        });
    }


    render(){
        return(
            <div>
                <h1 align="center"> MA TODO LIST</h1>
                <form className="form-row align-items-center">

                <input
                    class="form-control"
                    type="text"
                    value={this.state.Input}
                    placeholder="Write here"
                    onChange={this.onChange.bind(this)}
                />


                <button
                    class="btn btn-success"
                    onClick={ this.addTodo.bind(this)}
                >Ajouter</button>
                </form>

                <div>
                    {this.renderTodos()}
                </div>





            </div>


        );

    }

}
export default TodoList;