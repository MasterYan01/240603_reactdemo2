import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeTodo, selectTodos } from '../redux/todosSlice';
import { Container, Row, Col, Form, Button, ListGroup } from 'react-bootstrap';

const TodoPage = () => {
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);
  const [todo, setTodo] = useState('');

  const handleAddTodo = () => {
    if (todo.trim()) {
      dispatch(addTodo({
        id: Date.now(),
        text: todo,
      }));
      setTodo('');
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <h2>Todo List</h2>
          <Form.Group>
            <Form.Control 
              type="text" 
              placeholder="Enter new todo" 
              value={todo} 
              onChange={(e) => setTodo(e.target.value)} 
            />
          </Form.Group>
          <Button variant="primary" onClick={handleAddTodo}>
            Add Todo
          </Button>
          <ListGroup className="mt-3">
            {todos.map((todo) => (
              <ListGroup.Item key={todo.id} className="d-flex justify-content-between align-items-center">
                {todo.text}
                <Button variant="danger" onClick={() => dispatch(removeTodo(todo.id))}>
                  Delete
                </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default TodoPage;

