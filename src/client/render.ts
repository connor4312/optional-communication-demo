import type { RendererContext } from 'vscode-notebook-renderer';

interface IRenderInfo {
  container: HTMLElement;
  mime: string;
  value: any;
  context: RendererContext<unknown>;
}

export function render({ container, mime, value, context }: IRenderInfo) {
  if ('postMessage' in context) {
    container.innerText = 'Communication IS available';
  } else {
    container.innerText = 'Communication IS NOT available';
  }
}
