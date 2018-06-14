import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  colors = [];

	fillColors() {
		for (let i = 0; i < 10; i++){
			const randNum = (Math.floor(Math.random() * 6) ) + 1;
			if (randNum === 1) {
				this.colors.push('DarkSeaGreen');
			} else if (randNum === 2) {
				this.colors.push('MediumBlue');
			} else if (randNum === 3) {
				this.colors.push('MediumAquaMarine');
			} else if (randNum === 4) {
				this.colors.push('DarkBlue');
			} else if (randNum === 5) {
				this.colors.push('CadetBlue');
			} else if (randNum === 6) {
				this.colors.push('Chartreuse');
			} else if (randNum === 7) {
				this.colors.push('IndianRed');
			}
		}
	}
	ngOnInit(){
		this.fillColors();
	}
}
