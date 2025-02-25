// @ts-nocheck
import { test as base } from '@playwright/test';
import TodoHelper from '../functional-helper/todoHelper.js';

export const test = base.extend({
    todoHelper: async ({ page }, use) => {
        const helper = new TodoHelper(page); // Create an instance of TodoHelper
        await use(helper); // Provide helper to tests
    },
});

export { expect } from '@playwright/test';