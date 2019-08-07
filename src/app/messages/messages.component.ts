import { MessageService } from './../message.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  //  这个messageService 属性必须是一个公共属性，因为将在模板中绑定到它， angular只会绑定到组件的公共属性，公共属性前面加上public
  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}
