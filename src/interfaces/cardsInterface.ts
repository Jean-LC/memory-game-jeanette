export interface ICards {
  id: number;
  src: string;
}

export interface IShuffledCards extends ICards {
  uniqueId: number;
}
