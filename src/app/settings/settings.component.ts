import { Component, OnInit } from '@angular/core';
import { RideIndexerService } from '../ride-indexer.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor(private rideIndexerService: RideIndexerService) { }

  indexProgress: Observable<string>;

  ngOnInit(): void {
  }

  importRides() {
    this.indexProgress = this.rideIndexerService.OnIndexed$;
    this.rideIndexerService.indexOb().subscribe((s) => console.log('sub', s));
  }

  async stopImportRides() {
    this.rideIndexerService.stop();
  }


}
