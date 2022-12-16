import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Params } from '@angular/router';

@Component({
	selector: 'app-product.detail',
	templateUrl: './product.detail.component.html',
	styleUrls: ['./product.detail.component.scss'],
	providers: [
		// ActivatedRouteSnapshot
	]
})
export class ProductDetailComponent implements OnInit {

	constructor(
		private route: ActivatedRoute,
		// private snapShot: ActivatedRouteSnapshot
	) {
		this.route.queryParams.subscribe((parqams: Params) => {
			console.log('id', parqams['id']);
			console.log('id2', parqams['id2']);
		});
		// console.log(this.snapShot.data);
	}

	ngOnInit(): void {
	}

}
