//@ts-nocheck
class TodoHelper {
  constructor(page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('https://todomvc.com/examples/react/dist/');
  }

  async addTodo(todo) {
    await this.page.locator('.new-todo').fill(todo);
    await this.page.locator('.new-todo').press('Enter');
  }

  async markTodoAsCompleted(todo) {
    const todoItem = this.page.locator(`.todo-list li:has-text("${todo}")`);
    await todoItem.locator('.toggle').click(); // Click the radiobutton to mark as completed
  }

  async markTodoAsCompletedUsingToggleAll() {
    await this.page.locator('#toggle-all').click() // Click all to mark as completed
  }

  async verifyTodoInCompletedTab(todo) {
    await this.page.locator('a[href="#/completed"]').click(); // Navigate to the "Completed" tab
    return this.page.locator('.todo-list li'); // Return locator for assertions
  }

  async getVisibleTodosText() {
    const todoItems = await this.page.locator('.todo-list li').all(); // Get all matching elements
    let todoTexts = [];

    for (let i = 0; i < todoItems.length; i++) {
      const text = await todoItems[i].textContent(); // Extract text content
      todoTexts.push(text);
    }

    return todoTexts;
  }
  async getCompletedTodosText() {
    await this.page.locator('[href="#/completed"]').click(); // Navigate to "Completed" tab
    const todoItems = await this.page.locator('.todo-list li.completed').all();

    let completedTodos = [];
    for (let i = 0; i < todoItems.length; i++) {
      const text = await todoItems[i].textContent();
      completedTodos.push(text.trim()); // Trim spaces to avoid assertion issues
    }
    return completedTodos;
  }

  async markTodoAsActive(todo) {
    const completedTodo = this.page.locator(`.todo-list li.completed:has-text("${todo}")`);
    await completedTodo.locator('.toggle').click(); // Uncheck the checkbox
  }

  async getActiveTodosText(page) {
    await this.page.locator('[href="#/active"]').click(); // Navigate to "Active" tab
    const todoItems = await this.page.locator('.todo-list li').all();//returns an array of Locator objects, not the actual text content.

    let activeTodos = [];
    for (let i = 0; i < todoItems.length; i++) {
      const text = await todoItems[i].textContent();//return actual text
      activeTodos.push(text.trim()); // Trim spaces to avoid assertion issues
    }
    return activeTodos;
  }
  // Clear all completed todos
  async clearCompletedTodos() {
    await this.page.locator('.clear-completed').click();
  }

}

export default TodoHelper;
