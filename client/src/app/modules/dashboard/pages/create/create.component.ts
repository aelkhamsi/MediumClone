import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CST } from '../../../../constants/ls';
import { ArticleService } from 'src/app/services/articles/article.service';



@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  createForm : FormGroup;

  constructor(
    private fb: FormBuilder, 
    private articleService: ArticleService, 
    private router: Router,
    private _snackBar: MatSnackBar ) {}

  ngOnInit() {
    this.createForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    })
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
    });
  }

  onSubmit() {
    console.log("Submit article");
    this.articleService.addArticle(this.createForm.value.title, this.createForm.value.content)
      .subscribe((response: any) => {
        this.openSnackBar("Article Added", "Success");
        this.router.navigate(['dashboard']);
      }, (error) => { // error is of type HttpErrorResponse
        this.openSnackBar(error.errorMessage, "Error");
        this.createForm.reset();
      }); 
  }

}
