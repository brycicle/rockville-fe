import {Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewChild} from '@angular/core';
import {LotObject} from '../../../../shared/models/lot-object';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {HouseService} from '../../../../shared/services/house.service';
import {LotService} from '../../../../shared/services/lot.service';
import {Lot} from '../../../../shared/models/lot';
import {take} from 'rxjs/operators';
import {HouseDetail} from '../../../../shared/models/house-detail';
import {HousePicture} from '../../../../shared/models/house-picture';
import {House} from '../../../../shared/models/house';
import {LotCoordinate} from '../../../../shared/models/lot-coordinate';
import {tr} from 'date-fns/locale';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {

  @ViewChild('lotContainer', {static: true})
  lotContainer: ElementRef<HTMLDivElement> = {} as ElementRef;

  @ViewChild('svgContainer', {static: true})
  svgContainer: ElementRef<SVGElement> = {} as ElementRef;


  public lots3: Array<LotObject> = [];
  @Input() lots2: Array<Lot> = [];
  public houses: any[] = [];
  @Output() lotClickEvent = new EventEmitter<string>();

  lot: Lot = new Lot(
      "1",
      [],
      "Lot",
      "Block",
      "Available",
      'Type',
      0,
      [],
      0
  );

  mapLoaded = false;
  viewBoxData = '';

  constructor(
      private modalService: NgbModal, private lotService: LotService, private houseService: HouseService, private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    this.createMap();
    this.viewBoxData = "0 0 " + this.lotContainer.nativeElement.offsetWidth + ' ' + this.lotContainer.nativeElement.offsetHeight
    this.mapLoaded = true;
  }
  createMap(): void {
    this.lots2.forEach(lot => {
      let coordinates = "";
      let centerX = 0;
      let centerY = 0;
      lot.coordinates.forEach(coordinate => {
        coordinate.coorY = (coordinate.coorY * (this.lotContainer.nativeElement.offsetHeight / 261)) * 1.05 - (this.lotContainer.nativeElement.offsetHeight*.1);
        coordinate.coorX = (coordinate.coorX * (this.lotContainer.nativeElement.offsetWidth / 305)) * 1.05;
        centerX = centerX + coordinate.coorX;
        centerY = centerY + coordinate.coorY;
        coordinates = coordinates + coordinate.coorX + "," + coordinate.coorY + " ";
      });
      let lotToInsert2 = new LotObject(
          lot.lotId,
          coordinates.substring(0, coordinates.length - 2),
          lot.lotNumber,
          lot.blockNumber,
          lot.status,
          lot.size,
          centerX / 4,
          centerY / 4
      );
      this.lots3.push(
          lotToInsert2
      );
    });
  }

  onResize(event) {
    // console.log('RESIZED');
    // console.log(event);
    // // @ts-ignore
    // // for (let child of this.svgContainer.nativeElement.childNodes) {
    // //   this.renderer.removeChild(this.svgContainer.nativeElement, child);
    // // }
    //
    // console.log(event.target.innerHeight);
    // console.log(event.target.innerWidth);
    // console.log(this.lotContainer.nativeElement.offsetHeight);
    // console.log(this.lotContainer.nativeElement.offsetWidth);
    // this.mapLoaded = false;
    // this.createMap();
    // this.mapLoaded = true;
  }

  public showLot(lotId: string) {
    this.lotClickEvent.emit(lotId);
  }
}
