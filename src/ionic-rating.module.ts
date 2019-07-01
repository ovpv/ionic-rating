import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";

import { RatingComponent } from "./components/rating";

@NgModule({
  imports: [IonicModule, FormsModule],
  exports: [RatingComponent],
  declarations: [RatingComponent]
})
export class IonicRatingModule {}
