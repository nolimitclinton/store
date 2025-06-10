# 🔗 nolimitstore

A lightweight, Redux-like global state manager for **React** and **React Native** apps.  
Built with **TypeScript**, powered by **hooks**, and optimized with `useSyncExternalStore`.

---

## 🚀 Features

- ✅ No boilerplate — create a store in one line  
- 🎯 Select only the state you need with `useStore`  
- 🔁 Built-in `useDispatch` for updates  
- 📦 React + React Native compatible  
- 🧠 Written in TypeScript with full type safety  
- 🪶 Tiny and fast  

---

## 📦 Installation

```bash
npm install nolimitstore
```
## ⚡ Quick Start

### Step 1: Create your store

```ts
import { createStore } from 'nolimitstore';

type AppState = {
  name: string;
  age: number;
};

const store = createStore<AppState>(
  { name: 'Clinton', age: 0 },
  (state, action) => {
    switch (action.type) {
      case 'incremented_age':
        return { ...state, age: state.age + 1 };
      case 'changed_name':
        return { ...state, name: action.nextName };
      default:
        throw new Error('Unknown action: ' + action.type);
    }
  }
);
```

### Step 2: Wrap your app in StoreProvider
```ts
import { StoreProvider } from 'nolimitstore';

function App() {
  return (
    <StoreProvider store={store}>
      <YourAppComponents />
    </StoreProvider>
  );
}
```
### Step 3: Use in any component
```tsx
import { useStore, useDispatch } from 'nolimitstore';

function Profile() {
  const name = useStore(s => s.name);
  const age = useStore(s => s.age);
  const dispatch = useDispatch();

  return (
    <>
      <Text>{name}</Text>
      <Text>{age}</Text>
      <Button onPress={() => dispatch({ type: 'incremented_age' })} title="Add Age" />
      <Button onPress={() => dispatch({ type: 'changed_name', nextName: 'Essence' })} title="Change Name" />
    </>
  );
}
```
## 🔍 API Reference


createStore(initialState, reducer)

Creates the global store.

<StoreProvider store={store}>

Wraps your app to provide context.

useStore(selector)

Access part of the state with a selector.

useDispatch()

Returns the dispatch function to send actions.



## 🛠 Tech Stack
	•	React 18+
	•	useSyncExternalStore
	•	TypeScript
	•	Context API (no external dependencies)



## 📄 License

MIT License



## 👩🏾‍💻 Author

Created by Clinton Onuoha