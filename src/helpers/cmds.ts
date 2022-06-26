import Controller from '../robot/controller';

export const cmds: { [key: string]: any } = {
  mouse_up: Controller.moveMouseUp,
  mouse_down: Controller.moveMouseDown,
  mouse_left: Controller.moveMouseLeft,
  mouse_right: Controller.moveMouseRight,
  mouse_position: Controller.getMouseCord,
  draw_circle: Controller.drawCircle,
  draw_rectangle: Controller.drawRect,
  draw_square: Controller.drawSquare,
  prnt_scrn: Controller.getPrntScrn,
};
