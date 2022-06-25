import { getMousePos, moveMouseSmooth, mouseToggle, getScreenSize } from 'robotjs';

import { ICordObj } from '../interfaces/ICordObj';
import { IMouseCord } from '../interfaces/IMouseCord';

class Controller {
  private static moveMousePushed(x: number, y: number): void {
    mouseToggle('down', 'left');
    moveMouseSmooth(x, y);
    mouseToggle('up', 'left');
  }

  private static getCordObj(): ICordObj {
    return {...getMousePos(), ...getScreenSize()};
  }

  moveMouseUp(y: number): void {
    const cord = Controller.getCordObj();
    if (cord.y - y <= 0) moveMouseSmooth(cord.x, 0);
    else moveMouseSmooth(cord.x, cord.y - y);
  }

  moveMouseDown(y: number): void  {
    const cord = Controller.getCordObj();
    if (cord.y + y >= cord.height) moveMouseSmooth(cord.x, cord.height);
    else moveMouseSmooth(cord.x, cord.y + y);
  }

  moveMouseLeft(x: number): void  {
    const cord = Controller.getCordObj();
    if (cord.x - x <= 0) moveMouseSmooth(0, cord.y);
    else moveMouseSmooth(cord.x - x, cord.y);
  }

  moveMouseRight(x: number): void {
    const cord = Controller.getCordObj();
    if(cord.x + x >= cord.width) moveMouseSmooth(cord.width, cord.y);
    else moveMouseSmooth(cord.x + x, cord.y);
  }

  getMouseCord(): IMouseCord {
    return getMousePos();
  }

  drawCircle(r: number): void {
    const cord = Controller.getCordObj();
    let newR = r;

    // Check if circle fit in borders of screen and if it isn't => set new radius
    if (2 * newR > cord.x) newR = cord.x / 2;
    if (newR > cord.y) newR = cord.y;
    if (newR > cord.height - cord.y) newR = cord.height - cord.y;

    for (let i = 0; i <= Math.PI * 2; i += 0.01) {
      Controller.moveMousePushed((cord.x - newR) + newR * Math.cos(i), cord.y + newR * Math.sin(i));
    }
  }
}

export default new Controller();
