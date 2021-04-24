import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Member } from 'src/models/Member';
import { MemberService } from 'src/services/member.service';
import { ConfirmDialogComponent } from '../@root/confirm-dialog/confirm-dialog.component';
import { GLOBAL } from '../app_config';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {


  
  displayedColumns: string[] = ['id','cin', 'name', 'cv', 'type','dateCreated','action'];
  //dataSource : Member[] = GLOBAL._DB.members;
  dataSource: MatTableDataSource<Member>;

  constructor(private MS: MemberService , private dialog: MatDialog) { 

    this.dataSource = new MatTableDataSource(this.MS.tab);}

  ngOnInit(): void {
    
  }
  
  onRemoveAccount(id: string): void {
    
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      height: '200px',
      width: '250px',
    });
dialogRef.afterClosed().pipe().subscribe(
  isDeleteConfirmed =>{
    console.log('removing: ',isDeleteConfirmed);
    if(isDeleteConfirmed){
      this.MS.RemoveMemberById(id).then(()=>this.fetchDataSource());
    }
  }
  )
  }

  fetchDataSource(): void 
  {
    this.MS.GetAllmembers().then(data => this.dataSource.data=data)
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

