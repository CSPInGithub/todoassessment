//@ts-nocheck
import { test, expect } from '../fixtures/todoFixture.js';

import { todoItems } from '../test-data/todotestdata.js'

test('TodoMVC - Verify adding a todo, marking as completed, unmarking, and clearing it', async ({ todoHelper }) => {
  const newTodo = 'Buy Milk';

  // Open the TodoMVC app
  await todoHelper.goto();

  // Add a new todo
  await todoHelper.addTodo(newTodo);

  // Verify the new todo appears in the "All" tab
  const visibleTodos = await todoHelper.getVisibleTodosText();
  expect(visibleTodos).toHaveLength(2);
  expect(visibleTodos).toContain(newTodo);

  // Mark the todo as completed
  await todoHelper.markTodoAsCompleted(newTodo);

  // Verify the todo appears in the "Completed" tab
  const completedTodos = await todoHelper.getCompletedTodosText();
  expect(completedTodos).toContain(newTodo);

  // Unmark the completed todo (mark it as active again)
  await todoHelper.markTodoAsActive(newTodo);

  // Verify the todo is now in the "Active" tab
  const activeTodos = await todoHelper.getActiveTodosText();
  expect(activeTodos).toContain(newTodo);

  // Mark it as completed again using the "Toggle All" button
  await todoHelper.markTodoAsCompletedUsingToggleAll(newTodo);

  // Verify it appears in the "Completed" tab again
  const toggledCompletedTodos = await todoHelper.getCompletedTodosText();
  expect(toggledCompletedTodos).toContain(newTodo);

  // Clear all completed todos
  await todoHelper.clearCompletedTodos();

  // Verify all todos are removed
  const remainingTodos = await todoHelper.getVisibleTodosText();
  expect(remainingTodos).toEqual([]); // Expect no todos left
});



test.describe('Todo Application - Duplicate Todo Test', () => {

  test.fail(true, 'Currently, the app allows adding duplicate todos.'); // Expected failure

  test('TodoMVC - Verify that duplicate todos cannot be added', async ({ todoHelper }) => {
    await todoHelper.goto();

    const todoText = 'Buy Groceries';

    // Add the same todo twice
    await todoHelper.addTodo(todoText);
    await todoHelper.addTodo(todoText);

    // Fetch the visible todos
    const visibleTodos = await todoHelper.getVisibleTodosText();

    // Expect only one occurrence of the todo (Should fail if duplicates are allowed)
    expect(visibleTodos).toEqual([todoText]);
  });

});

test.describe('TodoMVC - Multiple Todos (Data Parameterization)', () => {
  test('should add multiple todo items', async ({ todoHelper }) => {

    // Open the TodoMVC app
    await todoHelper.goto();

    // Add multiple todos dynamically
    for (const todo of todoItems) {
      // Add a new todo
      await todoHelper.addTodo(todo);
    }

    // Verify that all todos are added
    const todoList = await todoHelper.getVisibleTodosText();

    expect(todoList.length).toBe(todoItems.length); // Compare array length instead

    // Validate each todo text
    expect(todoList).toEqual(todoItems);
  });
});
