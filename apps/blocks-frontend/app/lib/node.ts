export interface Node {
  id: string;
  position: {
    x: number;
    y: number;
  };
  data: {
    label: string;
  };
}
