import { Component, Input } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { Taladro } from '../../models/taladro.model';
import { PreferitsService } from '../../services/preferits.service';


@Component({
  selector: 'app-targeta-taladro',
  standalone: true,
  imports: [UpperCasePipe],
  templateUrl: './targeta-taladro.component.html',
  styleUrl: './targeta-taladro.component.scss',
})
export class TargetaTaladroComponent {
  @Input() taladro!: Taladro;

  constructor(public preferitsService: PreferitsService){

  }

  togglePreferit(taladro: Taladro): void {
    if (this.preferitsService.esPreferit(taladro.id)) {
      this.preferitsService.eliminarPreferit(taladro.id);
    } else {
      this.preferitsService.afegirPreferit(taladro);
    }
  }

  get imgUrl(): string {
    return "img/" + this.getImg();
  }

  getImg() {
    switch (this.taladro.material) {
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
