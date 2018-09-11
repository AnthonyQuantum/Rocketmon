import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'updates-details',
    templateUrl: './updates-details.component.html',
    styleUrls: ['./updates-details.component.css']
})

export class UpdatesDetailsComponent implements OnInit, OnDestroy {
    id: string;
    private sub: any;

    constructor(private route: ActivatedRoute) {
    }
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.id = (+params['id']).toString();
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
