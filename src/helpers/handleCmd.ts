import { cmds } from './cmds';
import { IMouseCord } from '../interfaces/IMouseCord';

export async function handleCmd(cmd: string): Promise<string> {
  const cmdArr = cmd.split(' ');

  if (cmdArr[0] === 'mouse_position') {
    const mouseCord: IMouseCord = await cmds[cmdArr[0]](
      ...cmdArr.slice(1).map((arg) => +arg)
    );
    return `${cmd} ${mouseCord.x},${mouseCord.y}`;
  } else if (cmdArr[0] === 'prnt_scrn') {
    const buff = await cmds[cmdArr[0]](...cmdArr.slice(1).map((arg) => +arg));
    return `${cmd} ${buff}`;
  } else {
    await cmds[cmdArr[0]](...cmdArr.slice(1).map((arg) => +arg));
    return cmd;
  }
}
