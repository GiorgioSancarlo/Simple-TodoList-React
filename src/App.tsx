import React, { useContext, useState } from "react";
import { ContextApp } from "./context/Context";
import {
  Box,
  Button,
  Checkbox,
  Container,
  Fab,
  List,
  ListItem,
  Paper,
  ThemeProvider,
} from "@mui/material";

function App() {
  const {
    todos,
    setTodos,
    onClickAddTodo,
    onClickDeleteTodo,
    onClickCompleteTodo,
  } = useContext(ContextApp);

  const [inContent, setInContent] = useState("");

  return (
    <Paper elevation={4} square={false}>
      <Container maxWidth="sm">
        <Box my={2} display="flex" alignItems="center" gap={2} p={2}>
          <input
            type="text"
            value={inContent}
            onChange={(e) => setInContent(e.target.value)}
          />
          <Fab
            onClick={() => {
              onClickAddTodo(inContent);
              setInContent("");
            }}
            color="primary"
            aria-label="add"
            size="medium"
          >
            +
          </Fab>{" "}
        </Box>

        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          {todos.map((todo) => (
            <Box>
              <ListItem
                style={{ color: todo.isCompleted === true ? "red" : "black" }}
                key={todo.id}
              >
                {todo.content}
              </ListItem>
              <Button
                onClick={() => {
                  onClickDeleteTodo(todo.id);
                }}
                variant="contained"
              >
                Cancella
              </Button>
              <Checkbox
                onClick={() => {
                  onClickCompleteTodo(todo.id);
                }}
              ></Checkbox>
            </Box>
          ))}
        </List>
      </Container>
    </Paper>
  );
}

export default App;
