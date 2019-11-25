import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Exercice';

    posts = [
        {
            title: 'Mon premier post',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedminim veniam, quis',
            loveIts: 0,
            created_at: new Date()
        },
        {
            title: 'Mon deuxième post',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedminim veniam, quis',
            loveIts: -2,
            created_at: new Date()
        },       {
            title: 'Encore un post',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedminim veniam, quis',
            loveIts: 0,
            created_at: new Date()
        },
    ];
}
