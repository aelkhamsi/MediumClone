import { NgModule } from '@angular/core';
import { MatSelectModule} from '@angular/material/select';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material';
import {MatRadioModule} from '@angular/material/radio';


const modules = [
    MatButtonModule,
    MatCheckboxModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    MatSnackBarModule,
    MatRadioModule
]
@NgModule({
    imports: [...modules],
    exports: [...modules]
})
export class MaterialModule { }
