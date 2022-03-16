import { Injectable } from "@angular/core";
import { MatDialog } from '@angular/material/dialog';

@Injectable({
    providedIn: 'root'
})

export class DialogBox {

    constructor(public dialog: MatDialog) { }

    dialogRef: any;

    openDialog(templateRef: any, width: string = '80vw', height: string = "80vh") {
        this.dialogRef = this.dialog.open(templateRef, {
            width: width,
            height: height
        })
        this.dialogRef.afterClosed().subscribe(() => templateRef.focus());
    }
}
