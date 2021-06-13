import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListInfoServiceService {

  constructor() { }

  infoListText : string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, Duis viverra sapien ac, sapien venenatis porttitor, Vestibulum fermentum non, neque sed pharetra, Proin nec turpis at enim, dignissim interdum, Nunc vel lectus rutrum, consectetur dui et, dignissim nulla, Nunc rhoncus felis ac enim tincidunt, in blandit ligula aliquam, Sed turpis leo, fermentum eget eros in, fermentum dapibus erat, Aenean vel auctor erat, Cras libero enim, lobortis at lacus et, volutpat eleifend metus, Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos, Sed velit libero, faucibus nec erat ut, tincidunt efficitur nisl, Sed pharetra felis ligula, et consectetur neque euismod mollis, Sed consequat, leo vitae tempus pulvinar, odio est cursus mauris, non vulputate nunc magna ac erat, Proin vel tincidunt tellus, vel convallis purus, Sed dignissim nunc sapien, in auctor justo maximus vitae";

  buildInfoList(){
    var splitted = this.infoListText.split(",");
    return splitted;
  }
}
