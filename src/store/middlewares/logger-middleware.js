import { createListenerMiddleware, isAllOf } from "@reduxjs/toolkit";

export const loggerMiddleware = createListenerMiddleware();

loggerMiddleware.startListening({
  //   predicate: (action) => {
  //     return action.type === "expenseSlice/addExpense";
  //   },
  matcher: isAllOf(),
  effect: async (action, listenerAPI) => {
    console.log(action);
    console.log(listenerAPI.getState());
  },
});
