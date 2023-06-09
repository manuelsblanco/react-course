import './task.css';

export function TaskCard(ready){
    return <div className='card'>
        <h1>Mi primer tarea</h1>
        <span style={ ready ? {background:'green'} : {background: 'red'}}>
        {
            ready === true ? 'Tarea realizada' : 'Tarea pendiente'            
        }
        </span>
    </div>
}