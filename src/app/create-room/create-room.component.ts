import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.scss']
})
export class CreateRoomComponent implements OnInit {
  // data = window.location.href + '/space';
  data = window.location.origin + '/sponsor?data=' + JSON.stringify({
    money: 8
  });

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  joinRoom(): void{
    this.router.navigateByUrl('create-room/1/space');
  }

}
