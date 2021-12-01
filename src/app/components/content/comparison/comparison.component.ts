import { Component, Inject, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators,
} from "@angular/forms";
import { ThemePalette } from "@angular/material/core";
import { MatDialog, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { DialogDataExampleDialogComponent } from "./dialog-data-example-dialog/dialog-data-example-dialog.component";
import { ErrorStateMatcher } from "@angular/material/core";
import { InputErrorStateMatcherExampleComponent } from "./input-error-state-matcher-example/input-error-state-matcher-example.component";

export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}

// export interface DialogData {
//   animal: "panda" | "unicorn" | "lion";
// }
export interface DialogData {
  animal: string,
  name: string
}
@Component({
  selector: "app-comparison",
  templateUrl: "./comparison.component.html",
  styleUrls: ["./comparison.component.css"],
})
export class ComparisonComponent implements OnInit {
  @ViewChild(InputErrorStateMatcherExampleComponent) child: InputErrorStateMatcherExampleComponent;
  
  // isErrorState(
  //   control: FormControl | null,
  //   form: FormGroupDirective | NgForm | null
  // ): boolean {
  //   const isSubmitted = form && form.submitted;
  //   return !!(
  //     control &&
  //     control.invalid &&
  //     (control.dirty || control.touched || isSubmitted)
  //   );
  // }
  // links = ['First', 'Second', 'Third'];
  // activeLink = this.links[0];
  // background: ThemePalette = undefined;

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    return day !== 0 && day !== 6
  }

  states: string[] = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
  ];

  // tabLoadTimes: Date[] = [];
  panelOpenState = false;

  task: Task = {
    name: "Indeterminate",
    completed: false,
    color: "primary",
    subtasks: [
      { name: "Primary", completed: false, color: "primary" },
      { name: "Accent", completed: false, color: "accent" },
      { name: "Warn", completed: false, color: "warn" },
    ],
  };
  allComplete: boolean = false;

  // name: string;
  // animal: string;
  minDate: Date;
  maxDate: Date;
  constructor(public dialog: MatDialog, private formBuilder: FormBuilder) {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 20, 0, 1);
    this.maxDate = new Date(currentYear + 1, 11, 31)
  }

  // addLink() {
  //   this.links.push(`Link ${this.links.length + 1}`)
  // }
  // toogleBackground() {
  //   this.background = this.background ? undefined : 'primary';
  // }

  // getTimeLoaded(index: number) {
  //   if (!this.tabLoadTimes[index]) {
  //     this.tabLoadTimes[index] = new Date();
  //   }
  //   return this.tabLoadTimes[index];
  // }

  // updateAllComplete() {
  //   this.allComplete =
  //     this.task.subtasks != null &&
  //     this.task.subtasks.every((t) => t.completed);
  // }
  // someComplete(): boolean {
  //   if (this.task.subtasks == null) {
  //     return false;
  //   }
  //   return (
  //     this.task.subtasks.filter((t) => t.completed).length > 0 !=
  //     this.allComplete
  //   );
  // }
  // setAll(completed: boolean) {
  //   this.allComplete = completed;
  //   if (this.task.subtasks == null) {
  //     return;
  //   }
  //   this.task.subtasks.forEach((t) => (t.completed = completed));
  // }

  // openDialog() {
  //   this.dialog.open(DialogDataExampleDialogComponent, {
  //     data: {
  //       animal: 'lion',
  //     }
  //   })
  // }
  // openDialog(): void {
  //   const dialogRef = this.dialog.open(DialogDataExampleDialogComponent, {
  //     width: '250px',
  //     data: {name: this.name, animal: this.animal}                                                                                                                                                                                                                                                          
  //   });
  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //     this.animal = result;
  //   })
  // }

  ngOnInit(): void {
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ["", Validators.required, Validators.email],
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ["", Validators.required, Validators.minLength(8)],
    });
  }
  ngAfterViewnit() {
    console.log(this.child.hiGuy());
    
  }
}
