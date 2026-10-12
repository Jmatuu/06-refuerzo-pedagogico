export type Direccion = 'incrementar' | 'decrementar';
export type EstadoUI = 'MINIMO' | 'IDLE' | 'MAXIMO';
export interface ContadorConfig {
  readonly valor: number;
  readonly paso: number;
  readonly minimo: number;
  readonly maximo: number;
}
export function calcularValor(config: ContadorConfig, direccion: Direccion): number {
  const siguiente =
    direccion === 'incrementar'
      ? config.valor + config.paso
      : config.valor - config.paso;

  return Math.min(config.maximo, Math.max(config.minimo, siguiente));
}
export function estadoUI(valor: number, config: ContadorConfig): EstadoUI {
  if (valor <= config.minimo) return 'MINIMO';
  if (valor >= config.maximo) return 'MAXIMO';
  return 'IDLE';
}