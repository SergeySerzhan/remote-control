import { cmds } from './cmds';
import { IMouseCord } from '../interfaces/IMouseCord';

export function handleCmd(cmd: string): string {
  const cmdArr = cmd.split(' ');

  if (cmdArr[0] === 'mouse_position') {
    const mouseCord: IMouseCord = cmds[cmdArr[0]](...cmdArr.slice(1).map(arg => +arg));
    return `${cmd} ${mouseCord.x},${mouseCord.y}`
  }  else {
    cmds[cmdArr[0]](...cmdArr.slice(1).map(arg => +arg));
    return cmd;
  }
}
