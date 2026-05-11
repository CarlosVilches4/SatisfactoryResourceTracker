import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ElementService } from '../../services/lista-taladro.service';
import { Taladro } from '../../models/taladro.model';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-detall',
  standalone: true,
  imports: [NgIf],
  templateUrl: './detall.component.html',
  styleUrl: './detall.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DetallComponent implements OnInit {

  private route = inject(ActivatedRoute);
  private elementService = inject(ElementService);
    

  taladro?: Taladro;

  ngOnInit(): void {

    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.elementService.obtenirPerId(id)
      .subscribe(taladro => {
        this.taladro = taladro;
    });
  }

  get imgTaladroUrl(): string {
    return "img/" + this.getTaladroImg();
  }

  get imgMaterialUrl(): string {
    return "img/" + this.getMaterialImg();
  }

  getTaladroImg() {
    switch (this.taladro?.nom) {
      case "MK1":
        return "Miner_Mk1.png";

      case "MK2":
        return "Miner_Mk2.png";

      case "MK3":
        return "Miner_Mk3.png";

      default:
        return ""
    }
  }

  getMaterialImg() {
    switch (this.taladro?.material) {
      case "bauxite":
        return "Bauxite.png";

      case "caterium":
        return "Caterium_Ore.png";

      case "carbón":
        return "Coal.png";

      case "cobre":
        return "Copper_Ore.png";

      case "hierro":
        return "Iron_Ore.png";

      case "caliza":
        return "Limestone.png";

      case "cuarzo":
        return "Raw_Quartz.png";

      case "sam":
        return "SAM.png"

      case "azufre":
        return "Sulfur.png"

      case "uranio":
        return "Uranium.png"

      default:
        return ""
    }
  }
}
