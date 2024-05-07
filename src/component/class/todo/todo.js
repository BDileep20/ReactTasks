import { Component } from "react";






class TodoComponent extends Component{
    // state={
    //    todos:["apple","banana"]
    // }
    constructor(){
        super() 
     this.state={
        
        todos:["apple","banana"]
     }
     
    }

    addTodoMethod=()=>{
        const newState=[...this.state.todos,"water melon"]
        this.setState({
            todos:newState
        })
    }
    clearAllTodos=()=>{
        const newState=[]
        this.setState({
            todos:newState
        })
    }
    deleteSelectedTodo=(del)=>{
        // alert(del)
        const filteredArray= this.state.todos.filter((item,index)=>index!==del)
        this.setState({
            todos:filteredArray
        })

    }
    updatedSelectedTodo=(ind)=>{
        //Update the selected item in the array ,we have index
       const  updatedArray=this.state.todos.map((eachFruit,index)=>{
           if(index===ind){
             return [..."kiwi "+"orange"]
           }
           else{
            return eachFruit
           }

       })
       this.setState({
        todos:updatedArray
       })
    }

    render(){
        return(
        <>
        
        <h2>TODO COMPONENT</h2>
        <button onClick={this.addTodoMethod}>add todo</button>
        <button onClick={this.clearAllTodos}>clearAllTodos todo</button>
        {
            this.state.todos.map((eachTodo,ind)=>{
                return(
                    <>
                    <h3>{ind+1} {eachTodo}</h3>
                    <button onClick={()=>this.deleteSelectedTodo(ind)}>Delete the todo</button>
                    <button onClick={()=>this.updatedSelectedTodo(ind)}>update theodo</button>
                   
                    </>
                )

            })
        }
        
        </>
        )
    }
}
export default TodoComponent