import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LocalNotifications } from '@capacitor/local-notifications';
import { IonicModule } from '@ionic/angular';
import { TodoService } from '../services/todo.services';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.page.html',
  styleUrls: ['./todo.page.scss'],
  imports: [IonicModule, FormsModule, CommonModule],
})
export class TodoPage implements OnInit {
  tasks = [];
  taskTitle = '';
  taskReminder = '';

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.fetchTasks();
  }

  userSelectedDate: Date | null = null;

  async testLocalNotification() {
    // Ensure the user has selected a date
    if (this.userSelectedDate) {
      await LocalNotifications.schedule({
        notifications: [
          {
            id: 1,
            title: 'Test Notification',
            body: 'This is a test notification!',
            schedule: { at: this.userSelectedDate }, // Schedule based on user input
          },
        ],
      });
    } else {
      console.log('No date selected.');
    }
  }

  // Handle the change event from ion-datetime
  onDateChange(event: any) {
    this.userSelectedDate = new Date(event.target.value);
    console.log('User selected date:', this.userSelectedDate);
  }

  fetchTasks() {
    this.todoService.getTodos().subscribe((tasks) => {
      // this.tasks = tasks;
    });
  }

  addTask() {
    const newTask = { title: this.taskTitle, reminder: this.taskReminder };
    this.todoService.addTodo(newTask).subscribe((task: any) => {
      this.tasks.push();
      this.scheduleNotification(task);
      this.fetchTasks();
    });
  }

  async scheduleNotification(task: {
    reminder: string | number | Date;
    title: any;
    id: any;
  }) {
    const reminderDate = new Date(task.reminder);
    await LocalNotifications.schedule({
      notifications: [
        {
          title: 'Reminder for Task',
          body: task.title,
          id: task.id,
          schedule: {
            at: reminderDate,
          },
          // sound: null,
        },
      ],
    });
  }
}
