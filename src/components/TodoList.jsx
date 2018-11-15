import React from 'react';
import PropTypes from 'prop-types';

import { ListGroup, } from 'reactstrap';
import TodoContainer from 'containers/TodoContainer';

export default function TodoList(props) {
    const { todos, loading, onDelete, onCheck, onTodoTitleEdit } = props;
    
    return (          
        <ListGroup>     
            { !loading && todos.length ?
                todos.map((todo, idx) => 
                    <TodoContainer 
                        key={todo.id} 
                        {...todo}
                        onDelete={onDelete}
                        onCheck={onCheck}
                        onTodoTitleEdit={onTodoTitleEdit} 
                    /> 
                )
                :
                <div style={{ textAlign: 'center', }}>...loading</div>
            }
        </ListGroup>   
    );
};

TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    onDelete: PropTypes.func.isRequired,
    onCheck: PropTypes.func.isRequired,
    onTodoTitleEdit: PropTypes.func.isRequired,
};