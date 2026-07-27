import { Component } from '@angular/core';

@Component({
  selector: 'app-messages-table',
  imports: [],
  templateUrl: './messages-table.html',
  styleUrl: './messages-table.css',
})
export class MessagesTable {
     messages: any[] = [];

  ngOnInit(): void {

    const messagesStorage = JSON.parse(localStorage.getItem('messages') || '[]');

    this.messages = messagesStorage;

  }
  supprimerMessage(index: number): void {

  this.messages.splice(index, 1);

  localStorage.setItem('messages', JSON.stringify(this.messages));

}
} 


