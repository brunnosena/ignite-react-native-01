import React, { useState } from 'react';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    if (newTaskTitle !== undefined && newTaskTitle !== '') {
      const newTask = {
        id: new Date().getTime(),
        title: newTaskTitle,
        done: false,
      };

      setTasks(oldState => [...oldState, newTask]);
    }
  }

  function handleMarkTaskAsDone(id: number) {
    let myTasks = tasks.filter(task => task.id === id);
    const myTasksForUpdate = tasks.filter(task => task.id !== id);
    if (myTasks) {
      myTasks[0].done = !myTasks[0].done;

      setTasks([...myTasksForUpdate, myTasks[0]]);
    };
  }

  function handleRemoveTask(id: number) {
    const myTasks = tasks.filter(task => task.id !== id);
    if (myTasks) {
      setTasks(myTasks);
    };
  }


  return (
    <>
      <Header />

      <TodoInput addTask={handleAddTask} />

      <MyTasksList 
        tasks={tasks} 
        onPress={handleMarkTaskAsDone} 
        onLongPress={handleRemoveTask} 
      />
    </>
  )
}