/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    styleUrls: ['./about.component.scss'],
    templateUrl: './about.component.html'
})

export class AboutComponent {

    pagination = {
        firstItem: 0,
        lastItem: 9,
        totalItems: 100
    }
    users = [{
        id: 1,
        name : "Foo",
        creation: new Date(),
        color: "FFFFFF"
        }]

    constructor(private router:Router){

    }

    public goToPage(page){
        console.log("Going to page "+page)
        this.router.navigate(["/about", {page: page}])
    }

}
